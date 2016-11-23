define(function(require,exports,module){
	var public = require('js/golbal');
	public.initpage(5);
	var classify = require('view/classify_view');
	var init = {
		initpage:function(){
			$('.classify').html(classify);
		}
	}
	module.exports = init;
})