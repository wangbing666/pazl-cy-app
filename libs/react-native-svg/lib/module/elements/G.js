import _extends from"@babel/runtime/helpers/extends";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/jannegylling/IdeaProjects/react-native-svg/src/elements/G.tsx";import React from'react';import{requireNativeComponent}from'react-native';import extractProps,{propsAndStyles}from'../lib/extract/extractProps';import{extractFont}from'../lib/extract/extractText';import extractTransform from'../lib/extract/extractTransform';import Shape from'./Shape';var G=function(_Shape){_inherits(G,_Shape);function G(){var _getPrototypeOf2;var _this;_classCallCheck(this,G);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(G)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.setNativeProps=function(props){var matrix=!props.matrix&&extractTransform(props);if(matrix){props.matrix=matrix;}_this.root&&_this.root.setNativeProps(props);};return _this;}_createClass(G,[{key:"render",value:function render(){var props=this.props;var prop=propsAndStyles(props);return React.createElement(RNSVGGroup,_extends({ref:this.refMethod},extractProps(prop,this),{font:extractFont(prop),__source:{fileName:_jsxFileName,lineNumber:28}}),props.children);}}]);return G;}(Shape);G.displayName='G';export{G as default};export var RNSVGGroup=requireNativeComponent('RNSVGGroup');
//# sourceMappingURL=G.js.map