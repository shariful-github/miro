import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import NavBar from "../components/NavBar";
import TrustedOrganizations from "../components/TrustedOrganizations";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="max-w-screen-lg mx-10 lg:mx-auto">
                <Banner></Banner>
                <TrustedOrganizations></TrustedOrganizations>
                <Highlights></Highlights>
            </div>
        </div>
    );
};

export default Home;