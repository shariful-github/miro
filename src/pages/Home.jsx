import Banner from "../components/Banner";
import NavBar from "../components/NavBar";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="max-w-screen-lg mx-auto">
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;