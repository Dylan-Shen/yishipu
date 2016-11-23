define(function(require,exports,module){
	var public = require('js/golbal');
	public.initpage(3);
	var init = {
		initpage:function(){
			this.contentView();
		},
		contentView:function(){
			var homely = require('view/homely_view');
			$('.homely').html(homely);
		}
	}
	module.exports = init;
})