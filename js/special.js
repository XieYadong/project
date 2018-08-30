/**
 * Created by win on 2018/5/9.
 */

//左侧边栏
350
var navl=document.getElementById("nav-left");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 300) {
    navl.style.display = 'block';
    }else{
      navl.style.display = 'none';
    }
}
var nlis=navl.getElementsByTagName("li");
//$(".nav-left li").mouseleave(function(){
//  $(".nav-left").children().css('color', '')
//})

//function navlmove(){
//  this.style.color="red"
//  console.log("1")
//}
//左侧边栏结束


//  轮播图系列按钮
var banWrap=document.getElementById("banWrap");
var banPic=document.getElementById("banPic");
var plis=banPic.getElementsByTagName("li");
var banbtns=document.getElementsByClassName("banBox-btn");
var banbtn=document.getElementById("banbtn");
var banbtnr=document.getElementById("banbtnr");
//控制banWrap里面两个小方块出现消失
banWrap.onmousemove=function(){
  banbtn.style.display="block";
  banbtnr.style.display="block";
}
banWrap.onmouseout=function(){
  banbtn.style.display="none";
  banbtnr.style.display="none";
}
//点击小方块切换图
window.onload=function(){};
var banPic=document.getElementById("banPic");
var banlis=banPic.getElementsByTagName("li");
var banTab=document.getElementById("banTab");
var banspans=banTab.getElementsByTagName("span");
var banBox=document.getElementsByClassName("banBox")[0];
var lisl=banlis.length;
var banbtn=document.getElementById("banbtn")
var banbtnr=document.getElementById("banbtnr")
var spanl=banspans.length;
var cur=0;
var timer=null;
var time2=null;


timer=setInterval(autoPlay,5000);



banBox.onmouseover=function(){
  clearInterval(timer);
}
//离开Banbox开始轮播
banBox.onmouseout=function(){
  timer=setInterval(autoPlay,5000);

}

//autoplay函数



function autoPlay() {
  cur++;
  if (cur >= spanl) {
    cur = 0;
  }

  changePic(cur)
}
//点击span切换对应图片
for(var i=0;i<spanl;i++){
  (function(j) {
    banspans[j].onmouseenter = function () {
      changePic(j);
      cur = j;
      console.log(j)
    }
  })(i)
}


//点击按钮切换下一或上一图片
banbtn.onclick=function(){
  cur--;
  if (cur < 0) {
    cur = lisl-1;
  }
  changePic(cur)

}
banbtnr.onclick=function(){
  autoPlay()
}


//轮播图切换图片函数
function changePic(curIndex){
  for(var i=0;i<spanl;i++){
    banlis[i].style.opacity=0;
    banspans[i].className="";
  }
  clearInterval(time2);
  banspans[curIndex].className="current";
  time2=setInterval(apear,30);
  function apear(){
    var op=+ banlis[curIndex].style.opacity
    op+=0.1
    banlis[curIndex].style.opacity = op;

    if(banlis[curIndex].style.opacity>=1){

      banlis[curIndex].style.opacity=1;
      clearInterval(time2);
    }

}


}


//sboxs倒计时
var wrap=document.getElementsByClassName("wrap")[0];
var day1=wrap.getElementsByClassName("sday")[0];
var day2=wrap.getElementsByClassName("sday")[1];
var day3=wrap.getElementsByClassName("sday")[2];
var day4=wrap.getElementsByClassName("sday")[3];
var day5=wrap.getElementsByClassName("sday")[4];
var day6=wrap.getElementsByClassName("sday")[5];
var day7=wrap.getElementsByClassName("sday")[6];
var hour1=wrap.getElementsByClassName("shour")[0];
var hour2=wrap.getElementsByClassName("shour")[1];
var hour3=wrap.getElementsByClassName("shour")[2];
var hour4=wrap.getElementsByClassName("shour")[3];
var hour5=wrap.getElementsByClassName("shour")[4];
var hour6=wrap.getElementsByClassName("shour")[5];
var hour7=wrap.getElementsByClassName("shour")[6];
var m1=wrap.getElementsByClassName("sminute")[0];
var m2=wrap.getElementsByClassName("sminute")[1];
var m3=wrap.getElementsByClassName("sminute")[2];
var m4=wrap.getElementsByClassName("sminute")[3];
var m5=wrap.getElementsByClassName("sminute")[4];
var m6=wrap.getElementsByClassName("sminute")[5];
var m7=wrap.getElementsByClassName("sminute")[6];
var s1=wrap.getElementsByClassName("ssecond")[0];
var s2=wrap.getElementsByClassName("ssecond")[1];
var s3=wrap.getElementsByClassName("ssecond")[2];
var s4=wrap.getElementsByClassName("ssecond")[3];
var s5=wrap.getElementsByClassName("ssecond")[4];
var s6=wrap.getElementsByClassName("ssecond")[5];
var s7=wrap.getElementsByClassName("ssecond")[6];

var t1="2018-6-7 00:00:00"
var t2="2018-6-3 16:44:00"



//setInterval(fn, 1000);
setInterval(fnn, 1000);
setInterval(fnn1, 1000);
//setInterval(fnn(day4,hour4,m4,s4,t3), 1000);
//
//setInterval(fnn(day1,hour1,m1,s1,t1), 1000);
//setInterval(fnn(day2,hour2,m2,s2,t1), 1000);

function fnn(){

  var now = +new Date(); //当前的时间

  var target = +new Date(t1);

  var time = target - now;  //时间差(ms)


  time /= 1000;


  var dayT =  Math.floor(time / 60 / 60  / 24);

  var hourT = Math.floor(time / 60 / 60 % 24);

  var minuteT  = Math.floor(time / 60 % 60);

  var secondT = Math.floor(time % 60);


  day1.innerText = dayT;
  hour1.innerText = hourT;
  m1.innerText = minuteT;
  s1.innerText = secondT;day1.innerText = dayT;
  day2.innerText = dayT;
  hour2.innerText = hourT;
  m2.innerText = minuteT;
  s2.innerText = secondT;
  day3.innerText = dayT;
  hour3.innerText = hourT;
  m3.innerText = minuteT;
  s3.innerText = secondT;
  day4.innerText = dayT;
  hour4.innerText = hourT;
  m4.innerText = minuteT;
  s4.innerText = secondT;

}
function fnn1(){
  var now = +new Date(); //当前的时间

  var target = +new Date(t2);

  var time = target - now;  //时间差(ms)


  time /= 1000;


  var dayT =  Math.floor(time / 60 / 60  / 24);

  var hourT = Math.floor(time / 60 / 60 % 24);

  var minuteT  = Math.floor(time / 60 % 60);

  var secondT = Math.floor(time % 60);


  day5.innerText = dayT;
  hour5.innerText = hourT;
  m5.innerText = minuteT;
  s5.innerText = secondT;

  day6.innerText = dayT;
  hour6.innerText = hourT;
  m6.innerText = minuteT;
  s6.innerText = secondT;

  day7.innerText = dayT;
  hour7.innerText = hourT;
  m7.innerText = minuteT;
  s7.innerText = secondT;

}
//sbox li a鼠标滑动底部span变色
//第一个ul

var sboxul=document.getElementById("sboxul");
var spans=document.getElementsByClassName("sells");
var lis=sboxul.getElementsByTagName("li");
for(var i=0;i<lis.length-1;i++){
  lis[i].setAttribute('index', i);
  var index=i;
  lis[i].onmousemove=limove;
  lis[i].onmouseout=liout;
  }

function limove(){
  var index = this.getAttribute('index')
  spans[index].style.backgroundColor="yellow";
}
function liout(){
  var index = this.getAttribute('index')
  spans[index].style.backgroundColor="#ff8800";
}
//第二个ul
var secondul=document.getElementById("secondul");
var spanst=document.getElementsByClassName("st");
var list=secondul.getElementsByTagName("li");
for(var i=0;i<list.length;i++){
  list[i].setAttribute('indext', i);
  var indext=i;
  list[i].onmousemove=limovet;
  list[i].onmouseout=lioutt;
}

function limovet(){
  var indext = this.getAttribute('indext')
  spanst[indext].style.backgroundColor="yellow";
}
function lioutt(){
  var indext = this.getAttribute('indext')
  spanst[indext].style.backgroundColor="#FF8800";
}





