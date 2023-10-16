import { BsArrowLeft } from "react-icons/bs"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handelAddCoffee = e => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const price = form.price.value;

        const newCoffee = { name, chef, supplier, taste, category, details, photo, price };

        fetch('https://coffee-store-server-khcf7qiid-rashedul-hoques-projects.vercel.app/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Coffee added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                form.reset()
            })

    }


    return (
        <div className="container mx-auto px-10">
            <button className="my-12 py-4 px-3 rounded-lg hover:bg-[#D2B48C]">
                <Link to="/" className="flex items-center gap-4"><BsArrowLeft className="text-[#331A15] w-6 h-6" /> <span style={{ textShadow: "2px 2px 10px" }} className="text-3xl text-[#374151] font-rancho">
                    Back to home
                </span></Link>
            </button>
            <div className="bg-[#F4F3F0] py-16 px-24 rounded-md mb-28">
                <h4 style={{ textShadow: "2px 2px 10px" }} className="text-[#374151] text-5xl text-center font-rancho">Add New Coffee</h4>
                <p className="text-center font-raleway text-lg text-[#1B1A1A] px-11 my-8">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                <form onSubmit={handelAddCoffee}>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Chef</span>
                            </label>
                            <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Supplier</span>
                            </label>
                            <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Taste</span>
                            </label>
                            <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Details</span>
                            </label>
                            <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Enter coffee price" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                    </div>
                    <input className="w-full text-[#331A15] text-2xl font-rancho border border-[#331A15] bg-[#D2B48C] py-2 rounded-md mt-6 hover:text-[#FFF]" type="submit" value="Add Coffee" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;