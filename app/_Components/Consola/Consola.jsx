"use client"
import React, { useEffect } from "react";
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import styles from './Consola.module.css'

// Aos
import AOS from 'aos';
import 'aos/dist/aos.css';


const Consola = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div data-aos="flip-left" className={styles.consolaContainer}>
            <iframe
                src="https://copy.sh/v86/?profile=archlinux"
                className={styles.consola}
                frameBorder="0"
                scrolling="no"
            ></iframe>
        </div>
    );
};

export default Consola;
