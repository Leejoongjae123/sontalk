import React from "react";
import Box from "@mui/material/Box";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import Forms from './components/Forms'

export default async function page() {
  
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user:{email} },
  } = await supabase?.auth.getUser();

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
        display: "flex",
        justifyContent: "center", // width 설정을 제거하거나, 이 부분을 수정하지 않아도 됩니다.
      }}
      noValidate
      autoComplete="off"
    >
      <div style={{ display: "flex", flexDirection: "column", width: "90%" }}>
        <Forms email={email}></Forms>
      </div>
    </Box>
  );
}
