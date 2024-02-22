'use client'
import React from "react";
import { useEffect, useState } from "react";

function MenuButtons() {
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
      <div className="m_header ds-n m-ds-b">
        <div className="m_logo ta-c">
          <a href="/">
            <img src="/images/main/logo.png" alt="logo" className="logo" />
          </a>
        </div>

        <div className="m_menu_btn" id="m_menu_btn" onClick={menuOpen}>
          <i className="ri-menu-fill"></i>
        </div>
        <div className="m_menu" style={{ display: isOpen ? "block" : "none" }}>
          <div className="cover" onClick={menuClose}></div>
          <div className="mune_list on">
            <div className="close">
              <i className="ri-close-fill" onClick={menuClose}></i>
            </div>
            <div className="login_area">
              <div className="ds-f">
                <a href="/login" className="ds-b">
                  로그인
                </a>
                <a href="/signup" className="ds-b">
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
      </div>
    </>
  );
}

export default MenuButtons;
