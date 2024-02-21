"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect } from "react";
import AOS from "aos";

function UpperCont() {
  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
  }, []);
  
  return (
    <div className="cont1">
      <div className="bh_wrap">
        <div
          className="txt_box po-r"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <span>전문가 찾기</span>
          <h3>
            나를 위한
            <br />
            <span>전문가를 찾아보세요</span>
          </h3>
          <img
            src="images/sub/expert._point.png"
            alt="point"
            className="point"
          />
        </div>
      </div>
    </div>
  );
}

export default UpperCont;
