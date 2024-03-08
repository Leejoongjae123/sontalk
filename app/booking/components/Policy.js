"use client";
import React, { useState } from "react";

export default function Policy() {
  // 모달 표시 상태를 관리하는 상태 변수와 setter 함수
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 클릭 이벤트 핸들러: 모달 표시 상태를 토글함
  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <a onClick={handleClick}>[자세히보기]</a>

      {isModalOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2 style={{ fontSize: "20px", textAlign: "center" }}>약관</h2>
            <p style={{ fontSize: "16px" }}>
              약관입니다.약관입니다.약관입니다.약관입니다.약관입니다.약관입니다.약관입니다.약관입니다.
            </p>
            <div style={buttonContainerStyle}>
              <button
                style={{ width: "5rem", height: "2rem" }}
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
};

// 모달 내용 스타일
const modalContentStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "5px",
};
// 버튼 컨테이너 스타일
const buttonContainerStyle = {
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center', // 버튼을 수평으로 중앙 정렬
};