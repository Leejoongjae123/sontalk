"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect } from "react";
import AOS from "aos";

function BoardTitle() {
  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
  }, []);
  return (
    <div
      className="board_title_area"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <span>간편 상담</span>
      <h3>
        간편 상담을 통해
        <br />
        <span className="bh_color_main">궁금증을 해결해보세요.</span>
      </h3>
      <form className="search_area">
        <div className="ds-f">
          <input
            type="text"
            placeholder="키워드 또는 제목, 내용을 입력해주세요."
          />
          <button type="submit">
            <i className="ri-search-line"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default BoardTitle;
