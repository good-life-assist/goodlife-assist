// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "controllers"

  function fadeAnime() {

    $('.fadeInTrigger, .fadeUpTrigger').each(function () {
      var elemPos = $(this).offset().top + 80;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll >= elemPos - windowHeight) {
        if ($(this).hasClass('fadeInTrigger')) {
          $(this).addClass('fadeIn');
        }
        if ($(this).hasClass('fadeUpTrigger')) {
          $(this).addClass('fadeUp');
        }
      } else {
        if ($(this).hasClass('fadeInTrigger')) {
          $(this).removeClass('fadeIn');
        }
        if ($(this).hasClass('fadeUpTrigger')) {
          $(this).removeClass('fadeUp');
        }
      }
    });
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
  // 画面が読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function(){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
  


    const $openBtn = $('.open_btn');
    const $gNav = $('.g-nav');
    const $closeBtn = $gNav.find('.close_btn');
    
    $openBtn.on('click', function() {
      $('body').css('overflow', 'hidden');
      $(this).toggleClass('active');
      $gNav.toggleClass('panelactive');
    });
    
    $closeBtn.on('click', function() {
      $('body').css('overflow-y', 'scroll');
      $openBtn.removeClass('active');
      $gNav.removeClass('panelactive');
    });

    
    $(window).on('load',function(){
        
        //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
        $("#splash").delay(0).fadeOut(function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
        
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
        
        });
        //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
        
        //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
        $('.splashbg').on('animationend', function() { 
        //この中に動かしたいJSを記載
        });
        //=====ここまで背景が伸びた後に動かしたいJSをまとめる
        
    });

    $(function () {
        $(".accordion-title").on('click', () => {
          $(this).next('ul').slideUp('fast');
        });
        $(".accordion-title").on('click', () => {
          $(this).next('ul').slideDown('fast');
        });
        $('.accordion-title').on('click', function () {
          $(this).next().slideToggle(200);
          $(this).toggleClass('open', 200);
        });
      });

