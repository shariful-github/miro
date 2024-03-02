import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import NavBar from "../components/NavBar";
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
            </div>
        </div>
    );
};

export default Home;