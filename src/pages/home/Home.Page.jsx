import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FormBanner from '../../components/partials/home/FormBanner'
import Navbar from '../../components/partials/navs/Navbar'
import '../../scss/home/_home.scss'
import {
  drawerDatas,
  drawerDividerDatas1,
} from "../../assets/datas/home/drawerDatas";

function HomePage() {
  return (
    <Box>
        <Navbar drawerDatas={drawerDatas}  drawerDividerDatas1={ drawerDividerDatas1}/>
        <FormBanner/>
    </Box>
  )
}

export default HomePage