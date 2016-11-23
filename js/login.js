define(function(require,exports,module){
	var public = require('js/golbal');
	public.initpage(-1);
	var login = require('view/login_view');
	var init = {
		initpage:function(){
			$('.login').html(login);
		}
	}
	module.exports = init;
})