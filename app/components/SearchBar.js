"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect } from "react";
import AOS from "aos";

function SearchBar() {
  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
  }, []);

  return (
    <section class="section section1">
      <div class="bh_wrap">
        <div class="title" data-aos="fade-down" data-aos-duration="1000">
          <div class="ds-f ai-c jc-c">
            <img src="images/main/sec1_img.png" alt="img" />
            <h3 class="fw-b">
              <em>어떤 점</em>이 궁금하신가요?
            </h3>
          </div>
        </div>
        <form class="search_area">
          <div class="ds-f jc-c">
            <input
              type="text"
              placeholder="상담분야 또는 전문가 이름을 입력해 주세요."
            />
            <button type="submit">
              <i class="ri-search-line"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchBar;
