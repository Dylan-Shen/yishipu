define(function(require, exports, module){return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="h-t w960 clear"><div class="logo"><img src="images/logo.png" alt=""></div><div class="search"><form class="search-form"><input type="search"><input type="submit" value="搜索"></form></div><div class="sit-nav"><a href="#">上传</a><a href="quiz.html" class="tiwen">提问</a><a href="login.html">登录</a><a href="registration.html">注册</a></div></div><div class="h-n"><div class="w960 h-n-b"><a href="index.html"';
 if(currentIndex == 1){ ;
__p += 'class="active"';
 } ;
__p += '>首页</a><a href="menu.html"';
 if(currentIndex == 2){ ;
__p += 'class="active"';
 } ;
__p += '>菜谱大全</a><a href="homely.html"';
 if(currentIndex == 3){ ;
__p += 'class="active"';
 } ;
__p += '>家常菜谱</a><a href="quiz.html"';
 if(currentIndex == 4){ ;
__p += 'class="active"';
 } ;
__p += '>美食问答</a><a href="classify.html"';
 if(currentIndex == 5){ ;
__p += 'class="active"';
 } ;
__p += '>食谱分类</a><a href="#"';
 if(currentIndex == 6){ ;
__p += 'class="active"';
 } ;
__p += '>食谱分类</a><a href="#"';
 if(currentIndex == 7){ ;
__p += 'class="active"';
 } ;
__p += '>食谱分类</a></div></div>';

}
return __p
}});