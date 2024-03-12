"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect } from "react";
import AOS from "aos";

function BookingTitle() {
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
            <span>전문가와 상담</span>
            <h3>
              상담 예약
            </h3>
            <p>
              상담이 필요한 내용을 작성하시면 내용 확인 후
              전문가분과 상담 일정을 정해드립니다.
            </p>
          </div>
        </div>
        {/* <div className="col-lg-auto col-12">
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
        </div> */}
      </div>
    </div>
  );
}

export default BookingTitle;
