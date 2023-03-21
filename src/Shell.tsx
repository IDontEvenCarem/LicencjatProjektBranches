import './Shell.css'

import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import SideAdds from "./SideAdds";


export default function Shell (props: React.PropsWithChildren<{}>) {
    return (
        <div className="App">
            <Header />
            {props.children}
            <SideAdds side='left'></SideAdds>
            <SideAdds side='right'></SideAdds>
            <Footer></Footer>
        </div>
    )
}