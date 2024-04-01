import React from "react";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { useRouter } from "next/navigation";
import PrevHistory from "./components/PrevHistory";
import QueryAnswer from "./components/QueryAnswer";
import Talk from "./components/Talk";
import Phone from './components/Phone'
export default async function page({ params }) {
  const cookieStore = cookies();
  const expertNo = params.expertNo;
  const supabase = createClient(cookieStore);

  let { data: profiles, error1 } = await supabase
    .from("profiles")
    .select("*")
    .eq("expertNo", expertNo.toString())
    .single()

  return (
    <div className="body">
      <div className="expert_detail">
        <div className="bh_wrap">
          <div className="bh_row no-gutters">
            <div className="col-lg col-12">
              <div className="info_area">
                <div className="detail_title">
                  <h3>{profiles.description}</h3>
                </div>
                
                <div className="option1">
                  <div className="ds-f ai-c name">
                    {/* <i className="ri-account-pin-circle-fill fw-l"></i> */}
                    <p className="fw-b ml-5">경력</p>
                  </div>
                  <div className="bh_row gutters-5">
                    <ul>
                      {profiles.career.split(",").map((elem, index) => {
                        return (
                          <li
                            key={index}
                            className="listItem"
                            style={{ fontSize: "16px" }}
                          >
                            {elem}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <PrevHistory expertNo={expertNo}></PrevHistory>
                <QueryAnswer expertNo={expertNo}></QueryAnswer>
                <Talk expertNo={expertNo}></Talk>
              </div>
            </div>
            <div className="col-lg-auto col-12">
              <div className="right_area">
                <div className="img_box po-r" style={{display:"flex"}}>
                  <img className="responsive-img"  src={profiles.imageUrl} alt="img" />
                  {/* <div className="profile">
                    <p>손TOP 서울 강남구</p>
                    <div className="ds-f ai-c name">
                      <i className="ri-account-pin-circle-fill fw-l"></i>
                      <p className="fw-m">홍길동 손해사정사</p>
                    </div>
                  </div> */}
                </div>
                <div>
                  <p className="fw-b ml-5" style={{fontSize:"24px",textAlign:'center',margin:"1rem 0 1rem 0"}}>{profiles.name} 손해사정사</p>
                </div>

                {/* <a href="#" className="ds-b mb-10 ta-c">
                  <i className="ri-phone-fill"></i>전화 상담
                </a> */}
                <Phone profiles={profiles}></Phone>
                <a href={`/booking?expertNo=${expertNo}`} className="ds-b ta-c">
                  <i className="ri-home-4-fill"></i>상담 예약
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
