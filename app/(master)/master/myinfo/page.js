import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { supabase } from "@/utils/supabase/server";
// import { config } from '@/config';
import { AccountDetailsForm } from './components/account-details-form';
import { AccountInfo } from './components/account-info';
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user:{email} },
  } = await supabase?.auth.getUser();
  

  return (
    <Stack spacing={3}>
      {/* <div>
        <Typography variant="h4">Account</Typography>
      </div> */}
      <Grid container spacing={3}>
        <Grid lg={4} md={6} xs={12}>
          <AccountInfo  email={email}/>
        </Grid>
        <Grid lg={8} md={6} xs={12}>
          <AccountDetailsForm email={email}/>
        </Grid>
      </Grid>
    </Stack>
  );
}
