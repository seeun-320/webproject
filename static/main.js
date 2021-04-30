var hashtag = "";
var course = "";
var n = document.getElementById("north");
var s = document.getElementById("south");
var w = document.getElementById("west");
var e = document.getElementById("east");
var cafe = document.getElementById("cafe");
var natu = document.getElementById("nature");
var acti = document.getElementById("activity");
var d1 = document.getElementById("one");
var d2 = document.getElementById("two");
var d3 = document.getElementById("three");
var d4 = document.getElementById("four");

function position() {

  if (n.checked) {
    hashtag += "#제주북부 ";
  }

  if (s.checked) {
    hashtag += "#제주남부 ";
  }

  if (w.checked) {
    hashtag += "#제주서부 ";
  }

  if (e.checked) {
    hashtag += "#제주동부 ";
  }
}

function concept() {

  if (cafe.checked) {
    hashtag += "#카페 ";
  }
  if (natu.checked) {
    hashtag += "#자연 ";
  }
  if (acti.checked) {
    hashtag += "#엑티비티 ";
  }
}

function day() {
  if (d1.checked) {
    hashtag += "#당일치기";

  }
  if (d2.checked) {
    hashtag += "#1박2일";

  }
  if (d3.checked) {
    hashtag += "#2박3일";

  }
  if (d4.checked) {
    hashtag += "#3박4일";

  }

}
function tagprint() {
  position();
  concept();
  day();

  var box = document.getElementById("target");
  if (hashtag === "") {
    alert("체크하세요 :)")
  }
  else {
    document.getElementById("recotitle").innerHTML = "나에게 꼭 맞는 제주 여행 코스는!";
    box.innerHTML = hashtag;
    courseprint();
    hashtag = "";
  }

}

// print course
var west_cafe = ["망고홀릭/ ", "우무/ ", "섬앤썸/ ", "카페 봄날/ ", "그루브/ ", "명월국민학교/ ", "성이시돌목장 우유부단/ ", "제주그림카페/ "];
var west_nature = ["신창 풍차 해안도로/ ", "차귀도/ ", "수월봉/ ", "협재 해변/ "];
var west_act = ["카멜리아힐/ ", "그랑블루 요트/ ", "신화월드/ ", "돌고래 요트투어/ "];

var east_cafe = ["제주동네/ ", "전동바이크/ "];
var east_nature = ["성산일출봉/ ", "함덕해수욕장/ ", "용눈이 오름/ ", "비자림/ ", "섭지코지/ ", "만장굴/ "];
var east_act = ["제주 전동바이크/ ", "김녕 미로공원/ "];

var north_cafe = ["쌀다방/ ", "그러므로/ "];
var north_nature = ["이호테우 해변/ ", "협재 해변/ ", "한담해변&곽지해수욕장/ "];
var north_act = ["윈드 1947 카트 테마파크/ ", "월정리 투명 카약/ "];

var south_cafe = ["성이시돌목장/ ", "노리매 공원/ "];
var south_nature = ["산방산/ ", "용머리해안/ ", "천지연폭포/ "];
var south_act = ["그랑블루 요트/ ", "중문 서핑/ ", "돌고래 요트투어/ ", "위미항 남진호 배낚시/ "];


function courseprint() {
  var randnum;
  var cnt = 0;

  if (d1.checked) { //당일치기
    if (n.checked) {//제주 북부
      if (cafe.checked) { //카페
        randnum = Math.floor(Math.random() * (north_cafe.length));
        course += north_cafe[randnum];

        cnt++;
      }
      if (natu.checked) { //자연
        randnum = Math.floor(Math.random() * (north_nature.length));
        course += north_nature[randnum];
        cnt++;
      }
      if (acti.checked) { //엑티비티
        randnum = Math.floor(Math.random() * (north_act.length));
        course += north_act[randnum];
        cnt++;
      }

    }
    if (s.checked) {//제주 남부
      if (cafe.checked) { //카페
        randnum = Math.floor(Math.random() * (south_cafe.length));
        course += south_cafe[randnum];
        cnt++;
      }
      if (natu.checked) { //자연
        randnum = Math.floor(Math.random() * (south_nature.length));
        course += south_nature[randnum];
        cnt++;
      }
      if (acti.checked) { //엑티비티
        randnum = Math.floor(Math.random() * (south_act.length));
        course += south_act[randnum];
        cnt++;
      }
    }
    if (w.checked) {//제주 서부
      if (cafe.checked) { //카페
        randnum = Math.floor(Math.random() * (west_cafe.length));
        course += west_cafe[randnum];
        cnt++;
      }
      if (natu.checked) { //자연
        randnum = Math.floor(Math.random() * (west_nature.length));
        course += west_nature[randnum];
        cnt++;
      }
      if (acti.checked) { //엑티비티
        randnum = Math.floor(Math.random() * (west_act.length));
        course += west_act[randnum];
        cnt++;
      }
    }
    if (e.checked) {//제주 동부
      if (cafe.checked) { //카페
        randnum = Math.floor(Math.random() * (east_cafe.length));
        course += east_cafe[randnum];
        cnt++;
      }
      if (natu.checked) { //자연
        randnum = Math.floor(Math.random() * (east_nature.length));
        course += east_nature[randnum];
        cnt++;
      }
      if (acti.checked) { //엑티비티
        randnum = Math.floor(Math.random() * (east_act.length));
        course += east_act[randnum];
        cnt++;
      }
    }

  }
  if (d2.checked) { //1박2일
    if (n.checked) {//제주 북부
      if (cafe.checked) { //카페
        randnum = Math.floor(Math.random() * (north_cafe.length));
        course += north_cafe[randnum];
      }
      if (natu.checked) { //자연
        randnum = Math.floor(Math.random() * (north_nature.length));
        course += north_nature[randnum];
      }
      if (acti.checked) { //엑티비티
        randnum = Math.floor(Math.random() * (north_act.length));
        course += north_act[randnum];
      }
    }
    if (s.checked) {//제주 남부
      if (cafe.checked) { //카페
        randnum = Math.floor(Math.random() * (south_cafe.length));
        course += south_cafe[randnum];
      }
      if (natu.checked) { //자연
        randnum = Math.floor(Math.random() * (south_nature.length));
        course += south_nature[randnum];
      }
      if (acti.checked) { //엑티비티
        randnum = Math.floor(Math.random() * (south_act.length));
        course += south_act[randnum];
      }
    }
    if (w.checked) {//제주 서부
      if (cafe.checked) { //카페
        randnum = Math.floor(Math.random() * (west_cafe.length));
        course += west_cafe[randnum];
      }
      if (natu.checked) { //자연
        randnum = Math.floor(Math.random() * (west_nature.length));
        course += west_nature[randnum];
      }
      if (acti.checked) { //엑티비티
        randnum = Math.floor(Math.random() * (west_act.length));
        course += west_act[randnum];
      }
    }
    if (e.checked) {//제주 동부
      if (cafe.checked) { //카페
        randnum = Math.floor(Math.random() * (east_cafe.length));
        course += east_cafe[randnum];
      }
      if (natu.checked) { //자연
        randnum = Math.floor(Math.random() * (east_nature.length));
        course += east_nature[randnum];
      }
      if (acti.checked) { //엑티비티
        randnum = Math.floor(Math.random() * (east_act.length));
        course += east_act[randnum];
      }
    }

  }
  if (d3.checked) { //2박3일
    if (n.checked) {//제주 북부
      if (cafe.checked) { //카페
        randnum = Math.floor(Math.random() * (north_cafe.length));
        course += north_cafe[randnum];
      }
      if (natu.checked) { //자연
        randnum = Math.floor(Math.random() * (north_nature.length));
        course += north_nature[randnum];
      }
      if (acti.checked) { //엑티비티
        randnum = Math.floor(Math.random() * (north_act.length));
        course += north_act[randnum];
      }
    }
    if (s.checked) {//제주 남부
      if (cafe.checked) { //카페
        randnum = Math.floor(Math.random() * (south_cafe.length));
        course += south_cafe[randnum];
      }
      if (natu.checked) { //자연
        randnum = Math.floor(Math.random() * (south_nature.length));
        course += south_nature[randnum];
      }
      if (acti.checked) { //엑티비티
        randnum = Math.floor(Math.random() * (south_act.length));
        course += south_act[randnum];
      }
    }
    if (w.checked) {//제주 서부
      if (cafe.checked) { //카페
        randnum = Math.floor(Math.random() * (west_cafe.length));
        course += west_cafe[randnum];
      }
      if (natu.checked) { //자연
        randnum = Math.floor(Math.random() * (west_nature.length));
        course += west_nature[randnum];
      }
      if (acti.checked) { //엑티비티
        randnum = Math.floor(Math.random() * (west_act.length));
        course += west_act[randnum];
      }
    }
    if (e.checked) {//제주 동부
      if (cafe.checked) { //카페
        randnum = Math.floor(Math.random() * (east_cafe.length));
        course += east_cafe[randnum];
      }
      if (natu.checked) { //자연
        randnum = Math.floor(Math.random() * (east_nature.length));
        course += east_nature[randnum];
      }
      if (acti.checked) { //엑티비티
        randnum = Math.floor(Math.random() * (east_act.length));
        course += east_act[randnum];
      }
    }

  }

  if (d4.checked) { //3박4일
    for (var i = 0; i < 2; i++) {
      if (n.checked) {//제주 북부
        if (cafe.checked) { //카페
          randnum = Math.floor(Math.random() * (north_cafe.length));
          course += north_cafe[randnum];
        }
        if (natu.checked) { //자연
          randnum = Math.floor(Math.random() * (north_nature.length));
          course += north_nature[randnum];
        }
        if (acti.checked) { //엑티비티
          randnum = Math.floor(Math.random() * (north_act.length));
          course += north_act[randnum];
        }
      }
      if (s.checked) {//제주 남부
        if (cafe.checked) { //카페
          randnum = Math.floor(Math.random() * (south_cafe.length));
          course += south_cafe[randnum];
        }
        if (natu.checked) { //자연
          randnum = Math.floor(Math.random() * (south_nature.length));
          course += south_nature[randnum];
        }
        if (acti.checked) { //엑티비티
          randnum = Math.floor(Math.random() * (south_act.length));
          course += south_act[randnum];
        }
      }
      if (w.checked) {//제주 서부
        if (cafe.checked) { //카페
          randnum = Math.floor(Math.random() * (west_cafe.length));
          course += west_cafe[randnum];
        }
        if (natu.checked) { //자연
          randnum = Math.floor(Math.random() * (west_nature.length));
          course += west_nature[randnum];
        }
        if (acti.checked) { //엑티비티
          randnum = Math.floor(Math.random() * (west_act.length));
          course += west_act[randnum];
        }
      }
      if (e.checked) {//제주 동부
        if (cafe.checked) { //카페
          randnum = Math.floor(Math.random() * (east_cafe.length));
          course += east_cafe[randnum];
        }
        if (natu.checked) { //자연
          randnum = Math.floor(Math.random() * (east_nature.length));
          course += east_nature[randnum];
        }
        if (acti.checked) { //엑티비티
          randnum = Math.floor(Math.random() * (east_act.length));
          course += east_act[randnum];
        }
      }
    }

  }


  var box = document.getElementById("course");
  box.innerHTML = course;
  course = "";

}


document.body.onload = addElement;
function addElement() {
  // create a new div element
  var newDiv = document.createElement("div");
  // and give it some content
  var newContent = document.createTextNode(chk);
  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("body");
  document.body.insertBefore(newDiv, currentDiv);
}

