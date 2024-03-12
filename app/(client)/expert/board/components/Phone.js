"use client";
import React, { useState } from "react";

export default function Phone({ elem }) {
  // 모달 표시 상태를 관리하는 상태 변수와 setter 함수
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 클릭 이벤트 핸들러: 모달 표시 상태를 토글함
  const handleClick = (e) => {
    // 모바일 디바이스가 아니라면(즉, PC에서 실행된다면)
    if (!/Mobi/i.test(navigator.userAgent)) {
      e.preventDefault(); // 기본 동작 방지(전화 연결 방지)
      setIsModalOpen(!isModalOpen); // 모달 상태 토글
    }
    // 모바일 디바이스에서는 링크의 기본 동작(전화 연결)을 수행
  };
  return (
    <>
      <a
        href={`tel:1670-8684`}
        className="ds-b"
        onClick={handleClick}
      >
        <div className="ds-f ai-c jc-b">
          <p>
            <i className="ri-phone-fill"></i>전화상담
          </p>
        </div>
      </a>

      {isModalOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2 style={{ fontSize: "20px", textAlign: "center" }}>대표전화</h2>
            <p style={{ fontSize: "16px", color: "black" }}>
              1670-8684
            </p>
            <div style={buttonContainerStyle}>
              <button
                style={{ width: "5rem", height: "2rem", fontSize: "1rem" }}
                className="submit_btn"
                onClick={() => setIsModalOpen(false)}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// 모달 스타일
const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "50",
};

// 모달 내용 스타일
const modalContentStyle = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "15px",
};
// 버튼 컨테이너 스타일
const buttonContainerStyle = {
  marginTop: "20px",
  display: "flex",
  justifyContent: "center", // 버튼을 수평으로 중앙 정렬
  borderRadius: "1rem",
};
