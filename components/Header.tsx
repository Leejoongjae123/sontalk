import './css/header.css'
import './css/main.css'
import './css/layout.css'


export default function Header() {
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
                <ul className="ds-f">
                  <a href="#" className="login ds-b">
                    로그인
                  </a>
                  <a href="#" className="login ds-b">
                    회원가입
                  </a>
                </ul>
              </div>
            </div>
            <div className="main_menu">
              <ul className="ds-f">
                <li className="fw-m">
                  <a href="/about">About Us</a>
                </li>
                <li className="fw-m">
                  <a href="/expert">전문가 찾기</a>
                </li>
                <li className="fw-m">
                  <a href="counsel">간편 상담</a>
                </li>
                <li className="fw-m">
                  <a href="/talk">손사 Talk</a>
                </li>
                <li className="fw-m">
                  <a href="/inquiry">맞춤 손사추천</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="m_header ds-n m-ds-b">
          <div className="m_logo ta-c">
            <a href="/">
              <img src="/images/main/logo.png" alt="logo" className="logo" />
            </a>
          </div>
          <div className="m_menu_btn" id="m_menu_btn" >
            <i className="ri-menu-fill"></i>
          </div>
        </div>
      </header>
      <div className="m_menu">
        <div className="cover" ></div>
        <div className="mune_list">
          <div className="close">
            <i className="ri-close-fill" ></i>
          </div>
          <div className="login_area">
            <div className="ds-f">
              <a href="#" className="ds-b">
                로그인
              </a>
              <a href="#" className="ds-b">
                회원가입
              </a>
            </div>
          </div>
          <ul>
            <li>
              <a href="/about.html">- About Us</a>
            </li>
            <li>
              <a href="/expert.html">- 전문가 찾기</a>
            </li>
            <li>
              <a href="counsel_borad.html">- 간편 상담</a>
            </li>
            <li>
              <a href="/talk_board.html">- 손사 Talk</a>
            </li>
            <li>
              <a href="/inquiry.html">- 맞춤 손사추천</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
