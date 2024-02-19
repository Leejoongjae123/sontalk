"use client";
import { useState } from "react";

export default function Header() {
  // 메뉴의 상태를 관리하는 state 변수입니다. 기본값은 'false'로, 메뉴가 숨겨져 있음을 의미합니다.
  const [isOpen, setIsOpen] = useState(false);

  // 메뉴를 열기 위한 함수입니다. 'isOpen' 상태를 'true'로 설정하여 메뉴를 표시합니다.
  const menuOpen = () => {
    setIsOpen(true);
  };

  // 메뉴를 닫기 위한 함수입니다. 'isOpen' 상태를 'false'로 설정하여 메뉴를 숨깁니다.
  const menuClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header>
        <div className="header ds-b m-ds-n">
          <div className="bh_wrap">
            <div className="logo_area">
              <div className="ds-f jc-b ai-c">
                <h1>
                  <a href="/" className="ds-b">
                    <img
                      src="/images/main/logo.png"
                      alt="logo"
                      className="logo"
                    />
                  </a>
                </h1>
                <ul className="ds-f">
                  <a href="#" className="login ds-b">
                    로그인
                  </a>
                  <a href="#" className="login ds-b">
                    회원가입
                  </a>
                </ul>
              </div>
            </div>
            <div className="main_menu">
              <ul className="ds-f">
                <li className="fw-m">
                  <a href="/about">About Us</a>
                </li>
                <li className="fw-m">
                  <a href="/expert">전문가 찾기</a>
                </li>
                <li className="fw-m">
                  <a href="counsel">간편 상담</a>
                </li>
                <li className="fw-m">
                  <a href="/talk">손사 Talk</a>
                </li>
                <li className="fw-m">
                  <a href="/inquiry">맞춤 손사추천</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="m_header ds-n m-ds-b">
          <div className="m_logo ta-c">
            <a href="/">
              <img src="/images/main/logo.png" alt="logo" className="logo" />
            </a>
          </div>
          <div className="m_menu_btn" id="m_menu_btn" onClick={menuOpen}>
            <i className="ri-menu-fill"></i>
          </div>
        </div>
      </header>

      <div className="m_menu" style={{display:isOpen?'block':'none'}}>
        <div className="cover" onClick={menuClose}></div>
        <div className="mune_list on">
          <div className="close">
            <i className="ri-close-fill" onClick={menuClose}></i>
          </div>
          <div className="login_area">
            <div className="ds-f">
              <a href="#" className="ds-b">
                로그인
              </a>
              <a href="#" className="ds-b">
                회원가입
              </a>
            </div>
          </div>
          <ul>
            <li>
              <a href="/about">- About Us</a>
            </li>
            <li>
              <a href="/expert">- 전문가 찾기</a>
            </li>
            <li>
              <a href="counsel">- 간편 상담</a>
            </li>
            <li>
              <a href="/talk">- 손사 Talk</a>
            </li>
            <li>
              <a href="/inquiry">- 맞춤 손사추천</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
