import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";

export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="body">
      <div id="main_silde" className="main_slide">
        <div className="swiper main_swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide1">
              <div className="bh_wrap h-100">
                <div className="txt_box po-r h-100">
                  <span className="ds-b">손TOP</span>
                  <h3>
                    복잡한 보험금 청구,
                    <br />
                    우리지역의 분야별 전문가들과
                    <br />
                    전략적으로, 합리적으로, <em>“더”</em> 받자!
                  </h3>
                  <p>
                    손해사정 분야의 복잡한 문제를 신속하게 해결하고,
                    <br />
                    보험 소비자들의 권익 보호를 위해 최고의 전문가들이
                    함께합니다.
                  </p>
                  <img
                    src="images/slide/slide_img.png"
                    alt="slide_img"
                    className="point"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide2">
              <div className="bh_wrap h-100">
                <div className="txt_box po-r h-100">
                  <span className="ds-b">손TOP</span>
                  <h3>
                    복잡한 보험금 청구,
                    <br />
                    우리지역의 분야별 전문가들과
                    <br />
                    전략적으로, 합리적으로, <em>“더”</em> 받자!
                  </h3>
                  <p>
                    손해사정 분야의 복잡한 문제를 신속하게 해결하고,
                    <br />
                    보험 소비자들의 권익 보호를 위해 최고의 전문가들이
                    함께합니다.
                  </p>
                  <img
                    src="images/slide/slide_img.png"
                    alt="slide_img"
                    className="point"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide slide3">
              <div className="bh_wrap h-100">
                <div className="txt_box po-r h-100">
                  <span className="ds-b">손TOP</span>
                  <h3>
                    복잡한 보험금 청구,
                    <br />
                    우리지역의 분야별 전문가들과
                    <br />
                    전략적으로, 합리적으로, <em>“더”</em> 받자!
                  </h3>
                  <p>
                    손해사정 분야의 복잡한 문제를 신속하게 해결하고,
                    <br />
                    보험 소비자들의 권익 보호를 위해 최고의 전문가들이
                    함께합니다.
                  </p>
                  <img
                    src="images/slide/slide_img.png"
                    alt="slide_img"
                    className="point"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bh_wrap s_tool">
            <div className="bh po-r ds-f ai-c">
              <div className="swiper-pagination bh_row gutters-5"></div>
              <div className="controllers">
                <div className="play">
                  <i className="ri-play-mini-fill play"></i>
                </div>
                <div className="pause">
                  <i className="ri-pause-mini-line pause"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
