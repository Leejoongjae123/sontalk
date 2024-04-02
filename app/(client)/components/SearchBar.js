"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect } from "react";
import AOS from "aos";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

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
    <section className="section section1">
      <div className="bh_wrap">
        <div className="title" data-aos="fade-down" data-aos-duration="1000">
          <div className="ds-f ai-c jc-c">
            <img src="images/main/sec1_img.png" alt="img" />
            <h3 className="fw-b">
              어떤 <em>보험청구</em>를 준비하고 계시나요?(예 : 자동차보험, 진단비)
            </h3>
          </div>
        </div>
        <form className="search_area">
          <div className="ds-f jc-c">
            <input
              type="text"
              placeholder="궁금한 단어를 입력해주세요! 예) 백내장, 줄기세포 등"
            />
            <button type="submit">
              <i className="ri-search-line"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchBar;
