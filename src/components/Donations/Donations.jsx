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
            <h2 className="text-3xl">Donations: {donations.length}</h2>
            <br />
            <div className="grid gap-6 md:grid-cols-4">
                {
                   donations.map(donation => <Donation key={donation.id} donation={donation}></Donation>)
                }
            </div>
        </div>
    );
};

export default Donations;