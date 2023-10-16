import { BsArrowLeft } from "react-icons/bs";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {

    const coffee = useLoaderData();
    const { _id, name, chef, supplier, taste, category, details, photo, price } = coffee;

    const handelUpdateCoffee = e => {
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

        const updateCoffee = { name, chef, supplier, taste, category, details, photo, price };

        fetch(`https://coffee-store-server-khcf7qiid-rashedul-hoques-projects.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Coffee updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
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
                <h4 style={{ textShadow: "2px 2px 10px" }} className="text-[#374151] text-5xl text-center font-rancho">Update Existing Coffee Details</h4>
                <p className="text-center font-raleway text-lg text-[#1B1A1A] px-11 my-8">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                <form onSubmit={handelUpdateCoffee}>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Chef</span>
                            </label>
                            <input type="text" name="chef"
                                defaultValue={chef} placeholder="Enter coffee chef" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Supplier</span>
                            </label>
                            <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Taste</span>
                            </label>
                            <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Category</span>
                            </label>
                            <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Details</span>
                            </label>
                            <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Photo</span>
                            </label>
                            <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-xl font-semibold font-raleway text-[#1B1A1A]">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={price} placeholder="Enter coffee price" className="input input-bordered w-full text-[#1B1A1A] font-raleway" required />
                        </div>
                    </div>
                    <input className="w-full text-[#331A15] text-2xl font-rancho border border-[#331A15] bg-[#D2B48C] py-2 rounded-md mt-6 hover:text-[#FFF]" type="submit" value="Update Coffee Details" />
                </form>
            </div>
        </div>
    );
};

export default Update;