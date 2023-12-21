import React from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import styles from './DVinietas.module.css'

const DVinietas = ({ imageUrl, children }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 2, height: '100vh'}}>
            <Box sx={{ margin: 2 }}>
                {children}
            </Box>
            {imageUrl && (
                <Box sx={{ marginLeft: 2 }}>
                    <Image src={imageUrl} alt='IMG' className={styles.DImages} width={300} height={200} />
                </Box>
            )}
        </Box>
    );
};

export default DVinietas;
