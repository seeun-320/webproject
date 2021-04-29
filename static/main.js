var chk = "";



function Check(form) {
  //'확인' 버튼을 클릭했을 때 실행되는 메서드
  var msg = "";

  if (form.north.checked) {
    msg += form.north.value + "\n";
    chk += "#제주북부 ";
  }
  if (form.south.checked) {
    msg += form.south.value + "\n";
    chk += "#제주남부 ";
  }
  if (form.west.checked) {
    msg += form.west.value + "\n";
    chk += "#제주서부 ";

  }
  if (form.east.checked) {
    msg += form.east.value + "\n";
    chk += "#제주동부 ";
  }

  if (form.cafe.checked) {
    chk += "#카페 ";
  }
  if (form.nature.checked) {
    chk += "#자연 ";
  }
  if (form.activity.checked) {
    chk += "#엑티비티 ";
  }

  if (form.day.value === "one") {
    chk += "#당일치기 ";
  }
  if (form.day.value === "two") {
    chk += "#1박2일 ";
  }
  if (form.day.value === "three") {
    chk += "#2박3일 ";
  }
  if (form.day.value === "four") {
    chk += "#3박4일 ";
  }



  alert(chk);
  //document.write(chk);
  // window.location.href="reco.html";
  // alert(chk);
  // document.write("<p id=\"recotitle\" >나에게 꼭 맞는 제주 여행 코스는!</p>")
  // document.getElementById('tagbox').innerHTML = chk;
  // document.getElementById('tagbox').style.backgroundColor = "red";
  // document.getElementById('tagbox').style.height= "50px";

}


// 버튼 클릭하면 결과 출력

