    // 탭메뉴 구현
    $(".tab_menu .ds-f").click(function(){
      $(".tab_menu .ds-f").removeClass("on")
      $(this).addClass("on")

      let tabOn = $(this).attr("data-tab")
      $(".tab_in").removeClass("on")
      $(`.${tabOn}`).addClass("on")
      
      // 전문가 찾기 페이지 tab 메뉴 이텍트용 스크립트
      if(tabOn == 'tab-02'){
          $(".expert_wrap .cont2 .tab_menu .inner > .bh_row").addClass("on")
      }else{
          $(".expert_wrap .cont2 .tab_menu .inner > .bh_row").removeClass("on")
      }
  });