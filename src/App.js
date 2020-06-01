import React from 'react';
import Sidebar from './components/Sidebar'
import ContentWrapper from './components/ContentWrapper'
import Contents from './components/Contents'
import LogoutModal from './components/LogoutModal'
import { Provider } from './Context'
import ScrollToTop from './components/ScrollToTop'
import MessageModal from './components/MessageModal'
import MyPieChart from './components/MyPieChart'

function App() {
  return (
    <Provider>
      <div id="wrapper">
        <Sidebar/>
        <ContentWrapper>
          <Contents/>
        </ContentWrapper>
        <LogoutModal/>
        <MessageModal />
        <ScrollToTop/>
      </div>
    </Provider>
  );
}

export default App;
