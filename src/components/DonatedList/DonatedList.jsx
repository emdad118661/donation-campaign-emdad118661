import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utility/localstorage";
import List from "../List/List";


const DonatedList = () => {
    const donations = useLoaderData();

    const [donatedList, setDonatedList] = useState([]);
    const [displayDonatedList, setDisplayDonatedList] = useState([]);
    const [dataLength, setDataLength] = useState(4);



    useEffect(() => {
        const storedDonationIds = getStoredDonations();

        if (donations.length > 0) {
            const list = [];

            for (const id of storedDonationIds) {
                const donation = donations.find(donation => donation.id === id);
                if (donation) {
                    list.push(donation);
                }
                setDonatedList(list);
                setDisplayDonatedList(list);
            }
        }




    }, [donations])



    return (
        <div className="mx-auto max-w-7xl">
            <h1 className="text-3xl">Donated List: {donatedList.length}</h1>
            <br />
            <div className="grid grid-cols-2 gap-4">
                {
                    displayDonatedList.slice(0, dataLength).map(donation => <List key={donation.id} donation={donation}></List>)
                }
            </div>
            <br />
            <div className={dataLength === donations.length ? "hidden" : "text-center"}>
                <button onClick={() => setDataLength(donations.length)} className="btn bg-[#009444] text-white">See All</button>
            </div>
        </div>
    );
};

export default DonatedList;