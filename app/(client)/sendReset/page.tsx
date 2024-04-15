import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import './theme.css';
import './loopple.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function sendReset({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const sendReset = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    

    const {data,error} = await supabase.auth.resetPasswordForEmail(email);
    console.log(error)
    if(!error){
      return redirect("/?loginsuccess=reset")
    }
    
    

  };
  return (
    <div className="login_container">
      <div className="row">
        <div className="">
          <div className="card z-index-0">
            <div className="card-header text-center pt-4 pb-1">
              <h4 className="font-weight-bolder mb-1">비밀번호 변경 이메일 보내기</h4>
            </div>
            <div className="card-body pb-0">
              <form action={sendReset}>
                <div className="mb-3">
                  <input
                    type="email"
                    name='email'
                    className="login_form"
                    placeholder="Email"
                    aria-label="Email"
                  />
                </div>
                <div className="login_btn_container">
                  <button
                    type="submit"
                    className="login_btn"
                    formAction={sendReset}
                  >
                    메일 발송
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
