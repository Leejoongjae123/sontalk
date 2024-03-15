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
    queryData()
  }, []);

  const queryData=()=>{
    const router=useRouter()
    const query=router.query
    console.log(query)
  }
  
  
  

  return (
    <section className="section section1">
      <div className="bh_wrap">
        <div className="title" data-aos="fade-down" data-aos-duration="1000">
          <div className="ds-f ai-c jc-c">
            <img src="images/main/sec1_img.png" alt="img" />
            <h3 className="fw-b">
              <em>어떤 점</em>이 궁금하신가요?
            </h3>
          </div>
        </div>
        <form className="search_area">
          <div className="ds-f jc-c">
            <input
              type="text"
              placeholder="상담분야 또는 전문가 이름을 입력해 주세요."
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
