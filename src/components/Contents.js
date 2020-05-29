import React from 'react'
import Topbar from './Topbar'
import TopbarContent from './TopbarContent'
import ContainerFluid from './ContainerFluid'
import PageHeading from './PageHeading'
import RowOne from './ContentRow1'
import RowTwo from './ContentRow2'
import RowThree from './ContentRow3'

export default function Contents() {
    return (
        <div id="content">
        <Topbar>
            <TopbarContent/>
        </Topbar>
          <ContainerFluid>
            <PageHeading/>
          </ContainerFluid>
        <RowOne/>
        <RowTwo/>
        <RowThree/>
        </div>
    )
}

