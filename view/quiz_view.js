define(function(require, exports, module){return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="c-t w960 clear"><div class="c-t-l"><ul class="c-option clear"><li class="c-option-t"><span>全部问题</span><span>我要提问</span></li><li class="c-option-c"><div class="c-tabs c-option-choose"><div class="bd-b t-3 c-tabs-t clear"><span>问题</span><div><span>答案</span><span>最后更新</span></div></div><ul class="c-tabs-ul">';
 for(var i = 0 ; i < 5 ; i ++ ){ ;
__p += '<li class="c-tabs-li bd-b-1"><div class="t-3 question clear"><span><a href="#">想开一个甜品店，请师傅们推荐10样甜点，10样饮品（简单，不需要烤炉）</a></span><div><span>43</span><span>17.32</span></div></div><div class="answer">芋圆、班戟、杨枝甘露、千层盒，芒果榴莲之类的甜点</div></li>';
 } ;
__p += '</ul></div><div class="c-option-choose c-question"><form action="" class="clear"><h4>问题</h4><textarea name=""></textarea><h4>问题补充(可选)</h4><textarea name=""></textarea><input type="submit" name="" value="提问"></form></div></li></ul></div><div class="c-t-r"><div class="s-box"><div class="s-box-t"><span>等待回答的问题</span></div><ul class="s-box-c">';
 for(var i = 0 ; i < 10 ; i ++){ ;
__p += '<a class="bd-b-1 cook-a clear"><span class="l no-overflow c-000">三杯鸡怎么做</span><span class="r">8029浏览</span></a>';
 } ;
__p += '</ul></div></div></div>';

}
return __p
}});