import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import TableData from "./components/TableData";
import { Box } from "@mui/material";
import Table from "./components/TableData";

async function page({ params }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase?.auth.getUser();
  
  const questionNo=params.questionNo
  console.log('questionNo:',questionNo)
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
      </Box>

      <Table user={user} questionNo={questionNo}></Table>
    </Box>
  );
}

export default page;
