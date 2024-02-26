"use client";
import React from "react";
import { useSearchParams } from 'next/navigation'
import categoryList from '../../../../components/categoryList'

// const categoryList=[
//   {name:'진단비',cat:"F01",variation:'분야로 찾기'},
//   {name:'암 입원비 / 실손 의료비',cat:"F02",variation:'분야로 찾기'},
//   {name:'질병·상해 사망 및 후유장해',cat:"F03",variation:'분야로 찾기'},
//   {name:'치아 보험',cat:"F04",variation:'분야로 찾기'},
//   {name:'자동차보험, 운전자보험',cat:"F05",variation:'분야로 찾기'},
//   {name:'배상 책임, 근로자재해보험, 학교안전공제, 여행자보험',cat:"F06",variation:'분야로 찾기'},
//   {name:'도난, 화재, 누수, 침수, 재난사고',cat:"F07",variation:'분야로 찾기'},
//   {name:'여성전용 및 태아',cat:"F08",variation:'분야로 찾기'},
//   {name:'대전/세종/충남',cat:"R01",variation:'지역으로 찾기'},
//   {name:'제주',cat:"R02",variation:'지역으로 찾기'},
//   {name:'부산/울산/경남',cat:"R03",variation:'지역으로 찾기'},
//   {name:'대구/경북',cat:"R04",variation:'지역으로 찾기'},
//   {name:'전주/전북',cat:"R05",variation:'지역으로 찾기'},
//   {name:'청주/충북',cat:"R06",variation:'지역으로 찾기'},
//   {name:'원주/강릉/강원',cat:"R07",variation:'지역으로 찾기'},
//   {name:'수도권',cat:"R08",variation:'지역으로 찾기'},
//   {name:'광주/전남',cat:"R09",variation:'지역으로 찾기'},
// ]

function findCategory(search) {
  const matchingCategory = categoryList.find(category => category.cat === search);

  // 일치하는 항목을 찾았다면, 해당 항목의 name과 variation을 객체로 반환합니다.
  if (matchingCategory) {
    return { name: matchingCategory.name, variation: matchingCategory.variation };
  }

  // 일치하는 항목이 없다면, null을 반환합니다.
  return null;
}

export default function Title() {
  const searchParams = useSearchParams()
  const search = searchParams.get('cat')
  const page = searchParams.get('page')

  const result=findCategory(search)
  console.log(search)
  console.log(page)
  
  return (
    <div className="board_title_area">
      <span>{result.variation}</span>
      <div className="ds-f ai-c jc-b">
        <h3>
          {result.name}
        </h3>
        <a href="/expert" className="ds-b">
          목록
        </a>
      </div>
    </div>
  );
}


