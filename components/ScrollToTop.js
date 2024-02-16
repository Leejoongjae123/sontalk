'use client'
import React from "react";

function ScrollToTopButton() {
  // 페이지 최상단으로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 부드러운 스크롤 효과
    });
  };

  return (
    <a onClick={scrollToTop} className="ds-f">
      <i className="ri-arrow-up-s-line"></i>
      <p>TOP</p>
    </a>
  );
}

export default ScrollToTopButton;
