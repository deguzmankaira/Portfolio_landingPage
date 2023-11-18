
import SosmedMe from "../social-media/social-media.component"

const Footer = () => {
    return (
        <footer className="bg-dark dark:bg-slate-800 pt-24 pb-12">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                        <h2 className="font-bold text-2xl md:text-4xl mb-5 text-primary">Kaira De Guzman</h2>
                        <h3 className="font-bold text-2xl mb-2">Contact Me:</h3>
                        <p><a href="https://mailto:deguzmankairag@gmail.com"
                            target="_blank" className="hover:underline">deguzmankairag@gmail.com</a> </p>
                        <p>+639050918058</p>
                        <p>Philippines</p>

                    </div>

                    <div className="w-full px-4 mb-12 md:w-1/3">
                        <h3 className="font-semibold text-xl mb-5 text-primary">Navigate:</h3>
                        <ul className="text-slate-300">
                            <li>
                                <a href="#home" className="inline-block text-base hover:text-primary mb-2">Home</a>
                            </li>
                            <li>
                                <a href="/" className="inline-block text-base hover:text-primary mb-2">Portfolio</a>
                            </li>
                            <li>
                                <a href="/" className="inline-block text-base hover:text-primary mb-2">About</a>
                            </li>


                        </ul>
                    </div>
                </div>

                <div className="w-full ptborder-t border-slate-700 ">
                    <div className="flex item-center justify-center mb-5">
                        <SosmedMe />
                    </div>
                </div>
                
            </div>

        </footer >
    )
}

export default Footer
