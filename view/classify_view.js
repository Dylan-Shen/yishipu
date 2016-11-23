define(function(require, exports, module){return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="m-class w960"><h2 class="m-class-t">菜谱大全</h2><div class="classify-c">';
 for(var i = 0 ; i < 80 ; i ++ ){ ;
__p += '<a href="#" class="a-under a-5 clear"><span class="l">分类' +
((__t = (i)) == null ? '' : __t) +
'</span><span class="r">热度</span></a>';
 } ;
__p += '</div></div>';

}
return __p
}});