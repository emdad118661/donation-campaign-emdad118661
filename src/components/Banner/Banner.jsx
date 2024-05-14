
const Banner = () => {

    const handleSearch = () =>{
        const inputValue = document.getElementById("search").value;
        console.log(inputValue);
    }
    return (
        <div className="relative w-full h-screen">
            <img src="https://images.unsplash.com/photo-1494783367193-149034c05e8f" alt="Background Image" className="absolute inset-0 object-cover w-full h-full filter blur-sm"/>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-white">I Grow By Helping People In Need</h1>
                    <br />
                    <div className="flex">
                    <input type="text" placeholder="Type here" id="search" className="w-full max-w-xl input input-bordered" />
                    <button onClick={handleSearch} className="btn bg-[#FF444A] text-white">search</button>
                    </div>
                </div>
        </div>
    );
};

export default Banner;