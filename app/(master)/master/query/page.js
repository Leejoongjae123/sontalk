import React from "react";
import { Box } from "@mui/material";
import Table from "./components/TableData";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import Button from "@mui/material/Button";
import Link from "next/link";

export default async function page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase?.auth.getUser();

  let { data: profiles } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", user.email)
    .single();
  const expertNo = profiles?.expertNo;

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        overflowX: "auto",
      }}
    >
      <Box
        sx={{
          margin: "1rem 0 1rem 0",
        }}
      >
        <h1 style={{ textAlign: "center" }}>간편상담</h1>
      </Box>

      <Table expertNo={expertNo}></Table>
    </Box>
  );
}
