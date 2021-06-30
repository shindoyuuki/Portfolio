document.querySelector('.hamurerMenu-button').addEventListener('click', () => { //ボタンをクリックしたときに以下のコードが動く
 
 
  let icon = document.querySelector('.icon'); //メニューバーを一つずつ取得している
  let iconM = document.querySelector('.icon-m');
  let iconB = document.querySelector('.icon-b');
 
  if (icon.classList.contains('open') == true) { //トグル処理　openがあれば消して、なければopenをつける、それを3つあるメニューバーでそれぞれ行う
    icon.classList.remove('open');
  } else {
    icon.classList.add('open');
  }
  if (iconB.classList.contains('open') == true) {
    iconB.classList.remove('open');
  } else {
    iconB.classList.add('open');
  }
 
  if (iconM.classList.contains('open') == true) {
    iconM.classList.remove('open');
  } else {
    iconM.classList.add('open');
  }
 
  let hamburgerMenu = document.querySelector('.hamburgerMenu');
 
  if (hamburgerMenu.classList.contains('open') == true) {
    hamburgerMenu.classList.remove('open');
  } else {
    hamburgerMenu.classList.add('open');
  }
 
});











//https://coco-factory.jp/ugokuweb/move01/5-1-5/




//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
  var headerH = $('#header').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH){//headerの高さ以上になったら
      $('#header').addClass('fixed');//fixedというクラス名を付与
    }else{//それ以外は
      $('#header').removeClass('fixed');//fixedというクラス名を除去
    }
}

//ナビゲーションをクリックした際のスムーススクロール
$('#g-navi a').click(function () {
  var elmHash = $(this).attr('href'); //hrefの内容を取得
  var pos = Math.round($(elmHash).offset().top-120);  //headerの高さを引く
  $('body,html').animate({scrollTop: pos}, 500);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
  return false;//リンクの無効化
});


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});