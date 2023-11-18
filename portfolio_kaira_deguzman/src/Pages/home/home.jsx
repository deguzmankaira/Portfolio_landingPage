import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
    return (
        <>
            <Header />

            <section id="home" className="pt-36 pb-24 dark:bg-dark">
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="w-full self-center px-4 lg:w-1/2">
                            <h1 className="text-base font-semibold text-primary md:text-xl lg:mb-3">
                                Hello, it's
                                <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl dark:text-white">Kaira
                                    <span className="bg-gradient"> De Guzman</span> </span>
                            </h1>
                            <h2 className=" font-medium text-secondary text-lg mb-5 lg:text-2xl">
                                Bachelor of Science in <span className="text-dark dark:text-white" > Computer Engineering</span>
                            </h2>
                            <p className="font-medium text-secondary mb-10 leading-relaxed">
                            Currently completing my degree in <span className="text-slate-400  font-bold">BSCpE</span>  at Holy Angel University. Concurrently, I am serving as an intern at <a href="https://harisenin.com" className="text-dark font-bold dark:text-white hover:underline  dark:underline-white">Planate Management Group, </a>  specializing in <span className="text-primary font-bold  ">Robotics Engineering.</span>
                                <span className="text-dark font-bold dark:text-white "> It's an exhilarating journey!</span>
                            </p>
                               
                            <a href="https://www.linkedin.com/in/kaira-de-guzman-36251a277/"
                                target="_blank"
                                className="text-base font-semibold text-white bg-gradient-button py-3 px-8 rounded-full hover:scale-125 hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                                Check Resume
                            </a>
                        </div>
                        <div className="w-full self-end px-4 lg:w-1/2">
                            <div className="relative mt-9 lg:mt-7 group lg:right-0">
                                <img src="src/img/myphoto.png" className="w-full max-w-xs"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Home;