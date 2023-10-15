import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {

    const coffee = useLoaderData();

    return (
        <div className="container mx-auto px-10">
            <button className="my-12 py-4 px-3 rounded-lg hover:bg-[#D2B48C]">
                <Link to="/" className="flex items-center gap-4"><BsArrowLeft className="text-[#331A15] w-6 h-6" /> <span style={{ textShadow: "2px 2px 10px" }} className="text-3xl text-[#374151] font-rancho">
                    Back to home
                </span></Link>
            </button>
            <div className="bg-[#F4F3F0] py-16 px-24 rounded-md mb-28 flex flex-col md:flex-row justify-center items-center gap-32"> 
            <div>
            <img className="w-72 h-96" src={coffee.photo} alt="" />
            </div>
            <div>
            <h4 style={{textShadow:"2px 2px 10px"}} className="text-[#331A15] text-5xl font-rancho mt-6 mb-8">Niceties</h4>
            <p className="font-raleway text-[#5C5B5B] text-xl my-3"><span className="text-xl font-semibold text-[#1B1A1A]">Name: </span>{coffee.name}</p>
            <p className="font-raleway text-[#5C5B5B] text-xl my-3"><span className="text-xl font-semibold text-[#1B1A1A]">Chef: </span>{coffee.chef}</p>
            <p className="font-raleway text-[#5C5B5B] text-xl my-2"><span className="text-xl font-semibold text-[#1B1A1A]">Supplier: </span>{coffee.supplier}</p>
            <p className="font-raleway text-[#5C5B5B] text-xl my-2"><span className="text-xl font-semibold text-[#1B1A1A]">Taste: </span>{coffee.taste}</p>
            <p className="font-raleway text-[#5C5B5B] text-xl my-2"><span className="text-xl font-semibold text-[#1B1A1A]">Category: </span>{coffee.category}</p>
            <p className="font-raleway text-[#5C5B5B] text-xl my-2"><span className="text-xl font-semibold text-[#1B1A1A]">Details: </span>{coffee.details}</p>
            </div>
            </div>
        </div>
    );
};

export default Details;