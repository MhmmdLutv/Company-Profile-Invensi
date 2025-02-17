import HeroImage from '../assets/images/hero.svg'
import AboutImage from '../assets/images/about.svg'

import { FaCheckCircle } from "react-icons/fa";

import Proyek1 from '../assets/images/hillStone.jpeg'
import Proyek2 from '../assets/images/kapersky.jpeg'
import Proyek3 from '../assets/images/sangfor.jpeg'
import Proyek4 from '../assets/images/dell.jpeg'
import Proyek5 from '../assets/images/qlue.jpeg'

import card1 from '../assets/images/card1.png'
import card2 from '../assets/images/card2.png'
import card3 from '../assets/images/card3.png'
import about from '../assets/images/Programming.gif'

import telkomsel from "../assets/client/telkomsel.jpg";
import kemhan from "../assets/client/kemhan.jpeg";
import badanpom from "../assets/client/badanpom.jpeg";
import tvri from "../assets/client/tvri.jpeg";
import agn from "../assets/client/AGN.jpeg";
import putraArga from "../assets/client/putraArga.jpeg";
import bankMega from "../assets/client/bankmega.jpeg";
import diagnos from "../assets/client/diagnos.jpeg";
import cardno from "../assets/client/cardno.jpeg";
import aequus from "../assets/client/aequus.jpeg";
import prospera from "../assets/client/prospera.jpeg";
import jhpiego from "../assets/client/jhpiego.jpeg";
import galeri24 from "../assets/client/galeri24.jpeg";
import len from "../assets/client/len.jpeg";
import darma from "../assets/client/darma.jpeg";
import kinarya from "../assets/client/kinarya.jpeg";


export const HomePage = () => {

    const clients = [
        { name: "Telkomsel", logo: telkomsel },
        { name: "Kemhan", logo: kemhan },
        { name: "Badan POM", logo: badanpom },
        { name: "TVRI", logo: tvri },
        { name: "AGN", logo: agn },
        { name: "Putra Arga Binangun", logo: putraArga },
        { name: "Bank Mega Syariah", logo: bankMega },
        { name: "Diagnos", logo: diagnos },
        { name: "Cardno", logo: cardno },
        { name: "Aequus", logo: aequus },
        { name: "Prospera", logo: prospera },
        { name: "Jhpiego", logo: jhpiego },
        { name: "Galeri 24", logo: galeri24 },
        { name: "Len", logo: len },
        { name: "darma", logo: darma },
        { name: "kinarya", logo: kinarya },
    ];


    return (
        <div className="homePages pb-10">
            <div className="container mx-auto px-4">
                {/* Beranda */}
                <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
                    <div className="box">
                        <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">We'll make IT simple for you
                            {/* <span className="font-bold text-sky-400 underline ">Tailwind CSS</span> */}
                        </h1>
                        <h2 className="text-2xl mt-5 mb-5">Don't Let IT complicates you, let us assist to make IT simple and best as a solution.</h2>
                        <a href="#social" className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full">Social Media
                            <i className="ri-eye-line ms-1"></i>
                        </a>
                    </div>
                    <div className="box">
                        <img src={AboutImage} alt="Hero Image" className="md:w-full w-[400px] mx-auto md:m-0" />

                    </div>
                </div>
                {/* About */}
                <div className="about grid md:grid-cols-2 grid-col-1s items-center md:gap-20 gap-10 md:pt-20 pt-32" id='about'>
                    <div className="box md:order-1 order-2">
                        <img src={about} alt="About Image" className="lg:w-[500px] w-[400px] md:m-0 mx-auto" />
                    </div>
                    <div className="box md:order-2 order-1">
                        <h1 className="lg:text-5xl/tight text-3xl font-medium mb-7">Learn more about us</h1>
                        <ul className="text-base/loose space-y-4">
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-green-500 text-xl" />
                                iNVENSI is a company to help Customers in the transformation of technology from traditional to digital technology.
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-green-500 text-xl" />
                                iNVENSI focuses on developing Systems and Applications to solved the obstacles experienced by customers.
                            </li>
                            <li className="flex items-center gap-3">
                                <FaCheckCircle className="text-green-500 text-xl" />
                                iNVENSI also as an answer to IT SOLUTIONS that required by customers. by bringing the latest technology in IT Infrastructure.
                            </li>
                        </ul>
                    </div>
                </div>


                {/* Layanan */}


                <div className="services pt-32" id='services'>
                    <h1 className='text-center lg:text-5xl/tight text-3xl font-medium mb-2'>Services</h1>
                    <p className='text-center'>We have product list that may help You sort things up, tidy it up, and make it better. Here is the list of Our product You may like to assess. If You have anything to ask, just Contact Us, so We can reach and assist You</p>
                    <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        <div className="box bg-gray-200 rounded-lg shadow p-4 text-center">
                            <img src={card1} alt="Service 1" className="w-full h-64 object-cover rounded-md" />
                            <h3 className='text-xl font-bold mt-6 mb-2'>Software Development</h3>
                            <p className='text-base/loose'>Need a system / application that fits your needs so that it can help business processes, we are the answer. We are ready to help you.</p>
                        </div>
                        <div className="box bg-gray-200 rounded-lg shadow p-4 text-center">
                            <img src={card2} alt="Service 2" className="w-full h-64 object-cover rounded-md" />
                            <h3 className='text-xl font-bold mt-6 mb-2'>IT Infrastructure</h3>
                            <p className='text-base/loose'>Best system always supported by best infrastructure. We provide You with total solution, to make it simple and better for You, no worry about the infrastructure, we deliver it for You, ready to use on a go.</p>
                        </div>
                        <div className="box bg-gray-200 rounded-lg shadow p-4 text-center">
                            <img src={card3} alt="Service 3" className="w-full h-64 object-cover rounded-md" />
                            <h3 className='text-xl font-bold mt-6 mb-2'>IT Consultant</h3>
                            <p className='text-base/loose'>Need IT solutions for your business? Consult with us! Our expert team provides tailored solutions, optimizing efficiency, security, and performance to ensure seamless operations and business growth.</p>
                        </div>
                    </div>
                </div>


                {/* Proyek */}
                <div className="proyek pt-32 mb-12" id="proyek">
                    <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">Partner</h1>
                    <p className="text-center">
                        iNVENSI has partnerships with global vendors to offer the best application and solutions to support your business.
                    </p>
                    <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                        <div className="box p-2 bg-gray-200 shadow rounded-xl">
                            <img src={Proyek1} alt="Proyek Image" className="w-full h-[220px] rounded-xl" />
                            <h3 className="text-xl font-bold mt-6 mb-2">HillStone</h3>
                            <p className="text-base/loose">
                                Infrastructure Protection solutions provide enterprises and service providers with the visibility and intelligence to comprehensively
                            </p>
                        </div>
                        <div className="box p-2 bg-gray-200 shadow rounded-xl">
                            <img src={Proyek2} alt="Proyek Image" className="w-full h-[220px] rounded-xl" />
                            <h3 className="text-xl font-bold mt-6 mb-2">Kapersky</h3>
                            <p className="text-base/loose">
                                Kaspersky’s deep threat intelligence and security expertise is constantly transforming into innovative security solutions and services to protect businesses.
                            </p>
                        </div>
                        <div className="box p-2 bg-gray-200 shadow rounded-xl">
                            <img src={Proyek3} alt="Proyek Image" className="w-full h-[220px] rounded-xl" />
                            <h3 className="text-xl font-bold mt-6 mb-2">Sangfor</h3>
                            <p className="text-base/loose">
                                Sangfor Technologies is a leading global vendor of IT infrastructure solutions, specializing in Cloud Computing & Network Security with a wide range of products & services including Hyper-Converged Infrastructure.
                            </p>
                        </div>
                        <div className="box p-2 bg-gray-200 shadow rounded-xl">
                            <img src={Proyek4} alt="Proyek Image" className="w-full h-[220px] rounded-xl" />
                            <h3 className="text-xl font-bold mt-6 mb-2">Dell</h3>
                            <p className="text-base/loose">
                                At Dell Technologies, we continue to innovate, developing technology so you’re always ready to move forward. Learn more about end-to-end technology solutions and digital transformation accelerators.
                            </p>
                        </div>
                        <div className="box p-2 bg-gray-200 shadow rounded-xl">
                            <img src={Proyek5} alt="Proyek Image" className="w-full h-[220px] rounded-xl" />
                            <h3 className="text-xl font-bold mt-6 mb-2">qlue</h3>
                            <p className="text-base/loose">
                                Build more efficient and effective organizations through IoT, AI, and mobile workforce implementation, enabling seamless automation, real-time data analytics, and enhanced decision-making.
                            </p>
                        </div>
                    </div>
                </div>

           
            </div>
        </div>
    )
}
