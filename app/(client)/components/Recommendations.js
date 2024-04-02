"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect, useState } from "react";
import AOS from "aos";
import { supabase } from "@/utils/supabase/client";
import keywordList from "@/components/keywordList";
import categoryList from "@/components/categoryList";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Recommendations() {
  const [talks, setTalks] = useState([]);
  const router = useRouter();
  const fetchData = async () => {
    let { data: talk, error } = await supabase
      .from("talk")
      // .select("*")
      .select("*,expertNo(*)")
      .order("count", { ascending: false })
      .range(0, 5);
    setTalks(talk);
  };

  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
    fetchData();
    const handlePopState = () => {
      // 여기에 페이지가 변경될 때 실행하고 싶은 코드를 작성하세요.
      console.log("Location changed!");
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const handleCardClick = (elem) => {
    router.push(`/talk/${elem.talkNo}`);
  };
  
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
              {talks &&
                talks.map((elem, index) => {
                  return (
                    <div className="swiper-slide slide1 po-r" onClick={()=>{handleCardClick(elem)}}>
                        <div className="inner">
                          <div
                            className="profile_img"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <img
                              className="responsive-img3"
                              src={elem.expertNo.imageUrl}
                              alt="profile"
                            />
                          </div>
                          <div className="ds-f ai-c name">
                            <i className="ri-account-pin-circle-fill"></i>
                            <p className="fw-m">
                            손TOP {elem.expertNo.branch} {elem.expertNo.name} 손해사정사
                            </p>
                          </div>
                          <h3
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 2,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "normal", // 'pre-wrap' 대신 'normal'을 사용합니다.
                              lineHeight: "1.5", // 줄 높이를 설정하여 텍스트 줄 수를 조절합니다.
                              minHeight: "3em", // 최대 높이를 (줄 높이 * 줄 수)로 설정합니다.
                            }}
                          >
                            {elem.title}
                          </h3>{" "}
                          <p
                            style={{
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 3,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "normal", // 'pre-wrap' 대신 'normal'을 사용합니다.
                              lineHeight: "1.5", // 줄 높이를 설정하여 텍스트 줄 수를 조절합니다.
                              minHeight: "4.5em", // 최대 높이를 (줄 높이 * 줄 수)로 설정합니다.
                            }}
                          >
                            {/* {elem.description} */}
                            <div dangerouslySetInnerHTML={createMarkup(elem.description)}></div>
                          </p>
                          <div className="category">
                            <div className="ds-f ai-c">
                              <i className="ri-check-fill"></i>
                              <p>{findNameByCat(elem.field1)}</p>
                            </div>
                          </div>
                        </div>

                    </div>
                  );
                })}
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

function createMarkup(description) {
  // img 태그를 찾아서 제거하는 정규식
  const cleanedDescription = description.replace(/<img[^>]*>/g, "");
  return { __html: cleanedDescription };
}