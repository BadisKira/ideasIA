import Cards from "../components/ui/Cards.tsx";
import Header from "../components/ui/Header.tsx";
import HeroSection from "../components/ui/HeroSection.tsx";

const Home = () => {
    return (
        <div className={" pt-16"}>
            <Header />
            <div className={"home"}>
                <HeroSection />
                <Cards />
            </div>
        </div>
    )
} ;

export default Home ;