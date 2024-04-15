import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import "./theme.css";
import "./loopple.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function Reset({
  searchParams,
}: {
  searchParams: { message: string; code: string };
}) {
  const resetPassword = async (formData: FormData) => {
    "use server";
    const password = formData.get("password") as string;
    const supabase = createClient();

    if (searchParams.code) {
      const supabase = createClient();
      const { error } = await supabase.auth.exchangeCodeForSession(
        searchParams.code
      );

      if (error) {
        return redirect("/reset?message=Unable to reset Password.Link expired");
      }
    }

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      return redirect("/reset?message=Unable to reste Password. Try again!");
    }
    redirect('/')
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
              <form action={resetPassword}>
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
                    name="password"
                    className="login_form"
                    placeholder="Password"
                    aria-label="Password"
                  />
                </div>
                <div className="login_btn_container">
                  <button
                    type="submit"
                    className="login_btn"
                    formAction={resetPassword}
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
