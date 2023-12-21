import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import styles from './Diapositiva.module.css'

const Diapositiva = ({ title, imageUrl, text, children }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2, height: '100vh'}}>
            <Box sx={{ margin: 2 }}>
                <Typography variant="h2">{title}</Typography>
                {text && <Typography variant="h5">{text}</Typography>}
                {children}
            </Box>
            {imageUrl && (
                <Box sx={{ marginLeft: 2 }}>
                    <Image src={imageUrl} alt={title} className={styles.DImages} width={300} height={200} />
                </Box>
            )}
        </Box>
    );
};

export default Diapositiva;
