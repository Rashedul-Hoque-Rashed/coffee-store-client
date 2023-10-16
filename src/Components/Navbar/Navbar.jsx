import { useContext } from "react";
import background from "../../assets/Images/15.jpg"
import logo from "../../assets/Images/logo1.png"
import { AuthContext } from "../../Provider/Provider";
import { Link } from "react-router-dom";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handelLogOut = () => {
        logOut()
            .then(res => console.log(res))
            .catch(err => console.error(err.message))
    }

    return (
        <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="flex justify-center gap-4 py-4 px-10 items-center ">
            <div className="flex-1 flex justify-center text-center items-center">
                <img className="w-20 h-24" src={logo} alt="" />
                <h1 className='text-6xl text-center text-[#FFF] font-rancho'>Espresso Emporium</h1>
            </div>
            {
                user ? <div className="flex-1 text-end">
                    <button onClick={handelLogOut} className="text-[#331A15] text-2xl font-rancho border border-[#331A15] bg-[#D2B48C] px-4 py-2 rounded-md  hover:text-[#FFF]">Sign Out</button>
                </div> : <div className="flex-1 text-end">
                    <button className="text-[#331A15] text-2xl font-rancho border border-[#331A15] bg-[#D2B48C] px-4 py-2 rounded-md  hover:text-[#FFF]"><Link to="/login">Sign In</Link></button>
                </div>
            }
        </div>
    );
};

export default Navbar;