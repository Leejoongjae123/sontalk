import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import './theme.css';
import './loopple.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function Reset({
  searchParams}) {

    

  const signIn = async (formData) => {
    "use server";
    
    const email = formData.get("email")
    const password = formData.get("password")
    const supabase = createClient();

    console.log('searchParams2:',searchParams.code)

    if(searchParams.code){
      const {error}=await supabase.auth.exchangeCodeForSession(
        searchParams.code
      )
    }
    console.log("1:",error)
    const {error}=await supabase.auth.updateUser({
      password
    })

    console.log("2:",error)
    if (!error){
      return redirect("/?loginsuccess=true")
    }


  };
  return (
    <div className="login_container">
      <div className="row">
        <div className="">
          <div className="card z-index-0">
            <div className="card-header text-center pt-4 pb-1">
              <h4 className="font-weight-bolder mb-1">비밀번호 변경</h4>
            </div>
            <div className="card-body pb-0">
              <form action={signIn}>
                {/* <div className="mb-3">
                  <input
                    type="email"
                    name='email'
                    className="login_form"
                    placeholder="Email"
                    aria-label="Email"
                  />
                </div> */}
                <div className="login_input">
                  <input
                    type="password"
                    name='password'
                    className="login_form"
                    placeholder="Password"
                    aria-label="Password"
                  />
                </div>
                <div className="login_btn_container">
                  <button
                    type="submit"
                    className="login_btn"
                    formAction={signIn}
                  >
                    변경
                  </button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    
  );
}
