"use client";
import React from "react";
import { useSearchParams } from 'next/navigation'
import categoryList from '@/components/categoryList'

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


