"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect } from "react";
import AOS from "aos";

export default function Suggestions() {
  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
  }, []);
  return (
    <section class="section section2 po-r">
      <div class="sec2_content">
        <div class="cont1" data-aos="fade-up" data-aos-duration="1000">
          <div class="bh_wrap">
            <div class="title">
              <h3 class="fw-b">
                내게 맞는 <em>전문가</em> 찾기
              </h3>
              <p>내게 맞는 전문가를 빠르고 간편하게 찾아보세요.</p>
            </div>
            <div class="tab_area">
              <div class="tab_menu">
                <div class="bh_row">
                  <div class="col-lg-6 col-12 m-mb-20">
                    <div class="ds-f ai-c on" data-tab="tab-01">
                      <p class="po-r">
                        <i class="ri-file-list-3-line"></i>분야로 찾기
                        <i class="ri-check-fill check"></i>
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-12">
                    <div class="ds-f ai-c" data-tab="tab-02">
                      <p class="po-r">
                        <i class="ri-map-pin-line"></i>지역으로 찾기
                        <i class="ri-check-fill check"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab_in tab-01 on">
                <div class="option">
                  <div class="bh_row rw1 none">
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-b po-r">
                          <img src="images/icon/sec2_icon1.png" alt="icon" />
                          <p>
                            진단비
                            <br />
                            (뇌, 심장, 암)
                          </p>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-b po-r">
                          <img src="images/icon/sec2_icon2.png" alt="icon" />
                          <p>
                            암 입원비 /<br />
                            실손 의료비
                          </p>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-b po-r">
                          <img src="images/icon/sec2_icon3.png" alt="icon" />
                          <p>
                            질병·상해 사망 및<br />
                            후유장해
                          </p>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-b po-r">
                          <img src="images/icon/sec2_icon4.png" alt="icon" />
                          <p>치아 보험</p>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-b po-r">
                          <img src="images/icon/sec2_icon5.png" alt="icon" />
                          <p>
                            자동차보험,
                            <br />
                            운전자보험
                          </p>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner in2 ta-c" data-rw="rw1">
                        <button class="ds-b">더보기+</button>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-b po-r">
                          <img src="images/icon/sec2_icon6.png" alt="icon" />
                          <p>
                            배상 책임, 근로자재해보험, 학교안전공제, 여행자보험
                          </p>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-b po-r">
                          <img src="images/icon/sec2_icon7.png" alt="icon" />
                          <p>도난, 화재, 누수, 침수 재난사고</p>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-b po-r">
                          <img src="images/icon/sec2_icon8.png" alt="icon" />
                          <p>
                            여선전용 및<br />
                            태아
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab_in tab-02">
                <div class="option op2">
                  <div class="bh_row none rw2">
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-f po-r ai-c jc-c">
                          <div class="txt_box">
                            <i class="ri-map-pin-line"></i>
                            <p>수도권</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-f po-r ai-c jc-c">
                          <div class="txt_box">
                            <i class="ri-map-pin-line"></i>
                            <p>원주/강릉/강원</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-f po-r ai-c jc-c">
                          <div class="txt_box">
                            <i class="ri-map-pin-line"></i>
                            <p>청주/충북</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-f po-r ai-c jc-c">
                          <div class="txt_box">
                            <i class="ri-map-pin-line"></i>
                            <p>대전/세종/충남</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-f po-r ai-c jc-c">
                          <div class="txt_box">
                            <i class="ri-map-pin-line"></i>
                            <p>대구/경북</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner in2 ta-c" data-rw="rw2">
                        <button class="ds-b">더보기+</button>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-f po-r ai-c jc-c">
                          <div class="txt_box">
                            <i class="ri-map-pin-line"></i>
                            <p>전주/전북</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-f po-r ai-c jc-c">
                          <div class="txt_box">
                            <i class="ri-map-pin-line"></i>
                            <p>부산/울산/경남</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-f po-r ai-c jc-c">
                          <div class="txt_box">
                            <i class="ri-map-pin-line"></i>
                            <p>광주/전남</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-6">
                      <div class="inner ta-c">
                        <a href="#" class="ds-f po-r ai-c jc-c">
                          <div class="txt_box">
                            <i class="ri-map-pin-line"></i>
                            <p>제주</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="cont2">
          <div class="ml-bh_wrap">
            <div class="bh_row no-gutters">
              <div class="col-lg-auto col-12">
                <div class="txt_box">
                  <h3>간편상담</h3>
                  <p>
                    나와 비슷한 문제의 답변을 찾아보거나,
                    <br />
                    직접 상담글을 작성하여
                    <br />
                    답변을 받아볼 수 있어요.
                  </p>
                  <div class="effect_btn w_ver">
                    <a href="counsel_borad.html" class="ds-f ai-c">
                      <span>바로가기</span>
                      <i class="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg col-12 po-r">
                <div class="nav">
                  <div class="bh_wrap">
                    <div class="ds-f ai-c">
                      <div class="swiper-button-prev">
                        <i class="ri-arrow-left-s-line"></i>
                      </div>
                      <div class="line"></div>
                      <div class="swiper-button-next">
                        <i class="ri-arrow-right-s-line"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper simple_slide">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide slide1 po-r">
                      <div class="inner">
                        <div class="ds-f category">
                          <span class="ds-b">#의료보험</span>
                          <span class="ds-b">#의료보험</span>
                          <span class="ds-b">#의료보험</span>
                        </div>
                        <div class="title">임플란트의 의료보험 적용여부</div>
                        <div class="content">
                          어릴 적부터 만성 천식을 앓고 있어 주기적으로 병원에서
                          진료를 받습니다. 그런데 동일한 질병에 대해 진료를 볼
                          시…
                        </div>
                        <div class="bh_row no-gutters info jc-b">
                          <p>
                            전문가 답변 <b class="fw-b">6</b>건
                          </p>
                          <div class="ds-f">
                            <span class="ds-b">조회수 326</span>
                            <span class="ds-b">2024.01.10</span>
                          </div>
                        </div>
                      </div>
                      <a href="#"></a>
                    </div>
                    <div class="swiper-slide slide2 po-r">
                      <div class="inner">
                        <div class="ds-f category">
                          <span class="ds-b">#의료보험</span>
                          <span class="ds-b">#의료보험</span>
                          <span class="ds-b">#의료보험</span>
                        </div>
                        <div class="title">임플란트의 의료보험 적용여부</div>
                        <div class="content">
                          어릴 적부터 만성 천식을 앓고 있어 주기적으로 병원에서
                          진료를 받습니다. 그런데 동일한 질병에 대해 진료를 볼
                          시…
                        </div>
                        <div class="bh_row no-gutters info jc-b">
                          <p>
                            전문가 답변 <b class="fw-b">6</b>건
                          </p>
                          <div class="ds-f">
                            <span class="ds-b">조회수 326</span>
                            <span class="ds-b">2024.01.10</span>
                          </div>
                        </div>
                      </div>
                      <a href="#"></a>
                    </div>
                    <div class="swiper-slide slide3 po-r">
                      <div class="inner">
                        <div class="ds-f category">
                          <span class="ds-b">#의료보험</span>
                          <span class="ds-b">#의료보험</span>
                          <span class="ds-b">#의료보험</span>
                        </div>
                        <div class="title">임플란트의 의료보험 적용여부</div>
                        <div class="content">
                          어릴 적부터 만성 천식을 앓고 있어 주기적으로 병원에서
                          진료를 받습니다. 그런데 동일한 질병에 대해 진료를 볼
                          시…
                        </div>
                        <div class="bh_row no-gutters info jc-b">
                          <p>
                            전문가 답변 <b class="fw-b">6</b>건
                          </p>
                          <div class="ds-f">
                            <span class="ds-b">조회수 326</span>
                            <span class="ds-b">2024.01.10</span>
                          </div>
                        </div>
                      </div>
                      <a href="#"></a>
                    </div>
                    <div class="swiper-slide slide1 po-r">
                      <div class="inner">
                        <div class="ds-f category">
                          <span class="ds-b">#의료보험</span>
                          <span class="ds-b">#의료보험</span>
                          <span class="ds-b">#의료보험</span>
                        </div>
                        <div class="title">임플란트의 의료보험 적용여부</div>
                        <div class="content">
                          어릴 적부터 만성 천식을 앓고 있어 주기적으로 병원에서
                          진료를 받습니다. 그런데 동일한 질병에 대해 진료를 볼
                          시…
                        </div>
                        <div class="bh_row no-gutters info jc-b">
                          <p>
                            전문가 답변 <b class="fw-b">6</b>건
                          </p>
                          <div class="ds-f">
                            <span class="ds-b">조회수 326</span>
                            <span class="ds-b">2024.01.10</span>
                          </div>
                        </div>
                      </div>
                      <a href="#"></a>
                    </div>
                    <div class="swiper-slide slide2 po-r">
                      <div class="inner">
                        <div class="ds-f category">
                          <span class="ds-b">#의료보험</span>
                          <span class="ds-b">#의료보험</span>
                          <span class="ds-b">#의료보험</span>
                        </div>
                        <div class="title">임플란트의 의료보험 적용여부</div>
                        <div class="content">
                          어릴 적부터 만성 천식을 앓고 있어 주기적으로 병원에서
                          진료를 받습니다. 그런데 동일한 질병에 대해 진료를 볼
                          시…
                        </div>
                        <div class="bh_row no-gutters info jc-b">
                          <p>
                            전문가 답변 <b class="fw-b">6</b>건
                          </p>
                          <div class="ds-f">
                            <span class="ds-b">조회수 326</span>
                            <span class="ds-b">2024.01.10</span>
                          </div>
                        </div>
                      </div>
                      <a href="#"></a>
                    </div>
                    <div class="swiper-slide slide3 po-r">
                      <div class="inner">
                        <div class="ds-f category">
                          <span class="ds-b">#의료보험</span>
                          <span class="ds-b">#의료보험</span>
                          <span class="ds-b">#의료보험</span>
                        </div>
                        <div class="title">임플란트의 의료보험 적용여부</div>
                        <div class="content">
                          어릴 적부터 만성 천식을 앓고 있어 주기적으로 병원에서
                          진료를 받습니다. 그런데 동일한 질병에 대해 진료를 볼
                          시…
                        </div>
                        <div class="bh_row no-gutters info jc-b">
                          <p>
                            전문가 답변 <b class="fw-b">6</b>건
                          </p>
                          <div class="ds-f">
                            <span class="ds-b">조회수 326</span>
                            <span class="ds-b">2024.01.10</span>
                          </div>
                        </div>
                      </div>
                      <a href="#"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}