function HeroSection() {
    return (
        <div>
            {/* Hero Section Content */}
            <div className="flex items-center justify-center flex-col py-20">
                <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                    {/* Image */}
                    <div className="mb-4 md:mb-0 md:mr-8">
                        <img 
                            src="/zin.jpg" 
                            alt="Eric Lombo" 
                            className="w-32 h-32 rounded-full object-cover"
                        />
                    </div>
                    
                    {/* Text Section */}
                    <div>
                        <h1 className="text-xl md:text-4xl mb-1 md:mb-3 text-pink-600 font-semibold dark:text-pink-500">
                            Hi, I&apos;m Eric Lombo
                        </h1>
                        <p className="text-md md:text-xl max-w-md mb-3 text-pink-900 dark:text-white">
                            I&apos;m a full-stack web developer based in Nairobi, Kenya.
                            <span>
                                I have developed many types of web applications from well-known DJ applications to eCommerce booking platforms. 
                                I&apos;m passionate about cutting-edge, pixel-perfect, beautiful interfaces.
                            </span>
                        </p>
                        <a 
                            href="#" 
                            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-pink-700 md:text-md">
                            My Works
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
