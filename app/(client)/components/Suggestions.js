"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect, useState } from "react";
import AOS from "aos";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase/client";
import keywordList from "@/components/keywordList";
import Link from 'next/link'
export default function Suggestions() {
  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    let { data: query, error } = await supabase
      .from("query")
      .select("*,queryAnswer(*,profiles(*))")
      .order("count", { ascending: false })
      .range(0, 5)
      .eq("secret", "false");

    setQuestions(query);
  };

  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
    fetchData();
  }, []);

  const [activeTab, setActiveTab] = useState("tab-01");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const [isOptionVisible, setOptionVisible] = useState({
    rw1: false,
    rw2: false,
    // 추가적인 옵션 상태 관리가 필요하다면 여기에 추가
  });

  const showOption = (optionId) => {
    setOptionVisible({ ...isOptionVisible, [optionId]: true });
  };

  const router = useRouter();

  // 버튼 클릭 이벤트 핸들러: catId를 쿼리 파라미터로 추가하여 페이지 이동
  const navigateToBoard = (catId) => {
    router.push(`/expert/board?cat=${catId}&page=1`);
  };

  console.log(questions);

  return (
    <section className="section section2 po-r">
      <div className="sec2_content">
        <div className="cont1" data-aos="fade-up" data-aos-duration="1000">
          <div className="bh_wrap">
            <div className="title">
              <h3 className="fw-b">
                내게 맞는 <em>전문가</em> 찾기
              </h3>
              <p>내게 맞는 전문가를 빠르고 간편하게 찾아보세요.</p>
            </div>
            <div className="tab_area">
              <div className="tab_menu">
                <div className="bh_row">
                  <div className="col-lg-6 col-12 m-mb-20">
                    <div
                      className={`ds-f ai-c ${
                        activeTab === "tab-01" ? "on" : ""
                      }`}
                      onClick={() => handleTabClick("tab-01")}
                      data-tab="tab-01"
                    >
                      <p className="po-r">
                        <i className="ri-file-list-3-line"></i>분야로 찾기
                        <i className="ri-check-fill check"></i>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div
                      className={`ds-f ai-c ${
                        activeTab === "tab-02" ? "on" : ""
                      }`}
                      onClick={() => handleTabClick("tab-02")}
                      data-tab="tab-02"
                    >
                      <p className="po-r">
                        <i className="ri-map-pin-line"></i>지역으로 찾기
                        <i className="ri-check-fill check"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab_in tab-01 ${
                  activeTab === "tab-01" ? "on" : ""
                }`}
              >
                <div className="option">
                  <div
                    className={`bh_row rw1 ${
                      isOptionVisible.rw1 ? "" : "none"
                    }`}
                  >
                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("F01")}
                          className="ds-b po-r"
                        >
                          <img src="images/icon/sec2_icon1.png" alt="icon" />
                          <p>
                            진단비
                            <br />
                            (뇌, 심장, 암)
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("F02")}
                          className="ds-b po-r"
                        >
                          <img src="images/icon/sec2_icon2.png" alt="icon" />
                          <p>
                            암 입원비 /<br />
                            실손 의료비
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("F03")}
                          className="ds-b po-r"
                        >
                          <img src="images/icon/sec2_icon3.png" alt="icon" />
                          <p>
                            질병·상해 사망 및<br />
                            후유장해
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("F04")}
                          className="ds-b po-r"
                        >
                          <img src="images/icon/sec2_icon4.png" alt="icon" />
                          <p>치아 보험</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("F05")}
                          className="ds-b po-r"
                        >
                          <img src="images/icon/sec2_icon5.png" alt="icon" />
                          <p>
                            자동차보험,
                            <br />
                            운전자보험
                          </p>
                        </a>
                      </div>
                    </div>
                    {isOptionVisible.rw1 ? (
                      <></>
                    ) : (
                      <div className="col-lg-2 col-6">
                        <div
                          className="inner in2 ta-c"
                          onClick={() => showOption("rw1")}
                          data-rw="rw1"
                        >
                          <button className="ds-b">더보기+</button>
                        </div>
                      </div>
                    )}

                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("F06")}
                          className="ds-b po-r"
                        >
                          <img src="images/icon/sec2_icon6.png" alt="icon" />
                          <p>
                            배상 책임, 근로자재해보험, 학교안전공제, 여행자보험
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("F07")}
                          className="ds-b po-r"
                        >
                          <img src="images/icon/sec2_icon7.png" alt="icon" />
                          <p>도난, 화재, 누수, 침수 재난사고</p>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("F08")}
                          className="ds-b po-r"
                        >
                          <img src="images/icon/sec2_icon8.png" alt="icon" />
                          <p>
                            여선전용 및<br />
                            태아
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`tab_in tab-02 ${
                  activeTab === "tab-02" ? "on" : ""
                }`}
              >
                <div className="option op2">
                  <div
                    className={`bh_row rw2 ${
                      isOptionVisible.rw2 ? "" : "none"
                    }`}
                  >
                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("R08")}
                          className="ds-f po-r ai-c jc-c"
                        >
                          <div className="txt_box">
                            <i className="ri-map-pin-line"></i>
                            <p>수도권</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("R07")}
                          className="ds-f po-r ai-c jc-c"
                        >
                          <div className="txt_box">
                            <i className="ri-map-pin-line"></i>
                            <p>원주/강릉/강원</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("R06")}
                          className="ds-f po-r ai-c jc-c"
                        >
                          <div className="txt_box">
                            <i className="ri-map-pin-line"></i>
                            <p>청주/충북</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("R01")}
                          className="ds-f po-r ai-c jc-c"
                        >
                          <div className="txt_box">
                            <i className="ri-map-pin-line"></i>
                            <p>대전/세종/충남</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("R04")}
                          className="ds-f po-r ai-c jc-c"
                        >
                          <div className="txt_box">
                            <i className="ri-map-pin-line"></i>
                            <p>대구/경북</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    {isOptionVisible.rw2 ? (
                      <></>
                    ) : (
                      <div className="col-lg-2 col-6">
                        <div
                          className="inner in2 ta-c"
                          onClick={() => showOption("rw2")}
                          data-rw="rw2"
                        >
                          <button className="ds-b">더보기+</button>
                        </div>
                      </div>
                    )}

                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("R05")}
                          className="ds-f po-r ai-c jc-c"
                        >
                          <div className="txt_box">
                            <i className="ri-map-pin-line"></i>
                            <p>전주/전북</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("R03")}
                          className="ds-f po-r ai-c jc-c"
                        >
                          <div className="txt_box">
                            <i className="ri-map-pin-line"></i>
                            <p>부산/울산/경남</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("R09")}
                          className="ds-f po-r ai-c jc-c"
                        >
                          <div className="txt_box">
                            <i className="ri-map-pin-line"></i>
                            <p>광주/전남</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-2 col-6">
                      <div className="inner ta-c">
                        <a
                          onClick={() => navigateToBoard("R02")}
                          className="ds-f po-r ai-c jc-c"
                        >
                          <div className="txt_box">
                            <i className="ri-map-pin-line"></i>
                            <p>제주</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cont2">
          <div className="ml-bh_wrap">
            <div className="bh_row no-gutters">
              <div className="col-lg-auto col-12">
                <div className="txt_box">
                  <h3>간편상담</h3>
                  <p>
                    나와 비슷한 문제의 답변을 찾아보거나,
                    <br />
                    직접 상담글을 작성하여
                    <br />
                    답변을 받아볼 수 있어요.
                  </p>
                  <div className="effect_btn w_ver">
                    <a href="/counsel/inquiry" className="ds-f ai-c">
                      <span>바로가기</span>
                      <i className="ri-arrow-right-line"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg col-12 po-r">
                <div className="nav">
                  <div className="bh_wrap">
                    <div className="ds-f ai-c">
                      <div className="swiper-button-prev">
                        <i className="ri-arrow-left-s-line"></i>
                      </div>
                      <div className="line"></div>
                      <div className="swiper-button-next">
                        <i className="ri-arrow-right-s-line"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper simple_slide">
                  <div className="swiper-wrapper">
                    {questions &&
                      questions.map((elem, index) => {
                        return (
                          <div className="swiper-slide slide1 po-r">
                            <div className="inner">
                              <div className="ds-f category">
                                {/* <span className="ds-b">#의료보험</span> */}
                                {elem.field1 ? (
                                  <span className="'ds-b">
                                    #{findNameByCat(elem.field1)}
                                  </span>
                                ) : (
                                  <></>
                                )}
                                {elem.field2 ? (
                                  <span className="'ds-b">
                                    #{findNameByCat(elem.field2)}
                                  </span>
                                ) : (
                                  <></>
                                )}
                                {elem.field3 ? (
                                  <span className="'ds-b">
                                    #{findNameByCat(elem.field3)}
                                  </span>
                                ) : (
                                  <></>
                                )}
                                {/* <span className="ds-b">#의료보험</span> */}
                                {/* <span className="ds-b">#의료보험</span> */}
                              </div>
                              <div className="title">
                                <Link
                                  href={`/counsel/${elem.questionNo.toString()}`}
                                >
                                  {elem.title}
                                </Link>
                              </div>
                              <div className="content">{elem.description}</div>
                              <div className="bh_row no-gutters info jc-b">
                                <p>
                                  전문가 답변{" "}
                                  <b className="fw-b">
                                    {" "}
                                    {elem.queryAnswer.length
                                      ? elem.queryAnswer.length
                                      : "0"}
                                  </b>
                                  건
                                </p>
                                <div className="ds-f">
                                  <span className="ds-b">
                                    조회수 {elem.count}
                                  </span>
                                  <span className="ds-b">
                                    {daysAgoFormatted(elem.created_at)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}

                    {/* <div className="swiper-slide slide2 po-r">
                      <div className="inner">
                        <div className="ds-f category">
                          <span className="ds-b">#의료보험</span>
                          <span className="ds-b">#의료보험</span>
                          <span className="ds-b">#의료보험</span>
                        </div>
                        <div className="title">
                          임플란트의 의료보험 적용여부
                        </div>
                        <div className="content">
                          어릴 적부터 만성 천식을 앓고 있어 주기적으로 병원에서
                          진료를 받습니다. 그런데 동일한 질병에 대해 진료를 볼
                          시…
                        </div>
                        <div className="bh_row no-gutters info jc-b">
                          <p>
                            전문가 답변 <b className="fw-b">6</b>건
                          </p>
                          <div className="ds-f">
                            <span className="ds-b">조회수 326</span>
                            <span className="ds-b">2024.01.10</span>
                          </div>
                        </div>
                      </div>
                      <a href="#"></a>
                    </div>
                    <div className="swiper-slide slide3 po-r">
                      <div className="inner">
                        <div className="ds-f category">
                          <span className="ds-b">#의료보험</span>
                          <span className="ds-b">#의료보험</span>
                          <span className="ds-b">#의료보험</span>
                        </div>
                        <div className="title">
                          임플란트의 의료보험 적용여부
                        </div>
                        <div className="content">
                          어릴 적부터 만성 천식을 앓고 있어 주기적으로 병원에서
                          진료를 받습니다. 그런데 동일한 질병에 대해 진료를 볼
                          시…
                        </div>
                        <div className="bh_row no-gutters info jc-b">
                          <p>
                            전문가 답변 <b className="fw-b">6</b>건
                          </p>
                          <div className="ds-f">
                            <span className="ds-b">조회수 326</span>
                            <span className="ds-b">2024.01.10</span>
                          </div>
                        </div>
                      </div>
                      <a href="#"></a>
                    </div>
                    <div className="swiper-slide slide1 po-r">
                      <div className="inner">
                        <div className="ds-f category">
                          <span className="ds-b">#의료보험</span>
                          <span className="ds-b">#의료보험</span>
                          <span className="ds-b">#의료보험</span>
                        </div>
                        <div className="title">
                          임플란트의 의료보험 적용여부
                        </div>
                        <div className="content">
                          어릴 적부터 만성 천식을 앓고 있어 주기적으로 병원에서
                          진료를 받습니다. 그런데 동일한 질병에 대해 진료를 볼
                          시…
                        </div>
                        <div className="bh_row no-gutters info jc-b">
                          <p>
                            전문가 답변 <b className="fw-b">6</b>건
                          </p>
                          <div className="ds-f">
                            <span className="ds-b">조회수 326</span>
                            <span className="ds-b">2024.01.10</span>
                          </div>
                        </div>
                      </div>
                      <a href="#"></a>
                    </div>
                    <div className="swiper-slide slide2 po-r">
                      <div className="inner">
                        <div className="ds-f category">
                          <span className="ds-b">#의료보험</span>
                          <span className="ds-b">#의료보험</span>
                          <span className="ds-b">#의료보험</span>
                        </div>
                        <div className="title">
                          임플란트의 의료보험 적용여부
                        </div>
                        <div className="content">
                          어릴 적부터 만성 천식을 앓고 있어 주기적으로 병원에서
                          진료를 받습니다. 그런데 동일한 질병에 대해 진료를 볼
                          시…
                        </div>
                        <div className="bh_row no-gutters info jc-b">
                          <p>
                            전문가 답변 <b className="fw-b">6</b>건
                          </p>
                          <div className="ds-f">
                            <span className="ds-b">조회수 326</span>
                            <span className="ds-b">2024.01.10</span>
                          </div>
                        </div>
                      </div>
                      <a href="#"></a>
                    </div>
                    <div className="swiper-slide slide3 po-r">
                      <div className="inner">
                        <div className="ds-f category">
                          <span className="ds-b">#의료보험</span>
                          <span className="ds-b">#의료보험</span>
                          <span className="ds-b">#의료보험</span>
                        </div>
                        <div className="title">
                          임플란트의 의료보험 적용여부
                        </div>
                        <div className="content">
                          어릴 적부터 만성 천식을 앓고 있어 주기적으로 병원에서
                          진료를 받습니다. 그런데 동일한 질병에 대해 진료를 볼
                          시…
                        </div>
                        <div className="bh_row no-gutters info jc-b">
                          <p>
                            전문가 답변 <b className="fw-b">6</b>건
                          </p>
                          <div className="ds-f">
                            <span className="ds-b">조회수 326</span>
                            <span className="ds-b">2024.01.10</span>
                          </div>
                        </div>
                      </div>
                      <a href="#"></a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function findNameByCat(catValue) {
  // keywordList에서 catValue와 일치하는 cat 값을 가진 객체를 찾습니다.
  const matchingKeyword = keywordList.find(
    (keyword) => keyword.cat === catValue
  );

  // 일치하는 객체가 있으면 그 객체의 name 값을 반환합니다.
  return matchingKeyword ? matchingKeyword.name : undefined;
}

function daysAgoFormatted(dateString) {
  // 주어진 날짜를 Date 객체로 파싱
  const givenDate = new Date(dateString);
  // 현재 날짜와 시간
  const currentDate = new Date();

  // 두 날짜의 차이를 밀리초로 계산
  const differenceInTime = currentDate.getTime() - givenDate.getTime();

  // 밀리초를 일 단위로 변환
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  // 차이가 0일이면 "오늘 작성", 그렇지 않으면 "X일 전 작성" 반환
  if (differenceInDays === 0) {
    return "오늘 작성";
  } else {
    return `${differenceInDays}일 전 작성`;
  }
}
