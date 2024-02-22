import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import './theme.css';
import './loopple.css';

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(error)
    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/");
  };


  return (
    
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
          <div className="card z-index-0 ">
            <div className="card-header text-center pt-4 pb-1">
              <h4 className="font-weight-bolder mb-1">로그인</h4>
            </div>
            <div className="card-body pb-0">
              <form action={signIn}>
                <div className="mb-3">
                  <input
                    type="email"
                    name='email'
                    className="form-control"
                    placeholder="Email"
                    aria-label="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name='password'
                    className="form-control"
                    placeholder="Password"
                    aria-label="Password"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn bg-gradient-info w-100 mt-4 mb-2"
                    formAction={signIn}
                  >
                    로그인
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center pt-0 px-sm-4 px-1">
              <p className="mb-0 mt-3 text-sm mx-auto">
                아직 계정이 없으세요?
                <a href='/signup'
                  className="text-info text-gradient font-weight-bold"
                  >가입하기</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
