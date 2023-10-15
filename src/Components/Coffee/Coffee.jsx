import bg11 from "../../assets/Images/cup.png"
import bg2 from "../../assets/Images/5.png"
import { FaCoffee } from "react-icons/fa"
import { AiFillEye } from "react-icons/ai"
import { BiSolidPencil } from "react-icons/bi"
import { MdDelete } from "react-icons/md"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2"

const Coffee = () => {

    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/coffee')
            .then(res => res.json())
            .then(data => setCoffees(data))
    }, [])

    const handelDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`,{
                    method: 'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount > 0){
                        Swal.fire(
                            'Deleted!',
                            'Your coffee has been deleted.',
                            'success'
                          )
                          const remaining = coffees.filter(cof => cof._id !== _id);
                          setCoffees(remaining);
                    }
                })             
            }
          })
    }


    return (
        <div style={{ backgroundImage: `url(${bg11}), url(${bg2})`, backgroundRepeat: "no-repeat, no-repeat", backgroundPosition: "top left, bottom right" }} className="my-28">
            <div className="container mx-auto px-10">
                <p className="text-center text-xl text-[#1B1A1A] font-raleway">--- Sip & Savor ---</p>
                <h4 style={{ textShadow: "2px 2px 10px" }} className="text-[#331A15] text-5xl font-rancho mt-2 text-center mb-4">Our Popular Products</h4>
                <div className="flex justify-center">
                    <button style={{ textShadow: "2px 2px 10px #331A15" }} className="text-2xl font-rancho text-[#FFF] bg-[#E3B577] border-2 border-[#331A15] py-2 px-5 rounded-lg hover:bg-transparent flex items-center gap-2 mb-10"><Link to="/add-coffee">Add Coffee</Link> <FaCoffee className="text-[#331A15]" /></button>
                </div>
            </div>
            <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    coffees.map(coffee => <div key={coffee._id} className="flex justify-between items-center bg-[#F5F4F1] rounded-md py-7 px-10">
                        <img className="w-44 h-52" src={coffee.photo} alt="" />
                        <div>
                            <p className="font-raleway text-[#5C5B5B] text-xl"><span className="text-xl font-semibold text-[#1B1A1A]">Name: </span>{coffee.name}</p>
                            <p className="font-raleway text-[#5C5B5B] text-xl my-2"><span className="text-xl font-semibold text-[#1B1A1A]">Chef: </span>{coffee.chef}</p>
                            <p className="font-raleway text-[#5C5B5B] text-xl"><span className="text-xl font-semibold text-[#1B1A1A]">Price: </span>{coffee.price} Taka</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <button className="bg-[#D2B48C] hover:bg-[#705532] p-2.5 rounded-lg"><Link to={`/coffee/${coffee._id}`}><AiFillEye className="w-6 h-6 text-white" /></Link></button>
                            <button className="bg-[#3C393B] hover:bg-[#978b93] p-2.5 rounded-lg"><Link to={`/update/${coffee._id}`}><BiSolidPencil className="w-6 h-6 text-white" /></Link></button>
                            <button onClick={() => handelDelete(coffee._id)} className="bg-[#EA4744] hover:bg-[#942927] p-2.5 rounded-lg"><MdDelete className="w-6 h-6 text-white" /></button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Coffee;