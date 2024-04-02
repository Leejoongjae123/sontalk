"use client";
import "aos/dist/aos.css"; // AOS 스타일 시트 임포트
import React, { useEffect, useState,useRef } from "react";
import { supabase } from "@/utils/supabase/client";
import AOS from "aos";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import moment from 'moment';
import Divider from '@mui/material/Divider';
import categoryList from "@/components/categoryList";
import keywordList from "@/components/keywordList";
import { useSearchParams } from 'next/navigation'


export default function SearchBar() {
  useEffect(() => {
    // AOS 초기화
    AOS.init({
      // AOS 옵션 설정
      duration: 1500, // 전역 기본 지속 시간 설정
      once: true, // 스크롤 다운시 애니메이션 한 번만 실행
    });
  }, []);

  const searchParams=useSearchParams()

  const router = useRouter();
  const [history, setHistory] = useState([]);
  const [query, setQuery] = useState([])
  const [debouncedKeyword, setDebouncedKeyword] = useState('');
  const [talks, setTalks] = useState([]);
  const [keyword, setKeyword] = useState(searchParams.get("keyword"));
  
  const debounceTimer = useRef();

  const fetchData = async () => {
    let { data: prevProject, error1 } = await supabase
      .from("prevProject")
      .select("*,expertNo(*)")
      // .like("result", "%" + keyword + "%")
      .or(`result.ilike.%${keyword}%,description.ilike.%${keyword}%`)
      .range(0, 3);
    setHistory(prevProject);
    
    let { data: query, error2 } = await supabase
    .from("query")
    .select("*")
    .or(`title.ilike.%${keyword}%,description.ilike.%${keyword}%`)
    .range(0,1)
    setQuery(query)

    let {
      data: talk,
      error3
    } = await supabase
      .from("talk")
      .select("*,expertNo(*)")
      .or(`title.ilike.%${keyword}%,description.ilike.%${keyword}%`)
      .range(0,1)
      .order('count',{ ascending: false })
    setTalks(talk)

  };
  useEffect(() => {
    fetchData();    
  }, [debouncedKeyword]);




  // useEffect(()=>{
  //   setKeyword(searchParams.get("keyword"))
  //   fetchData()
  // },[])



  useEffect(() => {
    // 기존의 타이머를 초기화합니다.
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // 타이머를 설정하여 사용자가 입력을 멈춘 후 1초가 지나면 상태를 업데이트합니다.
    debounceTimer.current = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 1000);

    // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    return () => {
      clearTimeout(debounceTimer.current);
    };
  }, [keyword]); // keyword가 변경될 때마다 이 useEffect가 실행됩니다.



  const handleCardClick1 = (elem) => {
    router.push(`/expert/board/${elem.expertNo.expertNo}`);
  };
  const handleCardClick2 = (elem) => {
    router.push(`/counsel/${elem.questionNo}`);
  };
  const handleCardClick3 = (elem) => {
    router.push(`/talk/${elem.talkNo}`);
  };

  return (
    <section className="section section1">
      <div className="bh_wrap">
        <div className="title" data-aos="fade-down" data-aos-duration="1000">
          <div className="ds-f ai-c jc-c">
            <img src="images/main/sec1_img.png" alt="img" />
            <h3 className="fw-b">
              어떤 <em>보험청구</em>를 준비하고 계시나요?(예 : 자동차보험,
              진단비)
            </h3>
          </div>
        </div>
        <div className="search_area">
          <div className="ds-f jc-c">
            <input
              type="text"
              placeholder="궁금한 단어를 입력해주세요! 예) 백내장, 줄기세포 등"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="button">
              <i className="ri-search-line"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="talk_board_wrap">
          <div className="bh_wrap">
            <div className="board_wrap">
              <h1
                style={{
                  fontSize: "32px",
                  textAlign: "left",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                선임사례
              </h1>
              <div className="bh_row">
                {history.map((elem, index) => {
                  return (
                    <div className="col-lg-6 col-12 mb-30 m-mb-20" onClick={()=>{handleCardClick1(elem)}}>
                      <div className="item item1 po-r">
                        <div className="item_inner">
                          <div className="ds-f ai-c name">
                            <i className="ri-account-pin-circle-fill fw-l"></i>
                            <p className="fw-m">손TOP {elem.expertNo.branch} {elem.expertNo.name} 손해사정사</p>
                          </div>
                          <div className="title">{elem.description}</div>
                          <div className="content ellipsis">
                            <div>{elem.result}</div>
                          </div>
                          <div className="keyword"></div>
                          <div className="info">
                            <div className="ds-f ai-c jc-b bh-flex-flex-wrap">
                              <div className="category">
                                <div className="ds-f ai-c">
                                  <i className="ri-check-line"></i>
                                  <p>{elem.category}</p>
                                </div>
                              </div>
                              <div className="date">
                                <div className="ds-f">
                                  
                                  <span>{moment(elem.regiDate).format('YYYY년M월D일')}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <a href="talk_detail.html"></a> */}
                        <Link href={"/talk"}></Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div style={{margin:"2vw"}}>
            <Divider sx={{borderBottomWidth:3}}></Divider>
            </div>
            
            <div className="board_wrap">
              <h1
                style={{
                  fontSize: "32px",
                  textAlign: "left",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                간편상담
              </h1>
              <div className="bh_row">
                {query&&query.map((elem, index) => {
                  return (
                    <div className="col-lg-6 col-12 mb-30 m-mb-20" onClick={()=>{handleCardClick2(elem)}}>
                      <div className="item item1 po-r">
                        <div className="item_inner">
                          <div className="ds-f ai-c name">
                            {/* <i className="ri-account-pin-circle-fill fw-l"></i> */}
                            <p className="fw-m">{maskMiddleName(elem.name)} 회원님</p>
                          </div>
                          <div className="title">{elem.title}</div>
                          <div className="content ellipsis">
                            <div >{elem.description}</div>
                          </div>
                          <div className="keyword"></div>
                          <div className="info">
                            <div className="ds-f ai-c jc-b bh-flex-flex-wrap">
                              <div className="category">
                                <div className="ds-f ai-c">
                                  <i className="ri-check-line"></i>
                                  <p>{findNameByKey(elem.field1)}</p>
                                </div>
                              </div>
                              <div className="date">
                                <div className="ds-f">
                                <span>조회수 {elem.count}</span>
                                  <span>{moment(elem.regiDate).format('YYYY년M월D일')}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div style={{margin:"2vw"}}>
            <Divider sx={{borderBottomWidth:3}}></Divider>
            </div>

            <div className="board_wrap">
              <h1
                style={{
                  fontSize: "32px",
                  textAlign: "left",
                  padding: "10px",
                  fontWeight: "bold",
                }}
              >
                손Talk
              </h1>
              <div className="bh_row">
                {talks&&talks.map((elem, index) => {
                  return (
                    <div className="col-lg-6 col-12 mb-30 m-mb-20" onClick={()=>{handleCardClick3(elem)}}>
                      <div className="item item1 po-r">
                        <div className="item_inner">
                          <div className="ds-f ai-c name">
                            {/* <i className="ri-account-pin-circle-fill fw-l"></i> */}
                            <p className="fw-m">손TOP {elem.expertNo.branch} {elem.expertNo.name} 손해사정사</p>
                          </div>
                          <div className="title">{elem.title}</div>
                          <div className="content ellipsis">
                            <div dangerouslySetInnerHTML={createMarkup(elem.description)}></div>
                          </div>
                          <div className="keyword"></div>
                          <div className="info">
                            <div className="ds-f ai-c jc-b bh-flex-flex-wrap">
                              <div className="category">
                                <div className="ds-f ai-c">
                                  <i className="ri-check-line"></i>
                                  <p>{findNameByCat(elem.field1)}</p>
                                </div>
                              </div>
                              <div className="date">
                                <div className="ds-f">
                                  <span>조회수 {elem.count}</span>
                                  <span>{moment(elem.regiDate).format('YYYY년M월D일')}</span>
                                </div>
                              </div>
                            </div>
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
      </div>
    </section>
  );
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

function findNameByKey(catValue) {
  // keywordList에서 catValue와 일치하는 cat 값을 가진 객체를 찾습니다.
  const matchingKeyword = keywordList.find(
    (keyword) => keyword.cat === catValue
  );

  // 일치하는 객체가 있으면 그 객체의 name 값을 반환합니다.
  return matchingKeyword ? matchingKeyword.name : undefined;
}

function maskMiddleName(name) {
  // 이름의 길이가 1 이하일 경우 그대로 반환
  if (name.length <= 1) {
    return name;
  }

  // 가운데 글자의 시작 인덱스와 길이 계산
  const middleIndex = Math.floor(name.length / 2);
  let maskLength = name.length % 2 === 0 ? 2 : 1; // 짝수면 2, 홀수면 1

  // 가운데 글자(들)을 별표로 대체
  const maskedName =
    name.substring(0, middleIndex - Math.floor(maskLength / 2)) +
    "*".repeat(maskLength) +
    name.substring(middleIndex + Math.ceil(maskLength / 2));

  return maskedName;
}