//头部弹出框
// fade out
function fadeOut(el) {
	el.style.opacity = 1;
	(function fade() {
		if ((el.style.opacity -= .1) < 0) {
			el.style.display = 'none';
		} else {
			requestAnimationFrame(fade);
		}
	})();
}
var el = document.querySelector('.changPayArea');
el.addEventListener('click', function(e) {
	fadeOut(el);
});
//气泡弹出框
//var appTop = new Vue({
//		el: '#app0',
//		data: {
//
//		}
//	})
	//var Main = {
	//	data() {
	//		return {};
	//	}
	//};
	//var Ctor = Vue.extend(Main)
	//new Ctor().$mount('#app0')
	//页脚
//new Vue().$mount('#appfoot')

