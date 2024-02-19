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
    <section className="section section3">
      <div className="bh_wrap">
        <div className="title">
          <div className="ds-f jc-b ai-e bh-flex-flex-wrap">
            <div className="in_title">
              <h3 className="fw-b">
                손사 <em>Talk</em>
              </h3>
              <p>
                최고의 전문가들이 직접 해결한 사례의 생생한 후기나 분야별
                손해사정 지식 및 정보를 찾아보세요.
              </p>
            </div>
            <div className="effect_btn">
              <a href="talk_board.html" className="ds-f ai-c">
                <span>바로가기</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className="card_slide_wrap po-r"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="swiper-button-prev2">
            <i className="ri-arrow-left-line"></i>
          </div>
          <div className="swiper-button-next2">
            <i className="ri-arrow-right-line"></i>
          </div>
          <div className="swiper card_slide">
            <div className="swiper-wrapper">
              <div className="swiper-slide slide1 po-r">
                <div className="inner">
                  <div className="profile_img">
                    <img src="images/main/profile_img1.png" alt="profile" />
                  </div>
                  <div className="ds-f ai-c name">
                    <i className="ri-account-pin-circle-fill"></i>
                    <p className="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div className="category">
                    <div className="ds-f ai-c">
                      <i className="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div>
              <div className="swiper-slide slide2 po-r">
                <div className="inner">
                  <div className="profile_img">
                    <img src="images/main/profile_img2.png" alt="profile" />
                  </div>
                  <div className="ds-f ai-c name">
                    <i className="ri-account-pin-circle-fill"></i>
                    <p className="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div className="category">
                    <div className="ds-f ai-c">
                      <i className="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div>
              <div className="swiper-slide slide3 po-r">
                <div className="inner">
                  <div className="profile_img">
                    <img src="images/main/profile_img3.png" alt="profile" />
                  </div>
                  <div className="ds-f ai-c name">
                    <i className="ri-account-pin-circle-fill"></i>
                    <p className="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div className="category">
                    <div className="ds-f ai-c">
                      <i className="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div>
              <div className="swiper-slide slide1 po-r">
                <div className="inner">
                  <div className="profile_img">
                    <img src="images/main/profile_img1.png" alt="profile" />
                  </div>
                  <div className="ds-f ai-c name">
                    <i className="ri-account-pin-circle-fill"></i>
                    <p className="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div className="category">
                    <div className="ds-f ai-c">
                      <i className="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div>
              <div className="swiper-slide slide2 po-r">
                <div className="inner">
                  <div className="profile_img">
                    <img src="images/main/profile_img2.png" alt="profile" />
                  </div>
                  <div className="ds-f ai-c name">
                    <i className="ri-account-pin-circle-fill"></i>
                    <p className="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div className="category">
                    <div className="ds-f ai-c">
                      <i className="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div>
              <div className="swiper-slide slide3 po-r">
                <div className="inner">
                  <div className="profile_img">
                    <img src="images/main/profile_img3.png" alt="profile" />
                  </div>
                  <div className="ds-f ai-c name">
                    <i className="ri-account-pin-circle-fill"></i>
                    <p className="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div className="category">
                    <div className="ds-f ai-c">
                      <i className="ri-check-fill"></i>
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
