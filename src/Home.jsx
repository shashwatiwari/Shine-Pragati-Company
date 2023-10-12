import styles from "./style";
import { Business, CTA, Footer, Navbar, Stats, Hero, Clients } from "./components";
import Contact from "./components/Contact";

const Home = () => (
    <>
        <div className="w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter} bg-slate-300/50`}>
                <div className={`${styles.boxWidth} `}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-red-600/75 ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Clients />
                    <CTA />
                    <Contact />
                </div>
            </div>
            <div className={` ${styles.paddingX} ${styles.flexCenter} bg-slate-400/25`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    </>
);

export default Home;
