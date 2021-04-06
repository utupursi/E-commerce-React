import React from 'react';
import TopBar from '../../components/Header/TopBar/Topbar';
import Nav from '../../components/Header/Nav/Nav';
import BottomBar from '../../components/Header/BottomBar/BottomBar';

const Layout=(props)=>{
    return (
        <React.StrictMode>
            <TopBar/>
            <Nav/>
            <BottomBar/>
            <main>
                {props.children}
            </main>

        </React.StrictMode>
    )
}

export default Layout;