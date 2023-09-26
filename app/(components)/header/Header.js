import React from 'react';
import NavBar from '../navbar/NavBar';

const Header = (props) => {
    return (
        <div>
            <section className="Sub-header">
                <NavBar/>
        <h1>{props.title}</h1>
    </section>
        </div>
    );
}

export default Header;
