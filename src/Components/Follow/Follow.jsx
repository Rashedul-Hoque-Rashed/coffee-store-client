import img1 from "../../assets/Images/Rectangle 9.png"
import img2 from "../../assets/Images/Rectangle 10.png"
import img3 from "../../assets/Images/Rectangle 11.png"
import img4 from "../../assets/Images/Rectangle 12.png"
import img5 from "../../assets/Images/Rectangle 13.png"
import img6 from "../../assets/Images/Rectangle 14.png"
import img7 from "../../assets/Images/Rectangle 15.png"
import img8 from "../../assets/Images/Rectangle 16.png"

const Follow = () => {
    return (
        <div className="container mx-auto px-10 my-28">
            <p className="text-center text-xl font-raleway text-[#1B1A1A] mb-2">Follow Us Now</p>
            <h4 style={{ textShadow: "2px 2px 10px" }} className="text-[#331A15] text-5xl text-center font-rancho mb-12">Follow on Instagram</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <img className="w-72 h-80" src={img1} alt="" />
                <img className="w-72 h-80" src={img2} alt="" />
                <img className="w-72 h-80" src={img3} alt="" />
                <img className="w-72 h-80" src={img4} alt="" />
                <img className="w-72 h-80" src={img5} alt="" />
                <img className="w-72 h-80" src={img6} alt="" />
                <img className="w-72 h-80" src={img7} alt="" />
                <img className="w-72 h-80" src={img8} alt="" />
            </div>
        </div>
    );
};

export default Follow;