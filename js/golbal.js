define(function(require,exports,module){
	var init = {
		initpage:function(index){
			this.headerView(index);
			this.footerView();
		},
		headerView:function(index){
			var header = require('view/header');
			$('header').html(header({currentIndex:index}));
		},
		footerView:function(){
			var footer = require('view/footer');
			$('footer').html(footer);
		}
	}
	module.exports = init;
});