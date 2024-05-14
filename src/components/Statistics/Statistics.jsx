 import { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
 import { getStoredDonations } from '../../utility/localstorage';
 import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
     const donations = useLoaderData();

     const [donatedList, setDonatedList] = useState([]);
    // // const [displayDonatedList, setDisplayDonatedList] = useState([]);

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
                 // setDisplayDonatedList(list);
             }
         }
     }, [donations])

    const data = [
        { name: "Total Donations", value: 12 },
        { name: "Donated", value: donatedList.length },
    ];

    const COLORS = ['#FF444A', '#00C49F'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };


    return (
        <div className='mx-auto max-w-7xl' >
            <h1>Statistics: {donatedList.length}</h1>

            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
            </PieChart>

            <div className='flex'>
                <h2 className='text-white bg-[#00C49F]'>Your Donation</h2>
                <h2 className='text-white bg-[#FF444A] ml-4'>Total Donation</h2>
            </div>

        </div >
    )
};







export default Statistics;