define(function(require,exports,module){
	var public = require('js/golbal');
	public.initpage(1);
	var content = require('view/content');
	var init = {
		initpage:function(){
			$('.content').html(content);
		}
	}
	module.exports = init;
})