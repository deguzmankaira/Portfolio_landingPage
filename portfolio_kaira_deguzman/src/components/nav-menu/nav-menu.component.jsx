import { Link } from 'react-router-dom';

const Navmenu = () => {
    return (
        <nav
            id="nav-menu"
            className="hidden py-5 bg-slate-200 shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
        >
            <ul className="block lg:flex">
                <li className="group">
                    <Link to="/" className="text-base font-bold text-slate-500 py-2 mx-8 flex group-hover:text-primary duration-300 ease-in-out">
                        Home
                    </Link>
                </li>
                <li className="group">
                    <Link to="/" className="text-base font-bold text-slate-500 py-2 mx-8 flex group-hover:text-primary duration-300 ease-in-out">
                        Portfolio
                    </Link>
                </li>
                <li className="group">
                    <Link to="/" className="text-base font-bold text-slate-500 py-2 mx-8 flex group-hover:text-primary duration-300 ease-in-out">
                        About
                    </Link>
                </li>
                
            </ul>
            
        </nav>
    );
};

export default Navmenu;
