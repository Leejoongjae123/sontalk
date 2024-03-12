"use client";

import AOS from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'; // AOS 스타일 시트 임포트

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
  }, []);

  return (
    <div className="txt_box" data-aos="fade-down" data-aos-duration="1500">
      <span>About us</span>
      <h3>
        저희는 많은 손해사정사들과 협력하여
        <br />
        <span>깊은 전문지식과 경험</span>을 바탕으로
        <br />
        최상의 서비스를 제공합니다.
      </h3>
    </div>
  );
}

export default MyApp;
