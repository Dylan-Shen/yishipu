define(function(require,exports,module){
	//提取公共模组
	var public = require('js/golbal');
	public.initpage(4);
	//提取getUrlParam方法
	var getUrlParam = require('js/getUrlParam');
	//提取主题页面
	var way = require('view/way_view');
	var init = {
		initpage:function(){
			$.ajax({
				url:'json/material.json',
				success:function(data){
					var material = data.material;
					var mid = $.getUrlParam('mid');
					var pid = $.getUrlParam('pid');
					$('.way').html(way({part:material[mid].part[pid]}));
				},
				error:function(err){
					console.log(err);
				}
			})
		}
	}
	module.exports = init;
})