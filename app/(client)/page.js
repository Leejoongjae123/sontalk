import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Slider from "./components/Slider";
import SearchBar from './components/SearchBar'
import Suggestions from './components/Suggestions'
import Recommendations from './components/Recommendations'
import MyRecommendations from './components/MyRecommendations'

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
      <Slider></Slider>
      <SearchBar></SearchBar>
      <Suggestions></Suggestions>
      <Recommendations></Recommendations>
      <MyRecommendations></MyRecommendations>
    </div>
  );
}

