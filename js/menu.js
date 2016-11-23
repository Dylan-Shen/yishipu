define(function(require,exports,module){
	var public = require('js/golbal');
	public.initpage(2);
	var menu = require('view/menu_view');
	var init = {
		initpage:function(){
			$.ajax({
				url:'json/material.json',
				success:function(data){
					var material = data.material;
					$('.menu').html(menu({material:material}));
				},
				error:function(err){
					console.log(err);
				}
			})
		}
	}
	module.exports = init;
})