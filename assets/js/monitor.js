document.addEventListener("DOMContentLoaded", function () {
   
var tl = new TimelineMax();
tl.from('#base', 0.5, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut}).from('#collo', 0.5, {scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut}).from('#monitorBottom', 0.7, {scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut}).from('#monitor', 0.7, {scaleY: 0, transformOrigin: "bottom", ease: Circ.easeOut, delay: 0.4}).from('#spicchioGrande', 0.5, {scale: 0}).from('#spicchietto', 0.5, {scale: 0}).staggerFrom('#Layer_1 > g:nth-child(1) > g path', 0.2, {scaleX: 0}, -0.1)    
});