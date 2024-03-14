'use client'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState,useEffect } from 'react';
import { supabase } from '@/utils/supabase/client';

export function AccountInfo({email}) {
   
  const [userData, setUserData] = useState(null)

  const fetchData=async()=> {
    const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('email', email)
    .single()
    setUserData(data)
   }
  
   useEffect(()=>{
    fetchData()
   },[])

  return (
    <Card>
      <CardContent>
        <h1 style={{textAlign:'center'}}>사진</h1>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <div>
            {/* <Avatar src='11' sx={{ height: '80px', width: '80px' }} /> */}
            <img style={{width:"20vw",height:"auto"}} src={userData?.imageUrl} alt="" />
          </div>
          {/* <Stack spacing={1} sx={{ textAlign: 'center' }}>
            <Typography variant="h5">{user.name}</Typography>
            <Typography color="text.secondary" variant="body2">
              {user.city} {user.country}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {user.timezone}
            </Typography>
          </Stack> */}
        </Stack>
      </CardContent>
      <Divider />
      
        <Button variant="contained" fullWidth >
          사진 올리기
        </Button>
      
    </Card>
  );
}
