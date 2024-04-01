"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect } from "react";
import AOS from "aos";

function MyRecommendations() {
  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
  }, []);
  return (
    <section className="section section4">
      <div className="bh_wrap">
        <div className="bh_row no-gutters ai-c">
          <div className="col-lg-auto col-12" style={{width:"30%"}}>
            <div className="txt_box">
              <span>손TOP</span>
              <h3>
                내 상황에 맞는 <em>전문 손해사정사는?</em>
              </h3>
              <p>
                처하신 상황의 과정과 보험계약사항(상품명, 계약일자 등),
                사후처리사항(병원 치료 내용 등)에
                <br />
                대해 자세히 작성해주시면 적합한 손해사정사를 추천해드립니다.
              </p>
              <div className="effect_btn">
                <a href="/inquiry" className="ds-f ai-c">
                  <span>상담 신청하기</span>
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-auto col-12">
            <div className="circle_box ta-c po-r">
              <div className="inner">
                <span>전화문의</span>

                <a href={`tel:1670-8684`}>
                  <h5>1670-8684</h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-auto col-12">
            <div className="circle_box2 ta-c po-r">
              <div className="inner">
                <p>
                  보험금 청구
                  <br />
                  전문적이고 효과적으로!
                </p>
                <a href="/expert" className="ds-b">
                  빠르게 전문가 찾기<i className="ri-arrow-right-line"></i>
                </a>
                <img
                  src="images/main/sec4_img1.png"
                  alt="img"
                  className="point"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-auto col-12 mobile-margin-top" >
            <div className="circle_box2 ta-c po-r">
              <div className="inner" style={{padding:"1.5rem"}}>
                <p style={{fontSize:"24px",fontWeight:'bold'}}>
                  MRPASS
                </p>
                <a target="_blank" href="https://www.mrpass.net/" className="ds-b" style={{fontSize:'16px',fontWeight:'normal'}}>
                  청구에 필요한 병원서류발급만 필요하시면 여기로!<i className="ri-arrow-right-line"></i>
                </a>
                <img
                  src="images/main/document.png"
                  alt="img"
                  className="point"
                  style={{width:"40%"}}
                />
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default MyRecommendations;
