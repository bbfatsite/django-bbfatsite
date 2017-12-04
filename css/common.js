//图片延迟加载库
var fgm={on:function(element,type,handler){return element.addEventListener?element.addEventListener(type,handler,false):element.attachEvent('on'+type,handler)},bind:function(object,handler){return function(){return handler.apply(object,arguments)}},pageX:function(element){return element.offsetLeft+(element.offsetParent?arguments.callee(element.offsetParent):0)},pageY:function(element){return element.offsetTop+(element.offsetParent?arguments.callee(element.offsetParent):0)},hasClass:function(element,className){return new RegExp("(^|\\s)"+className+"(\\s|$)").test(element.className)},attr:function(element,attr,value){if(arguments.length==2){return element.attributes[attr]?element.attributes[attr].nodeValue:undefined}else if(arguments.length==3){element.setAttribute(attr,value)}}};function LazyLoad(obj){this.lazy=typeof obj==='string'?document.getElementById(obj):obj;this.aImg=this.lazy.getElementsByTagName('img');this.fnLoad=fgm.bind(this,this.load);this.load();fgm.on(window,'scroll',this.fnLoad);fgm.on(window,'resize',this.fnLoad)}LazyLoad.prototype={load:function(){var iScrollTop=document.documentElement.scrollTop||document.body.scrollTop;var iClientHeight=document.documentElement.clientHeight+iScrollTop+500;var i=0;var aParent=[];var oParent=null;var iTop=0;var iBottom=0;var aNotLoaded=this.loaded(0);if(this.loaded(1).length!=this.aImg.length){for(i=0;i<aNotLoaded.length;i++){oParent=aNotLoaded[i].parentElement||aNotLoaded[i].parentNode;iTop=fgm.pageY(oParent);iBottom=iTop+oParent.offsetHeight;if((iTop>iScrollTop&&iTop<iClientHeight)||(iBottom>iScrollTop&&iBottom<iClientHeight)){aNotLoaded[i].src=fgm.attr(aNotLoaded[i],'data-img')||aNotLoaded[i].src;aNotLoaded[i].className='loaded'}}}},loaded:function(status){var array=[];var i=0;for(i=0;i<this.aImg.length;i++){eval("fgm.hasClass(this.aImg[i], \"loaded\")"+(!!status?"&&":"||")+"array.push(this.aImg[i])")}return array}};
var $wg = function(id){return document.getElementById(id)};
var viewcss = ['open','close'],showsearch = 0,showmenu = 0,nPosition;
//顶部导航
function opensearch(){
   $wg('search').className = 'search '+viewcss[showsearch];
   (showsearch == 1) ? showsearch = 0 : showsearch = 1;
}
//滚动1像素
function scrollone(){
   nPosition = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
   nPosition += 1;
   window.scrollTo(0,nPosition);
}
//执行搜索
function gosearch(){
   var keytext = $wg('searchtext').value;
   if(keytext != ''){document.forms.submit();}
}
//图片懒加载
fgm.on(window,'load',function(){new LazyLoad('piclist')});
//返回顶部
function scrolltopnow(){return document.documentElement.scrollTop || document.body.scrollTop;}
function goscrolltop(){
   if(document.documentElement.scrollTop){
      document.documentElement.scrollTop = 0;
   }else{
      document.body.scrollTop = 0;
   }
}
var ascroll,dvalue,bscroll=scrolltopnow(),scrollbtn=$wg('topbtn');
window.onscroll = function(){
   ascroll = scrolltopnow();
   dvalue = ascroll - bscroll;
   if(dvalue > 0){
      scrollbtn.style.display = 'none';
   }else{
      if(ascroll > 300){
	     scrollbtn.style.display = 'block';
	  }else{
	     scrollbtn.style.display = 'none';
	  }
   }
   bscroll = ascroll;
};
function checkspace(checkstr){
   var str = '';
   for(var i=0;i<checkstr.length;i++){str = str + ' ';}
   return (str == checkstr);
}
//保存留言
function checkre(){
   if(checkspace(document.formmsg.neirong.value)){
      document.formmsg.neirong.focus();
      return false;
   }else{
      formmsg.submit();
   }
}