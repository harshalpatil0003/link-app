import React, { useEffect, useState } from "react";
import {
    User,
    Mail,
    Phone,
    MessageCircle,
    Bell,
    Smartphone,
    LogOut,
    Edit2,
    Edit3,
    Delete,
    Trash2,
} from "lucide-react";
import FallbackPhoto from "./../../assets/FallBackUserImg.png";
import Navbarnew from "../Navb";

const Profile = () => {
    const [user, setUser] = useState();

    const [pushNotif, setPushNotif] = useState(true);
    const [smsNotif, setSmsNotif] = useState(false);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("User") || localStorage.getItem("token"));
        if (userData) {
            console.log(userData)
            setUser(userData);
        }
    }, []);

    return (
        <>
        <Navbarnew/>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 flex flex-col justify-center items-center py-8 px-2">
            <div className="w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl mt-8 shadow-xl p-6">
                {/* Avatar and Name */}
                <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900 flex items-center justify-center text-3xl font-bold text-fuchsia-700 dark:text-white mb-2 overflow-hidden">
                        {user?.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full"
                            />
                        ) : (
                            // (user?.fullname || user?.displayName || "U")[0]
                             <img
                                src={FallbackPhoto}
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full"
                            />
                        )}
                    </div>
                    <div className="text-xl font-semibold text-gray-900 dark:text-white">{user?.fullname || user?.displayName}</div>
                    <div className="text-xs text-gray-400 mt-2 py-1 px-3 bg-gray-800 rounded-md "> Joined on : {" "}
                        {user?.createdAt ? new Date(user.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : ""}.
                    </div>
                </div>

                {/* General Info */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl relative p-4 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                        <User className="w-5 h-5 text-fuchsia-600" />
                        <span className="text-gray-800 dark:text-gray-200">{user?.fullname || user?.displayName}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-800 dark:text-gray-200">{user?.email}</span>
                    </div>

                    <a href="/edit-profile" className=" absolute top-2 right-3 "><Edit3 className="w-5 h-5 text-white cursor-pointer" /></a>
                </div>

                {/* Notifications */}
                {/* <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-6">
                    <div className="font-semibold text-gray-900 dark:text-white mb-4">Notifications</div>
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <Bell className="w-5 h-5 text-fuchsia-600" />
                            <span className="text-gray-800 dark:text-gray-200">Push notifications</span>
                        </div>
                        <label className="inline-flex items-center relative cursor-pointer">
                            <input
                                type="checkbox"
                                checked={pushNotif}
                                onChange={() => setPushNotif((v) => !v)}
                                className="sr-only peer "
                            />
                            <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-fuchsia-600 transition"></div>
                            <div className={`absolute w-4 h-4 bg-white rounded-full shadow -translate-y-1/2 left-1 top-1/2 transition peer-checked:translate-x-4`}></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Smartphone className="w-5 h-5 text-blue-600" />
                            <span className="text-gray-800 dark:text-gray-200">SMS notifications</span>
                        </div>
                        <label className="inline-flex items-center relative cursor-pointer">
                            <input
                                type="checkbox"
                                checked={smsNotif}
                                onChange={() => setSmsNotif((v) => !v)}
                                className="sr-only peer"
                            />
                            <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 transition"></div>
                            <div className={`absolute w-4 h-4 bg-white rounded-full shadow -translate-y-1/2 left-1 top-1/2 transition peer-checked:translate-x-4`}></div>
                        </label>
                    </div>
                </div> */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-6 flex flex-col gap-3">
                    <button className="w-full flex items-center justify-center gap-2 py-2 rounded-xl dark:text-white font-semibold bg-blue-600 hover:bg-blue-700 transition"
                    // onClick={handleEditProfile}
                    ><Edit2 className="w-5 h-5" />Edit Profile</button>
                    <button className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-red-600 font-semibold bg-red-50 dark:bg-red-900 hover:bg-red-100 dark:hover:bg-red-800 transition"
                    // onClick={handleDeleteAccount}
                    ><Trash2 className="w-5 h-5" />Delete Account</button>
                </div>
                <button className="w-full py-3 rounded-xl dark:text-white font-semibold bg-fuchsia-50 dark:bg-indigo-900 hover:bg-indigo-100 dark:hover:bg-indigo-700 transition mb-2"
                // onClick={onLogout}
                ><LogOut className="inline-block mr-2 w-5 h-5" />Sign out
                </button>
            </div>
        </div>
        </>
    );
};



const ProfileDesktop = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("User") || localStorage.getItem("token"));
        if (userData) setUser(userData);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-fuchsia-50 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center py-12 px-4">
            <div className="w-full max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-10 flex flex-row gap-10">
                {/* Avatar and Name */}
                <div className="flex flex-col items-center w-1/3 border-r border-gray-200 dark:border-gray-800 pr-8">
                    <div className="w-28 h-28 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900 flex items-center justify-center text-4xl font-bold text-fuchsia-700 dark:text-white mb-4 overflow-hidden">
                        {user?.photoURL ? (
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="w-full h-full object-cover rounded-full"
                            />
                        ) : (
                            (user?.fullname || user?.displayName || "U")[0]
                        )}
                    </div>
                    <div className="text-2xl font-semibold text-gray-900 dark:text-white">{user?.fullname || user?.displayName}</div>
                    <div className="text-xs text-gray-400 mt-2 py-1 px-3 bg-gray-800 rounded-md">
                        Joined on:{" "}
                        {user?.createdAt
                            ? new Date(user.createdAt).toLocaleDateString(undefined, {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })
                            : ""}
                    </div>
                </div>

                {/* Info & Actions */}
                <div className="flex-1 flex flex-col gap-8">
                    {/* General Info */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl relative p-6 mb-2">
                        <div className="flex items-center gap-3 mb-4">
                            <User className="w-5 h-5 text-fuchsia-600" />
                            <span className="text-gray-800 dark:text-gray-200">{user?.fullname || user?.displayName}</span>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <Mail className="w-5 h-5 text-blue-600" />
                            <span className="text-gray-800 dark:text-gray-200">{user?.email}</span>
                        </div>
                        
                    </div>

                    {/* Actions */}
                    <div className="flex gap-4">
                        <button
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold bg-blue-600 hover:bg-blue-700 transition"
                        >
                            <Edit2 className="w-5 h-5" />
                            Edit Profile
                        </button>
                        <button
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-red-600 font-semibold bg-red-50 dark:bg-red-900 hover:bg-red-100 dark:hover:bg-red-800 transition"
                        >
                            <Trash2 className="w-5 h-5" />
                            Delete Account
                        </button>
                        <button
                            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl dark:text-white text-fuchsia-700 font-semibold bg-fuchsia-50 dark:bg-fuchsia-900 hover:bg-fuchsia-100 dark:hover:bg-fuchsia-800 transition"
                        >
                            <LogOut className="w-5 h-5" />
                            Sign out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
export { ProfileDesktop };