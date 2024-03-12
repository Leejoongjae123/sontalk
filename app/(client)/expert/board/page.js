"use client";
import React from "react";
import Title from "./components/Title";
import axios from "axios";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase/client";
import categoryList from "@/components/categoryList";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Phone from './components/Phone'

export default function ExpertBoard() {
  const searchParams = useSearchParams();
  const search = searchParams.get("cat");
  const page = searchParams.get("page");

  const [experts, setExperts] = useState([]);
  const fetchData = async () => {
    if (search.includes("R")) {
      let { data: introduction, error } = await supabase
        .from("introduction")
        .select("*,queryAnswer(*)")
        .eq("region", search);
      setExperts(introduction);
    } else {
      let { data: introduction, error } = await supabase
        .from("introduction")
        .select("*,queryAnswer(*)")
        // field1이 search와 같거나, field2가 search와 같거나, field3가 search와 같은 조건
        .or(`field1.eq.${search},field2.eq.${search},field3.eq.${search}`);
      setExperts(introduction);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const router = useRouter();

  const navigateToBooking = (expertNo) => {
    router.push(`/booking?expertNo=${expertNo}`);
  };

  
  const handleClick=(e, phoneNumber) =>{
    // 사용자의 환경이 모바일이 아닌 경우
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      e.preventDefault() // 기본 동작 방지
      // 전화번호 복사, 모달 표시, 또는 다른 동작을 수행
      alert(`전화번호 : ${phoneNumber}`)
    }
    // 모바일 사용자의 경우, 기본적인 tel: 링크 동작 수행
  }


  return (
    <div className="body">
      <div className="expert_board_wrap">
        <div className="bh_wrap">
          <Title></Title>
          <div className="board_wrap">
            {experts &&
              experts.map((elem, index) => {
                return (
                  <div className="item item1">
                    <div className="item_inner po-r">
                      <div className="bh_row no-gutters jc-b">
                        <div className="col-lg-auto col-12">
                          <div className="profile">
                            <div className="ds-f bh-flex-flex-wrap ai-c">
                              {/* <div className="img_box" style={{width:"10vw",height:'auto'}}> */}
                              <div className="img_box">
                                <img className="responsive-img2" src={elem.imageUrl} alt="img" />
                              </div>
                              <div className="txt_box">
                                <h3>
                                  <a href={`/expert/board/${elem.expertNo}`}>
                                    손TOP {findNameByCat(elem.region)}
                                  </a>
                                </h3>
                                <div className="ds-f ai-c name">
                                  <i className="ri-account-pin-circle-fill"></i>
                                  <p className="fw-m">{elem.name} 손해사정사</p>
                                </div>
                                <div className="category">
                                  <div className="ds-f">
                                    {elem.field1 ? (
                                      <p>{findNameByCat(elem.field1)}</p>
                                    ) : (
                                      <></>
                                    )}
                                    {elem.field2 ? (
                                      <p>{findNameByCat(elem.field2)}</p>
                                    ) : (
                                      <></>
                                    )}
                                    {elem.field3 ? (
                                      <p>{findNameByCat(elem.field3)}</p>
                                    ) : (
                                      <></>
                                    )}
                                  </div>
                                </div>
                                <div class="hash">
                                  <div class="ds-f">
                                    {elem.character.map((elem,index) => {
                                      return <p>#{elem}</p>
                                    })}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-auto col-12">
                          <div className="info">
                            <div className="star ">
                              {/* <div className="ds-f ai-c jc-b">
                            <p>별점</p>
                            <div className="ds-f">
                              <img src="images/icon/star-fill.png" alt="star" />
                              <img src="images/icon/star-fill.png" alt="star" />
                              <img src="images/icon/star-fill.png" alt="star" />
                              <img src="images/icon/star-fill.png" alt="star" />
                              <img src="images/icon/star-line.png" alt="star" />
                            </div>
                          </div> */}
                            </div>
                            <div className="review mb-10">
                              <div className="ds-f ai-c jc-b">
                                <p>상담 답변</p>
                                <span>{elem.queryAnswer.length} 건</span>
                              </div>
                            </div>
                            <div className="phone mb-10">
                              {/* <a
                                href={`tel:${elem.phoneNumber}`}
                                className="ds-b"
                                // onClick={(e)=>{handleClick(e,elem.phoneNumber)}}
                              >
                                <div className="ds-f ai-c jc-b">
                                  <p>
                                    <i className="ri-phone-fill"></i>30분
                                    전화상담
                                  </p>
                                </div>
                              </a> */}
                              <Phone elem={elem}></Phone>
                            </div>
                            <div className="reservation">
                              <a
                                onClick={() => navigateToBooking(elem.expertNo)}
                                className="ds-b"
                              >
                                <div className="ds-f ai-c jc-b">
                                  <p>
                                    <i className="ri-home-4-fill"></i>상담 예약
                                  </p>
                                  <span>바로가기</span>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="pagination" style={{ fontSize: "1.5rem" }}>
            <div className="bh_row no-gutters jc-c">
              <div className="prve_btn">
                <div className="ds-f">
                  <a href="#" className="ds-b direction">
                    <i className="ri-arrow-left-double-line"></i>
                  </a>
                  <a href="#" className="ds-b direction">
                    <i className="ri-arrow-left-s-line"></i>
                  </a>
                </div>
              </div>
              <div className="page_no_wrap">
                <a href="#" className="ds-b direction active">
                  1
                </a>
              </div>
              <div className="next_btn">
                <div className="ds-f">
                  <a href="#" className="ds-b direction">
                    <i className="ri-arrow-right-s-line"></i>
                  </a>
                  <a href="#" className="ds-b direction">
                    <i className="ri-arrow-right-double-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function findNameByCat(catValue) {
  const item = categoryList.find((item) => item.cat === catValue);
  return item ? item.name : "해당하는 카테고리가 없습니다.";
}
