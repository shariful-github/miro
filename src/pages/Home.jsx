import Banner from "../components/Banner";
import BestTeams from "../components/BestTeams";
import BuiltForAll from "../components/BuiltForAll";
import ConnectTools from "../components/ConnectTools";
import Footer from "../components/Footer";
import Highlights from "../components/Highlights";
import NavBar from "../components/NavBar";
import TheWay from "../components/TheWay";
import TrustedOrganizations from "../components/TrustedOrganizations";
import WorkTogether from "../components/WorkTogether";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="max-w-screen-lg mx-10 lg:mx-auto">
                <Banner></Banner>
                <TrustedOrganizations></TrustedOrganizations>
                <Highlights></Highlights>
                <WorkTogether></WorkTogether>
                <ConnectTools></ConnectTools>
                <TheWay></TheWay>
                <BuiltForAll></BuiltForAll>
                <BestTeams></BestTeams>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;