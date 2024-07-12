import styles from './banner.module.css';
import Image from 'next/image';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import shoppingCart  from '../../../public/shopping-cart.png';


import logo from '../../../public/logoFrontMarket.svg';
import avatar from '../../../public/avatarBatman.png';

export default function Banner() {
  return (
    <Box className={styles.navbar}>
      <AppBar sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none !important'}} position="static">
        <Toolbar>
          <Image src={logo} width={40} className={styles.logo}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:'500' }}>
            Front Market
          </Typography>
          <Stack direction="row" spacing={2}>
            <div className={styles.shoppingLogo}>
                <Image src={shoppingCart} width={35} />
            </div>
            <Avatar alt="Batman" src={avatar} />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}