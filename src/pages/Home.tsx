import Menu from "../components/Menu";
import Partner from "../components/Partner";
import Header from "../components/Header";
import Team from "../components/Team";
import WatchNow from "../components/WatchNow";
import Footer from "../components/Footer";
import Requirement from "../components/Requirements";

export default function Home(){

    return(
        <>
            <Menu />
            <Header/>
            <Team/>
            <Requirement/>
            <Partner/>
            <WatchNow />
            <Footer />
        </>
    )
}