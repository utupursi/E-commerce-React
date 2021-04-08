import React from 'react';
import TopBar from '../../components/Header/TopBar/Topbar';
import Nav from '../../components/Header/Nav/Nav';
import BottomBar from '../../components/Header/BottomBar/BottomBar';
import Footer from '../../components/Footer/Footer';
import FooterBottom from '../../components/FooterBottom/FooterBottom';
const Layout=(props)=>{
    return (
        <React.StrictMode>
            <TopBar/>
            <Nav/>
            <BottomBar/>
            <main>
                {props.children}
            </main>
            <Footer/>
            <FooterBottom/>

            

        </React.StrictMode>
    )
}

export default Layout;