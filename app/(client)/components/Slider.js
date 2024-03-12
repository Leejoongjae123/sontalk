"use client";
// import $ from 'jquery';
import React from "react";
import Script from 'next/script'

function Slider() {
  return (
    <div id="main_silde" className="main_slide">
      <div className="swiper main_swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide1">
            <div className="bh_wrap h-100">
              <div className="txt_box po-r h-100">
                <span className="ds-b">손TOP</span>
                <h3>
                  복잡한 보험금 청구,
                  <br />
                  우리지역의 분야별 전문가들과
                  <br />
                  전략적으로, 합리적으로, <em>“더”</em> 받자!
                </h3>
                <p>
                  손해사정 분야의 복잡한 문제를 신속하게 해결하고,
                  <br />
                  보험 소비자들의 권익 보호를 위해 최고의 전문가들이 함께합니다.
                </p>
                <img
                  src="images/slide/slide_img.png"
                  alt="slide_img"
                  className="point"
                />
              </div>
            </div>
          </div>
          <div className="swiper-slide slide2">
            <div className="bh_wrap h-100">
              <div className="txt_box po-r h-100">
                <span className="ds-b">손TOP</span>
                <h3>
                  복잡한 보험금 청구,
                  <br />
                  우리지역의 분야별 전문가들과
                  <br />
                  전략적으로, 합리적으로, <em>“더”</em> 받자!
                </h3>
                <p>
                  손해사정 분야의 복잡한 문제를 신속하게 해결하고,
                  <br />
                  보험 소비자들의 권익 보호를 위해 최고의 전문가들이 함께합니다.
                </p>
                <img
                  src="images/slide/slide_img.png"
                  alt="slide_img"
                  className="point"
                />
              </div>
            </div>
          </div>
          <div className="swiper-slide slide3">
            <div className="bh_wrap h-100">
              <div className="txt_box po-r h-100">
                <span className="ds-b">손TOP</span>
                <h3>
                  복잡한 보험금 청구,
                  <br />
                  우리지역의 분야별 전문가들과
                  <br />
                  전략적으로, 합리적으로, <em>“더”</em> 받자!
                </h3>
                <p>
                  손해사정 분야의 복잡한 문제를 신속하게 해결하고,
                  <br />
                  보험 소비자들의 권익 보호를 위해 최고의 전문가들이 함께합니다.
                </p>
                <img
                  src="images/slide/slide_img.png"
                  alt="slide_img"
                  className="point"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bh_wrap s_tool">
          <div className="bh po-r ds-f ai-c">
            <div className="swiper-pagination bh_row gutters-5"></div>
            <div className="controllers">
              <div className="play">
                <i className="ri-play-mini-fill play"></i>
              </div>
              <div className="pause">
                <i className="ri-pause-mini-line pause"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script
        src="/swiper.min.js"
        onLoad={() => {
          var swiper = new Swiper(".main_swiper", {
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  '<div class="' +
                  className +
                  " " +
                  "col-auto" +
                  " " +
                  "ds-f ai-c" +
                  '">' +
                  "<p>" +
                  "0" +
                  (index + 1) +
                  "</p>" +
                  '<div class="line"></div>' +
                  "</div>"
                );
              },
            },
            autoplay: {
              delay: 5000,
            },
          });

          document.querySelector(".s_tool .pause").click(function () {
            swiper.autoplay.stop();
            document.querySelector(".s_tool").addClass("pause");
            document.querySelector(this).hide();
            document.querySelector(".s_tool .play").show();
          });
          document.querySelector(".s_tool .play").click(function () {
            swiper.autoplay.start();
            document.querySelector(".s_tool").removeClass("pause");
            document.querySelector(this).hide();
            document.querySelector(".s_tool .pause").show();
          });

          var swiper2 = new Swiper(".simple_slide", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            autoplay: {
              delay: 5000,
            },
            spaceBetween: 30,
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 3,
              },
            },
          });

          var swiper3 = new Swiper(".card_slide", {
            navigation: {
              nextEl: ".swiper-button-next2",
              prevEl: ".swiper-button-prev2",
            },
            autoplay: {
              delay: 5000,
            },
            spaceBetween: 30,
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              992: {
                slidesPerView: 3,
              },
            },
          });
        }}
      ></Script>
    </div>
  );
}

export default Slider;
