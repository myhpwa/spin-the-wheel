(this["webpackJsonpspin-the-wheel"]=this["webpackJsonpspin-the-wheel"]||[]).push([[0],{292:function(e,t,n){"use strict";n.r(t),n.d(t,"createSwipeBackGesture",(function(){return i}));var r=n(17),a=n(72),i=(n(39),function(e,t,n,i,c){var o=e.ownerDocument.defaultView;return Object(a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:n,onMove:function(e){var t=e.deltaX/o.innerWidth;i(t)},onEnd:function(e){var t=e.deltaX,n=o.innerWidth,a=t/n,i=e.velocityX,s=n/2,u=i>=0&&(i>.2||e.deltaX>s),h=(u?1-a:a)*n,d=0;if(h>5){var l=h/Math.abs(i);d=Math.min(l,540)}c(u,a<=0?.01:Object(r.j)(0,a,.9999),d)}})})}}]);
//# sourceMappingURL=0.dc83fed2.chunk.js.map