import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import "./theme.css";
import SignUpButton from './components/SignUpButton'
// import './loopple.css';

export default function SignUp({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const secretKey = formData.get("secretKey") as string;
    const supabase = createClient();

    const { data,error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log('error:',error);
    if (error) {
      return redirect("/signup?message=Could not authenticate user");
    }

    return redirect("/signup");
  };

  const signUp = async (formData: FormData) => {
    "use server";
    console.log('hello')
    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();
    console.log(supabase);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    console.log(error);
    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    // return redirect("/login?message=Check email to continue sign in process");
    return redirect("/");
  };

  return (
    <>
      <div className="login_container">
        <div className="row">
          <div className="">
            <div className="card z-index-0">
              <div className="card-header text-center pt-4 pb-1">
                <h4 className="font-weight-bolder mb-1">회원가입</h4>
              </div>
              <div className="card-body pb-0">
                <form action={signUp}>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="login_form"
                      placeholder="Email"
                      name="email"
                      aria-label="Email"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      name="password"
                      className="login_form"
                      placeholder="Password"
                      aria-label="Password"
                    />
                  </div>

                <SignUpButton signUp={signUp}></SignUpButton>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
