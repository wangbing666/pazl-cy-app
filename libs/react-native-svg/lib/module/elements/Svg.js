import _extends from"@babel/runtime/helpers/extends";import _toConsumableArray from"@babel/runtime/helpers/toConsumableArray";import _defineProperty from"@babel/runtime/helpers/defineProperty";import _objectWithoutProperties from"@babel/runtime/helpers/objectWithoutProperties";import _classCallCheck from"@babel/runtime/helpers/classCallCheck";import _createClass from"@babel/runtime/helpers/createClass";import _possibleConstructorReturn from"@babel/runtime/helpers/possibleConstructorReturn";import _getPrototypeOf from"@babel/runtime/helpers/getPrototypeOf";import _inherits from"@babel/runtime/helpers/inherits";var _jsxFileName="/Users/jannegylling/IdeaProjects/react-native-svg/src/elements/Svg.tsx";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}import React from'react';import{requireNativeComponent,StyleSheet,findNodeHandle,NativeModules}from'react-native';import extractResponder from'../lib/extract/extractResponder';import extractViewBox from'../lib/extract/extractViewBox';import extractColor from'../lib/extract/extractColor';import Shape from'./Shape';import G from'./G';var RNSVGSvgViewManager=NativeModules.RNSVGSvgViewManager;var styles=StyleSheet.create({svg:{backgroundColor:'transparent',borderWidth:0}});var Svg=function(_Shape){_inherits(Svg,_Shape);function Svg(){var _getPrototypeOf2;var _this;_classCallCheck(this,Svg);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_possibleConstructorReturn(this,(_getPrototypeOf2=_getPrototypeOf(Svg)).call.apply(_getPrototypeOf2,[this].concat(args)));_this.measureInWindow=function(callback){_this.root&&_this.root.measureInWindow(callback);};_this.measure=function(callback){_this.root&&_this.root.measure(callback);};_this.measureLayout=function(relativeToNativeNode,onSuccess,onFail){_this.root&&_this.root.measureLayout(relativeToNativeNode,onSuccess,onFail);};_this.setNativeProps=function(props){var width=props.width,height=props.height;if(width){props.bbWidth=width;}if(height){props.bbHeight=height;}_this.root&&_this.root.setNativeProps(props);};_this.toDataURL=function(callback,options){if(!callback){return;}var handle=findNodeHandle(_this.root);RNSVGSvgViewManager.toDataURL(handle,options,callback);};return _this;}_createClass(Svg,[{key:"render",value:function render(){var _this$props=this.props,_this$props$opacity=_this$props.opacity,opacity=_this$props$opacity===void 0?1:_this$props$opacity,viewBox=_this$props.viewBox,preserveAspectRatio=_this$props.preserveAspectRatio,style=_this$props.style,children=_this$props.children,onLayout=_this$props.onLayout,props=_objectWithoutProperties(_this$props,["opacity","viewBox","preserveAspectRatio","style","children","onLayout"]);var stylesAndProps=_objectSpread({},Array.isArray(style)?Object.assign.apply(Object,[{}].concat(_toConsumableArray(style))):style,{},props);var color=stylesAndProps.color,width=stylesAndProps.width,height=stylesAndProps.height,focusable=stylesAndProps.focusable,font=stylesAndProps.font,transform=stylesAndProps.transform,fill=stylesAndProps.fill,fillOpacity=stylesAndProps.fillOpacity,fillRule=stylesAndProps.fillRule,stroke=stylesAndProps.stroke,strokeWidth=stylesAndProps.strokeWidth,strokeOpacity=stylesAndProps.strokeOpacity,strokeDasharray=stylesAndProps.strokeDasharray,strokeDashoffset=stylesAndProps.strokeDashoffset,strokeLinecap=stylesAndProps.strokeLinecap,strokeLinejoin=stylesAndProps.strokeLinejoin,strokeMiterlimit=stylesAndProps.strokeMiterlimit;var w=parseInt(width,10);var h=parseInt(height,10);var doNotParseWidth=isNaN(w)||width[width.length-1]==='%';var doNotParseHeight=isNaN(h)||height[height.length-1]==='%';var dimensions=width&&height?{width:doNotParseWidth?width:w,height:doNotParseHeight?height:h,flex:0}:null;var o=+opacity;var opacityStyle=!isNaN(o)?{opacity:o}:null;var tint=extractColor(color);return React.createElement(RNSVGSvg,_extends({},props,{bbWidth:width,bbHeight:height,color:tint,tintColor:tint,onLayout:onLayout,ref:this.refMethod,style:[styles.svg,style,opacityStyle,dimensions],focusable:Boolean(focusable)&&focusable!=='false'},extractResponder(props,this),extractViewBox({viewBox:viewBox,preserveAspectRatio:preserveAspectRatio}),{__source:{fileName:_jsxFileName,lineNumber:157}}),React.createElement(G,_extends({children:children,style:style,font:font,transform:transform,fill:fill,fillOpacity:fillOpacity,fillRule:fillRule,stroke:stroke,strokeWidth:strokeWidth,strokeOpacity:strokeOpacity,strokeDasharray:strokeDasharray,strokeDashoffset:strokeDashoffset,strokeLinecap:strokeLinecap,strokeLinejoin:strokeLinejoin,strokeMiterlimit:strokeMiterlimit},{__source:{fileName:_jsxFileName,lineNumber:170}})));}}]);return Svg;}(Shape);Svg.displayName='Svg';Svg.defaultProps={preserveAspectRatio:'xMidYMid meet'};export{Svg as default};export var RNSVGSvg=requireNativeComponent('RNSVGSvgView');
//# sourceMappingURL=Svg.js.map