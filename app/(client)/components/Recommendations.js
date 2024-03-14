"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect,useState } from "react";
import AOS from "aos";
import { supabase } from "@/utils/supabase/client";
import keywordList from "@/components/keywordList";
import categoryList from "@/components/categoryList";


function Recommendations() {

  const [talks, setTalks] = useState([]);

  const fetchData = async () => {
    let { data: talk, error } = await supabase
      .from("talk")
      // .select("*")
      .select("*,expertNo(*)")
      .range(0,5);
    setTalks(talk);
  };

  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
    fetchData()
  }, []);

  return (
    <section className="section section3">
      <div className="bh_wrap">
        <div className="title">
          <div className="ds-f jc-b ai-e bh-flex-flex-wrap">
            <div className="in_title">
              <h3 className="fw-b">
                손사 <em>Talk</em>
              </h3>
              <p>
                최고의 전문가들이 직접 해결한 사례의 생생한 후기나 분야별
                손해사정 지식 및 정보를 찾아보세요.
              </p>
            </div>
            <div className="effect_btn">
              <a href="/talk" className="ds-f ai-c">
                <span>바로가기</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
        </div>
        <div
          className="card_slide_wrap po-r"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="swiper-button-prev2">
            <i className="ri-arrow-left-line"></i>
          </div>
          <div className="swiper-button-next2">
            <i className="ri-arrow-right-line"></i>
          </div>
          <div className="swiper card_slide">
            <div className="swiper-wrapper">
              {talks&&talks.map((elem,index)=>{return(
              <div className="swiper-slide slide1 po-r">
              <div className="inner">
                <div className="profile_img" style={{display:'flex',justifyContent:'center'}}>
                  <img className="responsive-img3" src={elem.expertNo.imageUrl} alt="profile" />
                </div>
                <div className="ds-f ai-c name">
                  <i className="ri-account-pin-circle-fill"></i>
                  <p className="fw-m">{elem.expertNo.name} 손해사정사</p>
                </div>
                <h3>{elem.title}</h3>
                <p>
                {elem.description}
                </p>
                <div className="category">
                  <div className="ds-f ai-c">
                    <i className="ri-check-fill"></i>
                    <p>{findNameByCat(elem.field1)}</p>
                  </div>
                </div>
              </div>
              
            </div>
              )})}

              {/* <div className="swiper-slide slide2 po-r">
                <div className="inner">
                  <div className="profile_img">
                    <img src="images/main/profile_img2.png" alt="profile" />
                  </div>
                  <div className="ds-f ai-c name">
                    <i className="ri-account-pin-circle-fill"></i>
                    <p className="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div className="category">
                    <div className="ds-f ai-c">
                      <i className="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div>
              <div className="swiper-slide slide3 po-r">
                <div className="inner">
                  <div className="profile_img">
                    <img src="images/main/profile_img3.png" alt="profile" />
                  </div>
                  <div className="ds-f ai-c name">
                    <i className="ri-account-pin-circle-fill"></i>
                    <p className="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div className="category">
                    <div className="ds-f ai-c">
                      <i className="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div>
              <div className="swiper-slide slide1 po-r">
                <div className="inner">
                  <div className="profile_img">
                    <img src="images/main/profile_img1.png" alt="profile" />
                  </div>
                  <div className="ds-f ai-c name">
                    <i className="ri-account-pin-circle-fill"></i>
                    <p className="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div className="category">
                    <div className="ds-f ai-c">
                      <i className="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div>
              <div className="swiper-slide slide2 po-r">
                <div className="inner">
                  <div className="profile_img">
                    <img src="images/main/profile_img2.png" alt="profile" />
                  </div>
                  <div className="ds-f ai-c name">
                    <i className="ri-account-pin-circle-fill"></i>
                    <p className="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div className="category">
                    <div className="ds-f ai-c">
                      <i className="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div>
              <div className="swiper-slide slide3 po-r">
                <div className="inner">
                  <div className="profile_img">
                    <img src="images/main/profile_img3.png" alt="profile" />
                  </div>
                  <div className="ds-f ai-c name">
                    <i className="ri-account-pin-circle-fill"></i>
                    <p className="fw-m">홍길동 손해사정사</p>
                  </div>
                  <h3>암진단 보험 사정사례</h3>
                  <p>
                    군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등
                    직무집행과 관련하여...
                  </p>
                  <div className="category">
                    <div className="ds-f ai-c">
                      <i className="ri-check-fill"></i>
                      <p>진단비(뇌, 심장, 암)</p>
                    </div>
                  </div>
                </div>
                <a href="#"></a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recommendations;

function findNameByKey(catValue) {
  // keywordList에서 catValue와 일치하는 cat 값을 가진 객체를 찾습니다.
  const matchingKeyword = keywordList.find(
    (keyword) => keyword.cat === catValue
  );

  // 일치하는 객체가 있으면 그 객체의 name 값을 반환합니다.
  return matchingKeyword ? matchingKeyword.name : undefined;
}

function findNameByCat(catValue) {
  const item = categoryList?.find((item) => item.cat === catValue);
  return item ? item.name : "해당하는 카테고리가 없습니다.";
}