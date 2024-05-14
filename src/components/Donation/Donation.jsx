import { Link } from "react-router-dom";

const Donation = ({ donation }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg } = donation;

    const textColor = {
        color: text_button_bg,
    }

    const cardBg = {
        backgroundColor: card_bg,

    }
    const categoryBg = {
        backgroundColor: category_bg,
        width: "64px",
        height: "25px",
    }

    return (
        <div>
            <Link to={`/donation/${id}`}>
                <div style={cardBg} className={`w-80 h-72 rounded-xl`}>
                    <img className="w-full" src={picture} alt="" />
                    <div className={`ml-4`}>
                        <div style={categoryBg} className="mt-2 text-center rounded">
                            <small style={textColor} className="font-bold ">{category}</small>
                        </div>
                        <h2 style={textColor} className="mt-3 font-extrabold">{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Donation;