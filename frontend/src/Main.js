import React from 'react';
import Sidebar from './components/Sidebar'
import ContentWrapper from './components/ContentWrapper'
import Contents from './components/Contents'
import LogoutModal from './components/LogoutModal'
import ScrollToTop from './components/ScrollToTop'
import MessageModal from './components/MessageModal'

export default function Main(){
    return(
        <div id="wrapper">
            <Sidebar/>
            <ContentWrapper>
            <Contents/>
            </ContentWrapper>
            <LogoutModal/>
            <MessageModal />
            <ScrollToTop/>
        </div>
    )
}
