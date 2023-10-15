import logo from "../../assets/Images/logo1.png"
import footerBg1 from "../../assets/Images/13.jpg"
import footerBg2 from "../../assets/Images/24.jpg"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <div style={{ backgroundImage: `url(${footerBg1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-20 pt-20 pb-12 px-10">
                <div>
                    <img className="w-20 h-24" src={logo} alt="" />
                    <h4 style={{textShadow:"2px 2px 10px"}} className="text-[#331A15] text-5xl font-rancho mt-6 mb-8">Espresso Emporium</h4>
                    <p className="text-[#1B1A1A] text-xl font-raleway">
                        Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.
                    </p>
                    <div className="flex gap-5 my-8">
                        <FaFacebook className="text-[#331A15] w-10 h-10" />
                        <FaTwitter className="text-[#331A15] w-10 h-10" />
                        <FaInstagram className="text-[#331A15] w-10 h-10" />
                        <FaLinkedin className="text-[#331A15] w-10 h-10" />
                    </div>
                    <h4 style={{textShadow:"2px 2px 10px"}} className="text-[#331A15] text-5xl font-rancho mb-8">Get in Touch</h4>
                    <div className="flex gap-6 items-center">
                        <FaPhoneAlt className="w-5 h-5 text-[#331A15]"/>
                        <p className="text-[#1B1A1A] text-xl font-raleway">+88 01533 333 333</p>
                    </div>
                    <div className="flex gap-6 items-center my-4">
                        <FaEnvelope className="w-5 h-5 text-[#331A15]"/>
                        <p className="text-[#1B1A1A] text-xl font-raleway">info@gmail.com</p>
                    </div>
                    <div className="flex gap-6 items-center">
                        <FaMapMarkerAlt className="w-5 h-5 text-[#331A15]"/>
                        <p className="text-[#1B1A1A] text-xl font-raleway">72, Wall street, King Road, Dhaka</p>
                    </div>
                </div>
                <div>
                <h4 style={{textShadow:"2px 2px 10px"}} className="text-[#331A15] text-5xl font-rancho mb-8">Connect with Us</h4>
                <div className="flex flex-col gap-4">
                <input className="w-96 h-10 p-5 outline-[#E3B577]" type="text" name="name" placeholder="Name"  />
                <input className="w-96 h-10 p-5 outline-[#E3B577]" type="email" name="email"  placeholder="Email"/>
                <textarea className="p-5 outline-[#E3B577]" name="message" cols="10" rows="5" placeholder="Message"></textarea>
                </div>
                <button className="text-[#331A15] text-2xl font-rancho mt-6 py-2 px-5 rounded-full border border-[#331A15]">Send Message</button>  
                </div>
            </div>
            <div style={{backgroundImage:`url(${footerBg2})`}}>
                <p className="text-center text-xl font-rancho text-[#FFF]"><small>Copyright Espresso Emporium ! All Rights Reserved</small></p>
            </div>
        </div>
    );
};

export default Footer;