import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


function Master() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const signOut = async () => {
    "use server";
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
    return redirect("/master")
  };

  return (
    <div
      component="main"
      style={{
        flexGrow: 1,
        p: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ textAlign: "center" }}>전문가 페이지 홈</p>
      <div>
        <form action={signOut}>
          <Button
          type='submit'
            variant="contained"
            style={{
              fontSize: "0.9rem",
              cursor: "pointer",
                
            }}
          >
            로그아웃
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Master;
