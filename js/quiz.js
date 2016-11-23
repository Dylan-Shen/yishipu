define(function(require,exports,module){
	var public = require('js/golbal');
	public.initpage(4);
	var quiz = require('view/quiz_view');
	var init = {
		initpage:function(){
			$('.quiz').html(quiz);
			$('.c-option-t span').click(function(){
				$(this).css({color:"#fa7e3e"}).siblings('span').css({color:"#000"});
				$('.c-option-choose').eq($(this).index()).show().siblings('.c-option-choose').hide();
			});
		}
	}
	module.exports = init;
})