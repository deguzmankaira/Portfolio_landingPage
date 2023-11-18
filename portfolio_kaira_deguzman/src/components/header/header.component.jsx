import React, { useEffect } from 'react';
import Navmenu from '../nav-menu/nav-menu.component';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <Link to="/" className="font-bold text-lg text-primary uppercase  block py-6">KD.</Link>
                    </div>
                    <div className="flex items-center px-4">
                        <Navmenu />
                        <button className='px-4 py-2 mx-8 font-semibold text-white bg-teal-500 rounded-full'>Contact</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
