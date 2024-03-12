"use client";
import React from "react";
import Script from "next/script";

function WithCompany() {
  return (
    <>
      <div className="partner_area">
        <div className="ds-f jc-b mb-20">
          <div className="title">제휴사</div>
          <div className="nav">
            <div className="ds-f ai-c">
              <div className="swiper-button-prev">
                <i className="ri-arrow-left-s-line"></i>
              </div>
              <div className="line"></div>
              <div className="swiper-button-next">
                <i className="ri-arrow-right-s-line"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper partner_slide">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide1 po-r">
              <div className="inner">
                <img src="images/sub/partner_logo.png" alt="logo" />
              </div>
            </div>
            <div className="swiper-slide slide2 po-r">
              <div className="inner">
                <img src="images/sub/partner_logo.png" alt="logo" />
              </div>
            </div>
            <div className="swiper-slide slide3 po-r">
              <div className="inner">
                <img src="images/sub/partner_logo.png" alt="logo" />
              </div>
            </div>
            <div className="swiper-slide slide4 po-r">
              <div className="inner">
                <img src="images/sub/partner_logo.png" alt="logo" />
              </div>
            </div>
            <div className="swiper-slide slide5 po-r">
              <div className="inner">
                <img src="images/sub/partner_logo.png" alt="logo" />
              </div>
            </div>
            <div className="swiper-slide slide1 po-r">
              <div className="inner">
                <img src="images/sub/partner_logo.png" alt="logo" />
              </div>
            </div>
            <div className="swiper-slide slide2 po-r">
              <div className="inner">
                <img src="images/sub/partner_logo.png" alt="logo" />
              </div>
            </div>
            <div className="swiper-slide slide3 po-r">
              <div className="inner">
                <img src="images/sub/partner_logo.png" alt="logo" />
              </div>
            </div>
            <div className="swiper-slide slide4 po-r">
              <div className="inner">
                <img src="images/sub/partner_logo.png" alt="logo" />
              </div>
            </div>
            <div className="swiper-slide slide5 po-r">
              <div className="inner">
                <img src="images/sub/partner_logo.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script
        src="/swiper.min.js"
        onLoad={() => {
          var swiper = new Swiper(".partner_slide", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            autoplay: {
              delay: 5000,
            },
            spaceBetween: 20,
            breakpoints: {
              0: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 5,
              },
            },
          });
        }}
      ></Script>
    </>
  );
}

export default WithCompany;
