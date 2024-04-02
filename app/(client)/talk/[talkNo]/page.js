import React from "react";
import Link from 'next/link'
import { headers, cookies } from "next/headers";
import keywordList from "@/components/keywordList";
import categoryList from "@/components/categoryList";
import { createClient } from "@/utils/supabase/server";


export default async function page({params}) {

  const cookieStore = cookies();
  const talkNo = params.talkNo;
  const supabase = createClient(cookieStore);
  let { data: talk, error } = await supabase
    .from("talk")
    .select("*,profiles(*)")
    .eq("talkNo", talkNo.toString())  
  

  console.log(talk)
  
  const currentClick=talk[0].count
  // console.log(currentClick)

  
  const { data, updateError } = await supabase
  .from('talk')
  .update({ 'count': currentClick+1})
  .eq('talkNo',talkNo.toString())
  .select()
        
  // console.log(data,updateError)


  return (
    <div className="body">
      <div className="talk_detail">
        <div className="title_area">
          <div className="bh_wrap w-100">
            <div className="bh_row no-gutters jc-b mb-20">
              <div className="col-auto">
                <div className="category">
                  <div className="ds-f ai-c">
                    <i className="ri-check-line"></i>
                    <p>{findNameByCat(talk[0].field1)}</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-auto">
                <div className="tool_box">
                  <div className="ds-f">
                    <a href="#" className="ds-b">
                      <i className="ri-heart-3-line"></i>
                    </a>
                    <a href="#" className="ds-b">
                      <i className="ri-share-line"></i>
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="title">
              {talk[0].title}
            </div>
            <div className="bh_row no-gutters jc-b ai-c">
              <div className="col-auto">
                <div className="ds-f ai-c name">
                  <i className="ri-account-pin-circle-fill fw-l"></i>
                  <p className="fw-m">손TOP {talk[0].profiles.branch} {talk[0].profiles.name} 손해사정사</p>
                </div>
              </div>
              <div className="col-auto">
                <div className="date">
                  <div className="ds-f">
                    <span>조회수 {talk[0].count}</span>
                    <span>{formatDate(talk[0].created_at)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bh_wrap">
          <div className="content" style={{fontSize:"16px",whiteSpace:'pre-wrap'}} dangerouslySetInnerHTML={{ __html: talk[0].description }}>
            {/* {talk[0].description} */}
          </div>
          <div className="content_tool_box">
            <div className="bh_row no-gutters jc-b ai-c">
              <div className="col-lg-auto col-12">
                <div className="date">
                  <div className="ds-f">
                    <span>조회수 {talk[0].count}</span>
                    <span>{formatDate(talk[0].created_at)}</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-auto col-12">
                <div className="tools">
                  <div className="bh_row gutters-5">
                    <div className="col-auto">
                      <a href="#" className="ds-b">
                        <div className="ds-f ai-c">
                          <i className="ri-share-line"></i>
                          <p>공유하기</p>
                        </div>
                      </a>
                    </div>
                    <div className="col-auto">
                      <Link href="/talk" className="ds-b">
                        <div className="ds-f ai-c">
                          <i className="ri-list-check"></i>
                          <p>목록</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment_area">
            <div className="comment_box">
              <div className="info_box">
                <div className="bh_row no-gutters ai-c jc-b">
                  <div className="col-lg-auto col-12">
                    <div className="profile">
                      <div className="ds-f ai-c">
                        <div className="img_box">
                          <img style={{borderRadius:"100%"}}src={talk[0]?.profiles?.imageUrl} alt="img" />
                        </div>
                        <div className="txt_box">
                          <h3>손TOP {talk[0].profiles.branch}</h3>
                          <p>{talk[0]?.profiles?.name} 손해사정사</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-auto col-12">
                    <div className="ds-f bh-flex-flex-wrap">
                      {/* <div className="other_btn">
                        <a href="#" className="ds-b">
                          전문가의 다른 손사 Talk 보기 <b>25건</b>
                        </a>
                      </div> */}
                      <div className="other_btn type2">
                        <Link href={`/booking?expertNo=${talk[0].expertNo}`} className="ds-b">
                          <b style={{color:"white"}}>상담 예약</b>
                        </Link>
                      </div>
                    </div>
                  </div>
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
  const item = categoryList?.find((item) => item.cat === catValue);
  return item ? item.name : "해당하는 카테고리가 없습니다.";
}

function findNameByKey(catValue) {
  // keywordList에서 catValue와 일치하는 cat 값을 가진 객체를 찾습니다.
  const matchingKeyword = keywordList.find(
    (keyword) => keyword.cat === catValue
  );

  // 일치하는 객체가 있으면 그 객체의 name 값을 반환합니다.
  return matchingKeyword ? matchingKeyword.name : undefined;
}

function formatDate(dateString) {
  // 주어진 날짜를 Date 객체로 파싱
  const givenDate = new Date(dateString);

  // 연, 월, 일을 각각 추출
  const year = givenDate.getFullYear();
  const month = (givenDate.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 1을 더하고, 두 자리수로 맞춤
  const day = givenDate.getDate().toString().padStart(2, "0"); // 일자를 두 자리수로 맞춤

  // "XXXX.XX.XX" 형식으로 반환
  return `${year}.${month}.${day}`;
}