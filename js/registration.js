define(function(require,exports,module){
	var public = require('js/golbal');
	public.initpage(-1);
	var registration = require('view/registration_view');
	var init = {
		initpage:function(){
			$('.registration').html(registration);
		}
	}
	module.exports = init;
})