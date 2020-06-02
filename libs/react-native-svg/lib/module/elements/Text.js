import _defineProperty from"@babel/runtime/helpers/defineProperty";import _extends from"@babel/runtime/helpers/extends";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/jannegylling/IdeaProjects/react-native-svg/src/elements/Text.tsx";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}import React from'react';import{requireNativeComponent}from'react-native';import extractText from'../lib/extract/extractText';import extractProps,{propsAndStyles}from'../lib/extract/extractProps';import extractTransform from'../lib/extract/extractTransform';import{pickNotNil}from'../lib/util';import Shape from'./Shape';import'./TSpan';var Text=function(_Shape){_inherits(Text,_Shape);function Text(){var _getPrototypeOf2;var _this;_classCallCheck(this,Text);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(Text)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.setNativeProps=function(props){var matrix=props&&!props.matrix&&extractTransform(props);if(matrix){props.matrix=matrix;}var prop=propsAndStyles(props);_extends(prop,pickNotNil(extractText(prop,true)));_this.root&&_this.root.setNativeProps(prop);};return _this;}_createClass(Text,[{key:"render",value:function render(){var prop=propsAndStyles(this.props);var props=extractProps(_objectSpread({},prop,{x:null,y:null}),this);_extends(props,extractText(prop,true));props.ref=this.refMethod;return React.createElement(RNSVGText,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:41}}));}}]);return Text;}(Shape);Text.displayName='Text';export{Text as default};export var RNSVGText=requireNativeComponent('RNSVGText');
//# sourceMappingURL=Text.js.map