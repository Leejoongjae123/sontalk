"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect } from "react";
import AOS from "aos";

function MyRecommendations() {
  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
  }, []);
  return (
    <section class="section section4">
      <div class="bh_wrap">
        <div class="bh_row no-gutters ai-c">
          <div class="col-lg-auto col-12">
            <div class="txt_box">
              <span>손TOP</span>
              <h3>
                내 상황에 맞는 <em>전문 손해사정사는?</em>
              </h3>
              <p>
                처하신 상황의 과정과 보험계약사항(상품명, 계약일자 등),
                사후처리사항(병원 치료 내용 등)에
                <br />
                대해 자세히 작성해주시면 적합한 손해사정사를 추천해드립니다.
              </p>
              <div class="effect_btn">
                <a href="inquiry.html" class="ds-f ai-c">
                  <span>상담 신청하기</span>
                  <i class="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-auto col-12">
            <div class="circle_box ta-c po-r">
              <div class="inner">
                <span>전화문의</span>
                <h5>1670-8684</h5>
                <p>
                  평일 09:00 ~ 18:00
                  <br />
                  주말 및 공휴일 휴무
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-auto col-12">
            <div class="circle_box2 ta-c po-r">
              <div class="inner">
                <p>
                  보험금 청구
                  <br />
                  전문적이고 효과적으로!
                </p>
                <a href="inquiry.html" class="ds-b">
                  빠르게 전문가 찾기<i class="ri-arrow-right-line"></i>
                </a>
                <img src="images/main/sec4_img1.png" alt="img" class="point" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyRecommendations;
