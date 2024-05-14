import Banner from "../Banner/Banner";
import Donations from "../Donations/Donations";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br />
            <div className="max-w-7xl mx-auto">
                <Donations></Donations>
            </div>

        </div>
    );
};

export default Home;