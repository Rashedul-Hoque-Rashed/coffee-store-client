import background from "../../assets/Images/15.jpg"
import logo from "../../assets/Images/logo1.png"

const Navbar = () => {
    return (
        <div style={{backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}} className="flex justify-center gap-4 py-4 items-center">
            <img className="w-20 h-24" src={logo} alt="" />
            <h1 className='text-6xl text-center text-[#FFF] font-rancho'>Espresso Emporium</h1>
        </div>
    );
};

export default Navbar;