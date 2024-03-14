"use client";
import React from "react";
import { useState } from "react";

export default function SignUpButton({ signUp }) {
  const [isPossible, setIsPossible] = useState(false);
  const [secretKey, setSecretKey] = useState("");
  // 입력 필드의 값이 변경될 때마다 secretKey 상태를 업데이트하는 함수
  const handleSecretKeyChange = (event) => {
    setSecretKey(event.target.value);
  };
  // 시크릿 키 확인 버튼 클릭 이벤트 핸들러
  const handleClick = (event) => {
    
    if (secretKey === "8684") {
      setIsPossible(true);
    } else {
      alert("시크릿 키가 올바르지 않습니다.");
      setIsPossible(false);
    }
  };
  return (
    <div className="text-center">
      <div className="mb-3">
        <input
          type="password"
          name="secretKey"
          className="form-control"
          placeholder="secretKey"
          aria-label="secretKey"
          onChange={handleSecretKeyChange} // input 값 변경 핸들러 추가
          value={secretKey} // input 값 관리
        />
      </div>
      {secretKey==="8684" ? (
        <button
          type="submit"
          className="btn bg-gradient-info w-100 mt-4 mb-2"
          // formAction={signUp}
        >
          회원가입
        </button>
      ) : (
      <></>
      )}
    </div>
  );
}
