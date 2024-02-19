"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect } from "react";
import AOS from "aos";

function Recommendations() {
  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
  }, []);
  return (
    <section class="section section3">
      <div class="bh_wrap">
        <div class="title">
          <div class="ds-f jc-b ai-e bh-flex-flex-wrap">
            <div class="in_title">
              <h3 class="fw-b">
                손사 <em>Talk</em>
              </h3>
              <p>
                최고의 전문가들이 직접 해결한 사례의 생생한 후기나 분야별
                손해사정 지식 및 정보를 찾아보세요.
              </p>
            </div>
            <div class="effect_btn">
              <a href="talk_board.html" class="ds-f ai-c">
                <span>바로가기</span>
                <i class="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          class="card_slide_wrap po-r"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="swiper-button-prev2">
            <i class="ri-arrow-left-line"></i>
          </div>
          <div class="swiper-button-next2">
            <i class="ri-arrow-right-line"></i>
          </div>
          <div class="swiper card_slide">
            <div class="swiper-wrapper">
              <div class="swiper-slide slide1 po-r">
                <div class="inner">
                  <div class="profile_img">
                    <img src="images/main/profile_img1.png" alt="profile" />
                  </div>
                  <div class="ds-f ai-c name">
                    <i class="ri-account-pin-circle-fill"></i>
                    <p class="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div class="category">
                    <div class="ds-f ai-c">
                      <i class="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div>
              <div class="swiper-slide slide2 po-r">
                <div class="inner">
                  <div class="profile_img">
                    <img src="images/main/profile_img2.png" alt="profile" />
                  </div>
                  <div class="ds-f ai-c name">
                    <i class="ri-account-pin-circle-fill"></i>
                    <p class="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div class="category">
                    <div class="ds-f ai-c">
                      <i class="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div>
              <div class="swiper-slide slide3 po-r">
                <div class="inner">
                  <div class="profile_img">
                    <img src="images/main/profile_img3.png" alt="profile" />
                  </div>
                  <div class="ds-f ai-c name">
                    <i class="ri-account-pin-circle-fill"></i>
                    <p class="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div class="category">
                    <div class="ds-f ai-c">
                      <i class="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div>
              <div class="swiper-slide slide1 po-r">
                <div class="inner">
                  <div class="profile_img">
                    <img src="images/main/profile_img1.png" alt="profile" />
                  </div>
                  <div class="ds-f ai-c name">
                    <i class="ri-account-pin-circle-fill"></i>
                    <p class="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div class="category">
                    <div class="ds-f ai-c">
                      <i class="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div>
              <div class="swiper-slide slide2 po-r">
                <div class="inner">
                  <div class="profile_img">
                    <img src="images/main/profile_img2.png" alt="profile" />
                  </div>
                  <div class="ds-f ai-c name">
                    <i class="ri-account-pin-circle-fill"></i>
                    <p class="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div class="category">
                    <div class="ds-f ai-c">
                      <i class="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div>
              <div class="swiper-slide slide3 po-r">
                <div class="inner">
                  <div class="profile_img">
                    <img src="images/main/profile_img3.png" alt="profile" />
                  </div>
                  <div class="ds-f ai-c name">
                    <i class="ri-account-pin-circle-fill"></i>
                    <p class="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div class="category">
                    <div class="ds-f ai-c">
                      <i class="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recommendations;
