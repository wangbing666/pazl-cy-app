const CONFIG_LIST = {
    dev: {
      URL: 'https://fls-afch-stg.pingan.com.cn/pazl-zk', // 外网
    },
    uat: {
      URL: 'https://fls-aflm-test.pingan.com.cn:6443/pazl-zk',
    },
    prd: {
      URL: 'https://fls-afch.pingan.com.cn/pazl-zk',
    }
  };
  export const CONFIG = CONFIG_LIST[process.env.ENV_TYPE || 'dev'];
  