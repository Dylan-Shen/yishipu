define(function(require, exports, module){return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form action="" name="registration" class="registration-form clear login-box"><h3 class="registration-t">注册</h3><div class="registration-l l"><input type="email" placeholder="E-mail" class="text"><input type="text" placeholder="用户名" class="text"><input type="password" placeholder="密码" class="text"><input type="password" placeholder="确认密码" class="text"><div class="CAPTCHA clear"><input type="text" placeholder="验证码" class="l text"><img src="images/CAPTCHA/CAPTCHA1.png" class="l"></div><p class="clear"><label class="l"><input type="checkbox">记住密码</label><a href="#" class="r">忘记密码？</a></p><button type="submit" class="btn b-orange c-fff">完成注册</button></div><div class="registration-r r"><a href="#" class="b-blue c-fff">使用QQ登录</a><a href="#">使用微信登录</a><p><span>已有账户？</span><a href="#">登录</a></p></div></form>';

}
return __p
}});