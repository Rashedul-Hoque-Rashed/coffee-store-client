import { Link } from "react-router-dom";
import err from "../../assets/Images/404.gif"
import { BsArrowLeft } from "react-icons/bs";

const Error = () => {
    return (
        <div className="container mx-auto px-10">
            <button className="my-12 py-4 px-3 rounded-lg hover:bg-[#D2B48C]">
                <Link to="/" className="flex items-center gap-4"><BsArrowLeft className="text-[#331A15] w-6 h-6" /> <span style={{ textShadow: "2px 2px 10px" }} className="text-3xl text-[#374151] font-rancho">
                    Back to home
                </span></Link>
            </button>
            <div className="flex justify-center flex-col items-center">
            <img className="w-1/2" src={err} alt="" />
            <h4 className="text-3xl font-rancho">Oops!!</h4>
            <p className="text-xl font-rancho">Page Not Found</p>
            </div>
        </div>
    );
};

export default Error;