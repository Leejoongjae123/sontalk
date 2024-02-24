
// 탭메뉴 구현
$(".tab_menu .ds-f").click(function () {
  $(".tab_menu .ds-f").removeClass("on");
  $(this).addClass("on");

  let tabOn = $(this).attr("data-tab");
  $(".tab_in").removeClass("on");
  $(`.${tabOn}`).addClass("on");

  // 전문가 찾기 페이지 tab 메뉴 이텍트용 스크립트
  if (tabOn == "tab-02") {
    $(".expert_wrap .cont2 .tab_menu .inner > .bh_row").addClass("on");
  } else {
    $(".expert_wrap .cont2 .tab_menu .inner > .bh_row").removeClass("on");
  }
});

// 메인 전문가 찾기 더보기+ 버튼 스크립트
$(".sec2_content .option .inner.in2").click(function () {
  let Option = $(this).attr("data-rw");
  $(`.sec2_content .option > .bh_row.${Option}`).removeClass("none");
  $(this).parent().remove();
});

// 지도 Pin 이미지 노출 스크립트
$(".svg_area svg a").mouseenter(function () {
  let Txt = $(this).attr("data-check");
  let Pin = $(this).attr("data-adrs");

  $(`.map_txt`).show();
  $(`.pin_point`).hide();

  $(`.map_txt.${Txt}`).hide();
  $(`.pin_point.${Pin}`).show();
});

// 게시판상세 아이콘 클릭 스크립트
$(".content_tool_box .tools a").click(function () {
  $(this).toggleClass("active");
});

// 스크롤 최하단 이동시 퀵메뉴 이동 스크립트
$(window).scroll(function () {
  var scrolltop = $(window).scrollTop();
  var innerHeight = $(window).innerHeight();
  var scrollHeight = $("body").prop("scrollHeight");
  if (scrolltop + innerHeight >= scrollHeight) {
    $("#quick_menu").css({ bottom: "320px" });
  } else {
    $("#quick_menu").css({ bottom: "50px" });
  }
});

// 지도 색상 유지 스크립트
const poinPoint = document.querySelectorAll(".svg_area svg a");
poinPoint.forEach((data) => {
  data.addEventListener("mouseenter", function (e) {
    poinPoint.forEach((el) => {
      el.classList.remove("on");
    });
    e.target.classList.add("on");
  });
});
