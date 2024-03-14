'use client'
import React from 'react'
import Box from "@mui/material/Box";

function Master() {
  const open=true
  return (
    <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,

        }}
      >
        전문가 전용 페이지입니다.
        변경을 원하시는 정보를 NavBar내에서 선택하세요
      </Box>
  )
}

export default Master