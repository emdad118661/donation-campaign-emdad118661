import { useLoaderData, useParams } from "react-router-dom";
import '../../utility/localstorage';
import {saveStoredDonations} from "../../utility/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt);

    console.log(donation);
    const handleDonation = () =>{
        saveStoredDonations(idInt);
        toast("Donation done already.");
    }

    const buttonBg = {
        backgroundColor: donation.text_button_bg,
    }
    return (
        <div>
            <div className="mx-auto max-w-7xl">
                <article className="relative flex flex-col justify-end  px-8 pt-[500px] pb-8 overflow-hidden rounded isolate w-full">
                    <img src={donation.picture} alt="University of Southern California" className="absolute inset-0 object-cover w-full h-full"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                        <div className="z-10 overflow-hidden text-sm leading-6 gap-y-1"><button onClick={handleDonation} style={buttonBg} className="text-white btn">Donate: {donation.price}</button></div>
                </article>
                <br />
                <h1 className="text-5xl font-extrabold">{donation.title}</h1>
                <br />
                <p>{donation.description}</p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default DonationDetails;