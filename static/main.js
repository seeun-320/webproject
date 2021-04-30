var hashtag = "";
var course = "";
var cnt = 0;
var cnt_p = 0;
var cnt_c = 0;
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
    cnt_p++;
  }

  if (s.checked) {
    hashtag += "#제주남부 ";
    cnt_p++;
  }

  if (w.checked) {
    hashtag += "#제주서부 ";
    cnt_p++;
  }

  if (e.checked) {
    hashtag += "#제주동부 ";
    cnt_p++;
  }
}

function concept() {

  if (cafe.checked) {
    hashtag += "#카페 ";
    cnt_c++;
  }
  if (natu.checked) {
    hashtag += "#자연 ";
    cnt_c++;
  }
  if (acti.checked) {
    hashtag += "#엑티비티 ";
    cnt_c++;
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
  
  if (cnt_c==0 || cnt_p==0) {
    hashtag = "";
    alert("각 항목당 최소 1개 이상 체크하세요 :)")
  }
  else {
    document.getElementById("recotitle").innerHTML = "나에게 꼭 맞는 제주 여행 코스는!";
    box.innerHTML = hashtag;
    hashtag = "";
    cnt_c = 0;
    cnt_p = 0;
    courseprint();
    // document.getElementById("map").innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d850967.544072283!2d126.01257917393848!3d33.576961295130374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x350ce3544cc84045%3A0x66bc36d2981ebf31!2z7KCc7KO87Yq567OE7J6Q7LmY64-E!5e0!3m2!1sko!2skr!4v1619775924988!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  }

}

// print course
var west_cafe = ["망고홀릭/ ", "우무/ ", "섬앤썸/ ", "카페 봄날/ ", "그루브/ ", "명월국민학교/ ", "성이시돌목장 우유부단/ ", "제주그림카페/ "];
var west_nature = ["신창 풍차 해안도로/ ", "차귀도/ ", "수월봉/ ", "협재 해변/ ", "협재굴/ ", "엉알 해안/ ", "오설록/ "];
var west_act = ["카멜리아힐/ ", "그랑블루 요트/ ", "신화월드/ ", "돌고래 요트투어/ ", "제주 중문 서핑/ ", "노리매 공원/ ", "유리의 성/ "];

var east_cafe = ["제주동네/ ", "카페 한라산/ ", "카페 오길/ ", "카페록록 loklok/ ", "마당봉봉/ ", "카페공작소/ ", "페어리 제주/ "];
var east_nature = ["성산일출봉/ ", "함덕해수욕장/ ", "용눈이 오름/ ", "비자림/ ", "섭지코지/ ", "만장굴/ "];
var east_act = ["제주 전동바이크/ ", "김녕 미로공원/ ", "제주해녀박물관/ ", "제주 해양동물박물관/ ", "제주 레일바이크/ "];

var north_cafe = ["쌀다방/ ", "그러므로/ ", "하이엔드 제주/ ", "카페 한라산/ ", "델문도/ ", "모래비 카페/ ", "카페 동백/ "];
var north_nature = ["이호테우 해변/ ", "협재 해변/ ", "한담해변&곽지해수욕장/ ", "용연계곡/ ","용연구름다리/ "];
var north_act = ["윈드 1947 카트 테마파크/ ", "월정리 투명 카약/ ", "에코랜드/ ", "제주 조천스위스마을/ ", "신비의 도로/ ", "짚라인제주/ "];

var south_cafe = ["성이시돌목장/ ", "노리매 공원/ ", "말랑제주/ ", "오늘의 바다/ ", "Cafe 유나 카페/ "];
var south_nature = ["산방산/ ", "용머리해안/ ", "천지연폭포/ ", "쇠소깍/ ", "베릿네 오름/ ","안덕계곡/ "];
var south_act = ["그랑블루 요트/ ", "중문 서핑/ ", "돌고래 요트투어/ ", "위미항 남진호 배낚시/ ", "세계 자동차&피아노박물관/ "];


function courseprint() {
  var randnum;
  var num;
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
    if (cnt_p * cnt_c < 4)
      num = 2;
    else
      num = 1;
    for (var i = 0; i < num; i++) {
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
  if (d3.checked) { //2박3일
    if (cnt_p * cnt_c < 5)
      num = 3;
    else
      num = 1;
    for (var i = 0; i < num; i++) {
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

  if (d4.checked) { //3박4일
    if (cnt_p * cnt_c < 6) num = 2;
    else num = 1;
    for (var i = 0; i < num; i++) {
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
