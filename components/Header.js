import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import MenuButtons from "./MenuButtons";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default async function Header() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase?.auth.getUser();

  const signOut = async () => {
    "use server";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    await supabase.auth.signOut();
    return redirect("/");
  };

  return (
    <>
      <header>
        <div className="header ds-b m-ds-n">
          <div className="bh_wrap">
            <div className="logo_area">
              <div className="ds-f jc-b ai-c">
                <h1>
                  <a href="/" className="ds-b">
                    <img
                      src="/images/main/logo.png"
                      alt="logo"
                      className="logo"
                    />
                  </a>
                </h1>
                {user ? (
                  <ul className="ds-f">
                    <li className="fw-m">
                      <a href="/master">{user.email}</a>
                    </li>
                    <li className="fw-m">
                      <form action={signOut}>
                        <button
                          style={{
                            backgroundColor: "white",
                            fontSize: "0.9rem",
                            cursor: "pointer",
                            color: "#757575",
                          }}
                        >
                          로그아웃
                        </button>
                      </form>
                    </li>
                  </ul>
                ) : (
                  <ul className="ds-f">
                    <a href="/login" className="login ds-b">
                      로그인
                    </a>
                    <a href="/signup" className="login ds-b">
                      회원가입
                    </a>
                  </ul>
                )}
              </div>
            </div>
            <div
              className="main_menu"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <ul className="ds-f">
                <li className="fw-m">
                  <a href="/about">About Us</a>
                </li>
                <li className="fw-m">
                  <a href="/expert">전문가 찾기</a>
                </li>
                <li className="fw-m">
                  <a href="/counsel">간편 상담</a>
                </li>
                <li className="fw-m">
                  <a href="/talk">손사 Talk</a>
                </li>
                <li className="fw-m">
                  <a href="/inquiry">맞춤 손사추천</a>
                </li>
              </ul>

              <ul className="ds-f" style={{width:"10%",display:'flex',justifyContent:'center',alignItems:'center'}} >
                <li className="fw-m">
                  <a href="https://www.mrpass.net/" target="_blank">
                    <img
                      src="images/main/mrpass.png"
                      alt=""
                      style={{width:"1.8vw"}}
                    />
                  </a>
                </li>
                <li className="fw-m">
                  <a href="https://www.youtube.com/@mrsontop" target="_blank">
                  <img
                      className="responsive-images"
                      src="images/main/youtube.png"
                      alt=""
                    />
                  </a>
                </li>
                <li className="fw-m">
                  <a href="https://blog.naver.com/mrsontop" target="_blank">
                  <img
                      className="responsive-images"
                      src="images/main/blog.png"
                      alt=""
                      style={{marginTop:"10%"}}
                    />
                  </a>
                </li>
                <li className="fw-m">
                  <a href="https://cafe.daum.net/mrpass" target="_blank">
                  <img
                      className="responsive-images"
                      src="images/main/cafe.jpg"
                      alt=""
                      style={{marginTop:"10%"}}
                    />
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <MenuButtons user={user}></MenuButtons>
        {/* <div className="m_header ds-n m-ds-b">
          <div className="m_logo ta-c">
            <a href="/">
              <img src="/images/main/logo.png" alt="logo" className="logo" />
            </a>
          </div>
          
          <div className="m_menu_btn" id="m_menu_btn" onClick={menuOpen}>
            <i className="ri-menu-fill"></i>
          </div>
          <div
            className="m_menu"
            style={{ display: isOpen ? "block" : "none" }}
          >
            <div className="cover" onClick={menuClose}></div>
            <div className="mune_list on">
              <div className="close">
                <i className="ri-close-fill" onClick={menuClose}></i>
              </div>
              <div className="login_area">
                <div className="ds-f">
                  <a href="/login" className="ds-b">
                    로그인
                  </a>
                  <a href="/signup" className="ds-b">
                    회원가입
                  </a>
                </div>
              </div>
              <ul>
                <li>
                  <a href="/about">- About Us</a>
                </li>
                <li>
                  <a href="/expert">- 전문가 찾기</a>
                </li>
                <li>
                  <a href="counsel">- 간편 상담</a>
                </li>
                <li>
                  <a href="/talk">- 손사 Talk</a>
                </li>
                <li>
                  <a href="/inquiry">- 맞춤 손사추천</a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </header>
    </>
  );
}
