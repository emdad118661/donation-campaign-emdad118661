import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Donation from "../Donation/Donation";


const Donations = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json(data))
            .then(data => setDonations(data))

    }, [])

    return (
        <div>
            <h2 className="text-6xl">Donations: {donations.length}</h2>
            <br />
            <div className="grid md:grid-cols-4 gap-6">
                {
                   donations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
                }
            </div>
        </div>
    );
};

export default Donations;