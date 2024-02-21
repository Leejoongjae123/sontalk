"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect } from "react";
import AOS from "aos";

function InquiryTitle() {
  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
  }, []);
  return (
    <div className="title_area" data-aos="fade-down" data-aos-duration="1500">
      <div className="bh_row no-gutters jc-b ai-c">
        <div className="col-lg-auto col-12">
          <div className="txt_box">
            <span>맞춤 손사추천</span>
            <h3>
              내 상황에 맞는
              <br />
              <span>전문 손해사정사는?</span>
            </h3>
            <p>
              처하신 상황의 과정과 보험계약사항(상품명, 계약일자 등),
              사후처리사항(병원 치료 내용 등)에
              <br />
              대해 자세히 작성해주시면 적합한 손해사정사를 추천해드립니다.
            </p>
          </div>
        </div>
        <div className="col-lg-auto col-12">
          <div className="ds-f bh-flex-flex-wrap">
            <div className="circle_box ta-c">
              <i className="ri-phone-fill"></i>
              <p>1670-8684</p>
              <a href="tel:000-0000-0000">전화 문의하기</a>
            </div>
            <div className="circle_box cb2 ta-c">
              <p>
                <span>카카오톡</span>으로 상담해보세요.
              </p>
              <a href="#">카톡 문의하기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InquiryTitle;
