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
                            Hello, I&apos;m Eric Lombo
                        </h1>
                        <p className="text-md md:text-xl max-w-md mb-3 text-pink-900 dark:text-white">
                            I am a Junior Full-Stack Developer with a passion for creating dynamic and responsive web applications. Based in Nairobi, Kenya, I specialize in both front-end and back-end technologies, and I&apos;m driven by the challenge of building innovative solutions that meet user needs.
                        </p>
                        <p className="text-md md:text-xl max-w-md mb-3 text-pink-900 dark:text-white">
                            I have hands-on experience with a variety of technologies such as JavaScript, React, Node.js, and MongoDB, and I&apos;m always eager to learn and grow in the ever-evolving world of software development.
                        </p>
                        <a 
                            href="#projects" 
                            className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-pink-700 md:text-md">
                            Explore My Projects
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
