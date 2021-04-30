var hashtag = "";

var course = "";

function position() {
  var n = document.getElementById("north");
  var s = document.getElementById("south");
  var w = document.getElementById("west");
  var e = document.getElementById("east");

  if (n.checked) {
    hashtag += "#제주북부 ";
  }

  if (s.checked) {
    h
    ashtag += "#제주남부 ";
  }

  if (w.checked) {
    hashtag += "#제주서부 ";
  }

  if (e.checked) {
    hashtag += "#제주동부 ";
  }
}

function concept() {
  var cafe = document.getElementById("cafe");
  var natu = document.getElementById("nature");
  var acti = document.getElementById("activity");

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
  var d1 = document.getElementById("one");
  var d2 = document.getElementById("two");
  var d3 = document.getElementById("three");
  var d4 = document.getElementById("four");
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
    hashtag = "";
  }
}

// print course
var west_cafe =[]







var getParameters = function (paramName) {
  // 리턴값을 위한 변수 선언
  var returnValue;

  // 현재 URL 가져오기
  var url = location.href;

  // get 파라미터 값을 가져올 수 있는 ? 를 기점으로 slice 한 후 split 으로 나눔
  var parameters = (url.slice(url.indexOf('?') + 1, url.length)).split('&');

  // 나누어진 값의 비교를 통해 paramName 으로 요청된 데이터의 값만 return
  for (var i = 0; i < parameters.length; i++) {
    var varName = parameters[i].split('=')[0];
    if (varName.toUpperCase() == paramName.toUpperCase()) {
      returnValue = parameters[i].split('=')[1];
      return decodeURIComponent(returnValue);
    }
  }
};

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

