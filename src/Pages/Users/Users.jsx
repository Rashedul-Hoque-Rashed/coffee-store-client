import { useLoaderData } from "react-router-dom";
import { MdDelete } from "react-icons/md"
import Swal from "sweetalert2";
import { useState } from "react";

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUser] = useState(loadedUsers);

    const handelDelete = (id) => {
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
                fetch(`https://coffee-store-server-khcf7qiid-rashedul-hoques-projects.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = users.filter(user => user._id !== id);
                            setUser(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className="container mx-auto px-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Last Login Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map(user => <tr key={user._id}>
                                <th>
                                    1
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.creationTime
                                            }</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>{user.
                                    lastSignInTime
                                }</td>
                                <th>
                                    <button onClick={() => handelDelete(user._id)} className="btn btn-ghost btn-xs"><MdDelete className="w-6 h-6" /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Users;