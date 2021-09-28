import React from 'react';
import Mouse from "../components/Mouse";
import logo from "../components/logo";
import Navigation from "../components/Navigation";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import SociaNetwork from "../components/SociaNetwork";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import { motion } from 'framer-motion';

const Contact = () => {
    const variants = {
        out: {
            opacity:0,
            x: 300,
        },
        in: {
            opacity: 1,
            x: 0,
        },
    }
    const transition = {
        ease: [.03,.87,.73,.9],
        duration:.6,
    }

    return (
        <main>
            <Mouse />
            <motion.div className="contact" exit="out" animate="in" initial="out" transition={transition} variants={variants}>
                <Navigation />
                <logo />
                {/* contact form */}
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>12 rue du Code</p>
                            <p>766630 Envermeu</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>téléphone</h4>
                            <CopyToClipboard text="0616164486" className="hover">
                                <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => {
                                    alert('Téléphone copié !')
                                }}>06 16 16 44 86</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>email</h4>
                            <CopyToClipboard text="ppoupardin@toshiba-teis.com" className="hover">
                                <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => {
                                    alert('Email copié !')
                                }}>ppoupardin@toshiba-teis.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SociaNetwork/>
                    <div className="credits">
                        <p>ppoupardin - 2021</p>
                    </div>
                </div>
                <ButtonsBottom left={'/project-4'} />
            </motion.div>
        </main>
    );
};

export default Contact;
