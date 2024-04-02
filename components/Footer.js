import React from "react";
import ScrollToTop from './ScrollToTop'
import Service from './Service'
import Privacy from './Privacy'
export default function Footer() {

  // 페이지 최상단으로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤 효과
    });
  };

  return (
    <>
      <footer>
        <div className="footer">
          <div className="bh_wrap">
            <div className="f_menu">
              <div className="ds-f">
                <Service></Service>
                <Privacy></Privacy>
              </div>
            </div>
            <div className="f_info">
              <div className="ds-f bh-flex-flex-wrap">
                <p>상호명 : MR Pass</p>
                <p>대표 : 김동식</p>
                <p>TEL : 1670-8684</p>
                <p>EMAIL: mrsontop@naver.com</p>
              </div>
              <div className="ds-f bh-flex-flex-wrap">
                <p>사업자 등록번호 : 182-81-02920</p>
                {/* <p>통신판매신고번호 : 123-456-7890호</p> */}
              </div>
              <p>주소 : 경기도 남양주시 와부읍 덕소로 270, 110동 705호</p>
            </div>
            <div className="f_logo">
              <div className="ds-f ai-c bh-flex-flex-wrap">
                <img src="images/main/f_logo.png" alt="footer_logo" />
                <span>Copyright 2024. MR Pass Co. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
        <div id="quick_menu" className="quick_menu">
          <ul>
            <li>
              <a href="inquiry" className="ds-f">
                <i className="ri-discuss-fill"></i>
                <p>상담신청</p>
              </a>
            </li>
            <li>
              {/* <a onClick={scrollToTop} className="ds-f">
                <i className="ri-arrow-up-s-line"></i>
                <p>TOP</p>
              </a> */}
              <ScrollToTop></ScrollToTop>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
