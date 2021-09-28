import React from 'react';
import Navigation from "../components/Navigation";
import SociaNetwork from "../components/SociaNetwork";
import DynamicText from "../components/DynamicText";
import ButtonsBottom from "../components/ButtonsBottom";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";

const Home = () => {
    const variants = {
        initial: {
            opacity:0,
            transition: { duration: 0.5 },
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            transition: { duration: 0.3 },
            x: -100,
        }
    }

    return (
        <main>
            <Mouse />
            <motion.div className="home" initial="initial" animate="visible" exit="exit" variants={variants}>
                <Navigation />
                <SociaNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <motion.h1 drag OnDrag dragConstraints={{ left:-250, right:950,top:-200, bottom: 250}}>Test PEP</motion.h1>
                        <motion.h2 drag OnDrag dragConstraints={{ left:-250, right:950,top:-200, bottom: 250}}><DynamicText/></motion.h2>
                    </div>
                </div>
                <ButtonsBottom right={"/project-1"} />
            </motion.div>
        </main>
    );
};

export default Home;
