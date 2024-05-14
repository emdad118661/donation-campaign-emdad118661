import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Donations = () => {
    const [donations, setDonations] = useState([]);
    const [displayDonations, setDisplayDonations] = useState([]);
    
    const handleSearch = () =>{
        const inputValue = document.getElementById("search").value
        if(inputValue == "Health"){
            const healthDonations = donations.filter(donation => donation.category === "Health")
            setDisplayDonations(healthDonations);
        }
        else if(inputValue == "Education"){
            const educationDonation = donations.filter(donation => donation.category === "Education")
            setDisplayDonations(educationDonation);
        }
        else if(inputValue == "Clothing"){
            const clothingDonation = donations.filter(donation => donation.category === "Clothing")
            setDisplayDonations(clothingDonation);
        }
        else if(inputValue == "Food"){
            const foodDonation = donations.filter(donation => donation.category === "Food")
            setDisplayDonations(foodDonation);
        }
        else if(inputValue == "All"){
            setDisplayDonations(donations);
        }
        else{
            toast("Category not found. Try Again");
            toast("Always use first letter capital.");
        }
        

    }

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json(data))
            .then(data => setDonations(data))

            const inputValue = document.getElementById("search").value

            if(inputValue === ""){
                setDisplayDonations(donations);
            }
    }, [donations])


    

    

    return (
        <div>
            <div className="relative w-full h-screen">
                <img src="https://images.unsplash.com/photo-1494783367193-149034c05e8f" alt="Background Image" className="absolute inset-0 object-cover w-full h-full filter blur-sm" />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-white">I Grow By Helping People In Need</h1>
                    <br />
                    <div className="flex">
                        <input type="text" placeholder="Search Category..." id="search" className="w-full max-w-xl input input-bordered" />
                        <button onClick={handleSearch} className="btn bg-[#FF444A] text-white">search</button>
                    </div>
                </div>
            </div>
            <br />
            <div className="mx-auto max-w-7xl">
                <h2 className="text-3xl">Donations: {donations.length}</h2>
                <br />
                <div className="grid gap-6 md:grid-cols-4">
                    {
                        displayDonations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
                    }
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Donations;