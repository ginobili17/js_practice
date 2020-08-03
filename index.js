// 1~3のランダムの整数を生成
var random = Math.floor( Math.random() * 3 ) + 1;

// guu, tyoki, paa 各画像を表示
function comhandsimg(hand) {
  document.getElementById('comhands').innerHTML = `<img src="images/${hand}.png" alt="" width=200px height=200px>`
}


var guu = document.getElementById('guu');
var tyoki = document.getElementById('tyoki');
var paa = document.getElementById('paa');


// guu, tyoki, paa  display: none
function displayNone(gtp) {
  gtp.style.display = "none";
}

// 判定結果表示
function res(gtp) {
  var response = document.getElementById('response');
  response.innerHTML = gtp
}

// 判定if文処理
var vic = '勝利！';
var los = '敗北';
var dlo = 'あいこ';

function result(a,b,c) {
  if (random === 1) {
    comhandsimg('guu');
    res(a);
  } else if (random === 2) {
    comhandsimg('tyoki');
    res(b);
  } else {
    comhandsimg('paa');
    res(c);
  }
}

// グーを選んだ時
function judge1() {
  displayNone(tyoki);
  displayNone(paa);
  result(dlo, vic, los);
}

// チョキを選んだ時
function judge2() {
  displayNone(guu);
  displayNone(paa);
  result(los, dlo, vic);
}

// パーを選んだ時
function judge3() {
  displayNone(guu);
  displayNone(tyoki);
  result(vic, los, dlo);
}

