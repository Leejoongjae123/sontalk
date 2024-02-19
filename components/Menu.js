"use client";
import React, { useState } from "react";

export default function Menu() {
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
    // <div className="m_menu">
    <div
      className={`m_menu ${isOpen ? "show" : ""}`}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="cover"></div>
      {/* <div className="mune_list"> */}
      <div className={`menu_list ${isOpen ? "on" : ""}`}>
        <div className="close">
          <i className="ri-close-fill"></i>
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
            <a href="/about.html">- About Us</a>
          </li>
          <li>
            <a href="/expert.html">- 전문가 찾기</a>
          </li>
          <li>
            <a href="counsel_borad.html">- 간편 상담</a>
          </li>
          <li>
            <a href="/talk_board.html">- 손사 Talk</a>
          </li>
          <li>
            <a href="/inquiry.html">- 맞춤 손사추천</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
