import React from "react";
import { Box } from "@mui/material";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Image from "next/image";
function page() {
  const ariaLabel = { "aria-label": "description" };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
      }}
    >
      <div style={{display:'block',flexDirection:'column',justifyContent:"center",alignItems:'center'}}>
      <h1>프로필 사진</h1>
        <img fill style={{display:'block',width:"30vw",height:'auto'}} src='https://yieqkayhbhrcqmsfzjiu.supabase.co/storage/v1/object/public/images/ljj.png'></img>
        <Button sx={{margin:"1rem 0 1rem 0"}} variant="contained">사진 변경</Button>
      </div>
      <div>
        <h1>이름</h1>
        <Input defaultValue="" inputProps={ariaLabel} />
      </div>
      <div>
        <h1>설명</h1>
        <Input defaultValue="" inputProps={ariaLabel} />
      </div>
      <div>
        <h1>경력</h1>
        <Input defaultValue="" inputProps={ariaLabel} />
      </div>
      <div style={{ margin: "1rem 0 1rem 0" }}>
        <Button variant="contained">내용 수정하기</Button>
      </div>
    </Box>
  );
}

export default page;
