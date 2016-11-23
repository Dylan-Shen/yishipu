define(function(require, exports, module){return function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="m-class w960"><h2 class="m-class-t">菜谱大全</h2>';
 for(var i = 0 ; i < material.length ; i ++){ ;
__p += '<a href=#' +
((__t = (material[i].materialName)) == null ? '' : __t) +
'>' +
((__t = (material[i].materialName)) == null ? '' : __t) +
'</a>';
 } ;
__p += '</div>';
 for(var j = 0 ; j < material.length ; j ++){ ;

 if(j == 0){ ;
__p += '<div class="m-b w960 b-fff"><a name=' +
((__t = (material[j].materialName)) == null ? '' : __t) +
'></a><h3 class="m-b-t">' +
((__t = (material[j].materialName)) == null ? '' : __t) +
'</h3><div class="m-b-c">';
 for(var i = 0 ; i < material[j].part.length ; i ++ ){ ;
__p += '<a href=way.html?mid=' +
((__t = (j)) == null ? '' : __t) +
'&pid=' +
((__t = (i)) == null ? '' : __t) +
'>' +
((__t = (material[j].part[i].partName)) == null ? '' : __t) +
'</a>';
 } ;
__p += '</div></div>';
} ;

 } ;
__p += '<div class="m-b m-b-b0 clear w960"><div class="m-b-l">';
 for(var j = 1 ; j < 9 ; j ++){ ;

 if(j % 2 == 1){ ;
__p += '<div class="m-b"><a name=' +
((__t = (material[j].materialName)) == null ? '' : __t) +
'></a><h3 class="m-b-t">' +
((__t = (material[j].materialName)) == null ? '' : __t) +
'</h3><div class="m-b-c">';
 for(var i = 0 ; i < material[j].part.length ; i ++ ){ ;
__p += '<a href=way.html?mid=' +
((__t = (j)) == null ? '' : __t) +
'&pid=' +
((__t = (i)) == null ? '' : __t) +
'>' +
((__t = (material[j].part[i].partName)) == null ? '' : __t) +
'</a>';
 } ;
__p += '</div></div>';
} ;

 } ;
__p += '</div><div class="m-b-r">';
 for(var j = 1 ; j < 9 ; j ++){ ;

 if(j % 2 == 0){ ;
__p += '<div class="m-b"><a name=' +
((__t = (material[j].materialName)) == null ? '' : __t) +
'></a><h3 class="m-b-t">' +
((__t = (material[j].materialName)) == null ? '' : __t) +
'</h3><div class="m-b-c">';
 for(var i = 0 ; i < material[j].part.length ; i ++ ){ ;
__p += '<a href=way.html?mid=' +
((__t = (j)) == null ? '' : __t) +
'&pid=' +
((__t = (i)) == null ? '' : __t) +
'>' +
((__t = (material[j].part[i].partName)) == null ? '' : __t) +
'</a>';
 } ;
__p += '</div></div>';
} ;

 } ;
__p += '</div></div>';
 for(var j = 9 ; j < material.length ; j ++){ ;
__p += '<div class="m-b w960 b-fff"><a name=' +
((__t = (material[j].materialName)) == null ? '' : __t) +
'></a><h3 class="m-b-t">' +
((__t = (material[j].materialName)) == null ? '' : __t) +
'</h3><div class="m-b-c">';
 for(var i = 0 ; i < material[j].part.length ; i ++ ){ ;
__p += '<a href=way.html?mid=' +
((__t = (j)) == null ? '' : __t) +
'&pid=' +
((__t = (i)) == null ? '' : __t) +
'>' +
((__t = (material[j].part[i].partName)) == null ? '' : __t) +
'</a>';
 } ;
__p += '</div></div>';
 } ;


}
return __p
}});