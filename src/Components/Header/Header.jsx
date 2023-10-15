import bg from "../../assets/Images/3.png"
import icon1 from "../../assets/Images/1.png"
import icon2 from "../../assets/Images/2.png"
import icon3 from "../../assets/Images/3 (2).png"
import icon4 from "../../assets/Images/4.png"

const Header = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="lg:h-[600px]">
            <div className="container mx-auto lg:pl-[600px] py-56  lg:pr-10">
                <h2 className="text-[#FFF] text-5xl font-rancho mb-4">Would you like a Cup of Delicious Coffee?</h2>
                <p className="text-[#FFF] font-raleway mb-8">
                    It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                </p>
                <button className="font-rancho text-[#242222] text-2xl bg-[#E3B577] py-2 px-5 hover:text-[#FFF] hover:bg-transparent hover:border">Learn More</button>
            </div>
        </div>
        <div className="bg-[#ECEAE3]">
        <div className="container mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-10 py-12">
            <div>
                <img src={icon1} alt="" />
                <h4 className="font-rancho text-4xl text-[#331A15] mt-4 mb-2">Awesome Aroma</h4>
                <p className="font-raleway text-[#1B1A1A]">
                    You will definitely be a fan of the design & aroma of your coffee
                </p>
            </div>
            <div>
                <img src={icon2} alt="" />
                <h4 className="font-rancho text-4xl text-[#331A15] mt-4 mb-2">High Quality</h4>
                <p className="font-raleway text-[#1B1A1A]">
                We served the coffee to you maintaining the best quality
                </p>
            </div>
            <div>
                <img src={icon3} alt="" />
                <h4 className="font-rancho text-4xl text-[#331A15] mt-4 mb-2">Pure Grades</h4>
                <p className="font-raleway text-[#1B1A1A]">
                The coffee is made of the green coffee beans which you will love
                </p>
            </div>
            <div>
                <img src={icon4} alt="" />
                <h4 className="font-rancho text-4xl text-[#331A15] mt-4 mb-2">Proper Roasting</h4>
                <p className="font-raleway text-[#1B1A1A]">
                Your coffee is brewed by first roasting the green coffee beans
                </p>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Header;