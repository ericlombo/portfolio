import { FaLinkedin, FaFacebook, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';

function ContactPage() {
    return (
        <div id="contact" className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-20">
                {/* Contact Section */}
                <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
                    {/* Image Section */}
                    <div className="w-32 h-32 md:w-40 md:h-40 mb-6 md:mb-0 rounded-full overflow-hidden">
                        <img
                            src="/zinn.jpg" // Replace with your image
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Text and Social Media Links */}
                    <div className="text-center md:text-left md:ml-8">
                        <h1 className="text-3xl font-semibold text-pink-600 dark:text-pink-500 mb-4">
                            Reach out to me!
                        </h1>
                        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                            Feel free to contact me via any of the platforms below:
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex justify-center md:justify-start space-x-6">
                            <a href="mailto:your-email@example.com" aria-label="Email" className="text-pink-600 dark:text-pink-500 hover:text-pink-700 transition">
                                <FaEnvelope size={30} />
                            </a>
                            <a href="https://www.linkedin.com/in/your-profile" aria-label="LinkedIn" className="text-pink-600 dark:text-pink-500 hover:text-pink-700 transition">
                                <FaLinkedin size={30} />
                            </a>
                            <a href="https://www.facebook.com/your-profile" aria-label="Facebook" className="text-pink-600 dark:text-pink-500 hover:text-pink-700 transition">
                                <FaFacebook size={30} />
                            </a>
                            <a href="https://www.instagram.com/your-profile" aria-label="Instagram" className="text-pink-600 dark:text-pink-500 hover:text-pink-700 transition">
                                <FaInstagram size={30} />
                            </a>
                            <a href="https://www.tiktok.com/@your-profile" aria-label="TikTok" className="text-pink-600 dark:text-pink-500 hover:text-pink-700 transition">
                                <FaTiktok size={30} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
