var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.RNSVGRect=exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _extractProps=_interopRequireWildcard(require("../lib/extract/extractProps"));var _Shape2=_interopRequireDefault(require("./Shape"));var _jsxFileName="/Users/jannegylling/IdeaProjects/react-native-svg/src/elements/Rect.tsx";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Rect=function(_Shape){(0,_inherits2.default)(Rect,_Shape);function Rect(){(0,_classCallCheck2.default)(this,Rect);return(0,_possibleConstructorReturn2.default)(this,(0,_getPrototypeOf2.default)(Rect).apply(this,arguments));}(0,_createClass2.default)(Rect,[{key:"render",value:function render(){var props=this.props;var x=props.x,y=props.y,width=props.width,height=props.height,rx=props.rx,ry=props.ry;return _react.default.createElement(RNSVGRect,(0,_extends2.default)({ref:this.refMethod},(0,_extractProps.default)(_objectSpread({},(0,_extractProps.propsAndStyles)(props),{x:null,y:null}),this),{x:x,y:y,width:width,height:height,rx:rx,ry:ry,__source:{fileName:_jsxFileName,lineNumber:28}}));}}]);return Rect;}(_Shape2.default);exports.default=Rect;Rect.displayName='Rect';Rect.defaultProps={x:0,y:0,width:0,height:0};var RNSVGRect=(0,_reactNative.requireNativeComponent)('RNSVGRect');exports.RNSVGRect=RNSVGRect;
//# sourceMappingURL=Rect.js.map