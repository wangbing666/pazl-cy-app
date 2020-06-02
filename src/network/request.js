import { Toast, Dialog } from '../components';
const headers = () => ({
  'Content-Type': 'application/json',
});

const handleUrl = (url) => (params) => {
  let newUrl = url;
  if (params) {
    const paramsArray = [];
    Object.keys(params).forEach((key) => paramsArray.push(`${encodeURIComponent(params[key])}`));
    if (url.search(/\?/) === -1) {
      if (typeof (params) === 'object') {
        newUrl += `/${paramsArray.join('&')}`;
      }
    } else {
      newUrl += `&${paramsArray.join('&')}`;
    }
  }
  return newUrl;
};

const timeoutFetch = (originalFetch, loading, timeout = 30000) => {
  // if (loading) {
  //   // 需要显示loading
  //   if (isLoading(store.getState())) {
  //     // 存在进行中的loading
  //     return Promise.resolve();
  //   }
  //   store.dispatch(handelLoading(true));
  // }
  let timeoutBlock = () => { };
  const newOriginalFetch = new Promise((resolve, reject) => {
    originalFetch
      .then((response) => {
        // 接口请求成功
        if (response.ok || (response.status >= 200 && response.status <= 300)) return response;

        // 服务器错误相关
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      })
      .then((resjson) => resjson.json())
      .then((res) => _handleSuccess(res, resolve, reject, loading))
      .catch((error) => _handleError(error, reject, loading));
  });

  const timeoutPromise = new Promise((resolve, reject) => {
    timeoutBlock = () => {
      if (loading) store.dispatch(handelLoading(false));
      reject({ status: 300, message: '网络超时，请稍后再试' });
      // Toast.show('网络超时，请稍后再试');
    };
  });

  const abortablePromise = Promise.race([
    newOriginalFetch,
    timeoutPromise
  ]);

  setTimeout(() => {
    timeoutBlock();
  }, timeout);

  return abortablePromise;
};

export default class Request {
  static get = async (url, params = {}, options = {}, loading = true) => {
    let newHeaders = headers();
    newHeaders = { ...newHeaders, ...options };
    return timeoutFetch(
      fetch(handleUrl(url)(params), {
        method: 'GET',
        headers: newHeaders,
      }), loading
    );
  }

  static post = async (url, params = {}, options = {}, loading = true) => {
    let newParams;
    if (params) newParams = { ...params };
    let curParams = JSON.stringify(newParams);
    return timeoutFetch(
      fetch(newUrl || url, {
        method: 'POST',
        headers: { ...headers(), ...options },
        body: curParams
      }), loading
    );
  }
}

const _handleSuccess = (result, resolve, reject, loading) => {
  // if (loading) store.dispatch(handelLoading(false));
  if (result && result.code === 0) {
    resolve({
      status: result.code,
      message: result.msg || '',
      data: result.data || null
    });
  } else {
    if ((result && result.code === 9999) || (result && result.code === 9998)) {
      store.dispatch(actionHandleLogout());
      Dialog.show({
        title: '系统提示',
        notice: result.msg,
        confirm: '重新登录',
        confirmDoIt: () => { resetAction('Login'); Dialog.hide(); }
      });
    } else {
      Toast.show(result.msg);
    }
    reject({
      status: result.code,
      message: result.msg,
      data: result.data || null
    });
  }
};

const _handleError = (error, reject, loading) => {
  // if (loading) store.dispatch(handelLoading(false));
  RNLog({ handleError: error });
  reject({ status: '500', message: '服务异常，请稍后再试' });
  Toast.show('服务异常，请稍后再试');
};
