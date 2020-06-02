var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.RNSVGTSpan=exports.default=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _extractProps=_interopRequireWildcard(require("../lib/extract/extractProps"));var _extractTransform=_interopRequireDefault(require("../lib/extract/extractTransform"));var _extractText=_interopRequireWildcard(require("../lib/extract/extractText"));var _util=require("../lib/util");var _Shape2=_interopRequireDefault(require("./Shape"));var _jsxFileName="/Users/jannegylling/IdeaProjects/react-native-svg/src/elements/TSpan.tsx";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var TSpan=function(_Shape){(0,_inherits2.default)(TSpan,_Shape);function TSpan(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,TSpan);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(TSpan)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.setNativeProps=function(props){var matrix=!props.matrix&&(0,_extractTransform.default)(props);if(matrix){props.matrix=matrix;}var prop=(0,_extractProps.propsAndStyles)(props);(0,_extends2.default)(prop,(0,_util.pickNotNil)((0,_extractText.default)(prop,false)));_this.root&&_this.root.setNativeProps(prop);};return _this;}(0,_createClass2.default)(TSpan,[{key:"render",value:function render(){var prop=(0,_extractProps.propsAndStyles)(this.props);var props=(0,_extractProps.default)(_objectSpread({},prop,{x:null,y:null}),this);(0,_extends2.default)(props,(0,_extractText.default)(prop,false));props.ref=this.refMethod;return _react.default.createElement(RNSVGTSpan,(0,_extends2.default)({},props,{__source:{fileName:_jsxFileName,lineNumber:40}}));}}]);return TSpan;}(_Shape2.default);exports.default=TSpan;TSpan.displayName='TSpan';(0,_extractText.setTSpan)(TSpan);var RNSVGTSpan=(0,_reactNative.requireNativeComponent)('RNSVGTSpan');exports.RNSVGTSpan=RNSVGTSpan;
//# sourceMappingURL=TSpan.js.map