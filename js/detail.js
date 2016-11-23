define(function(require,exports,module){
	var public = require('js/golbal');
	public.initpage(4);
	var init = {
		initpage:function(){
			this.contentView();
		},
		contentView:function(){
			var detail = require('view/detail_view');
			$('.detail').html(detail);
			$('.grade span').mouseover(function(){
				$(this).toggleClass('active');
				$(this).prevAll().toggleClass('active');
				console.log($(this));
			});
		}
	}
	module.exports = init;
})