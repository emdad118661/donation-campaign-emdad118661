import { Link } from "react-router-dom";

const List = ({ donation }) => {
    const { id, picture, title, category, category_bg, card_bg, text_button_bg, price } = donation;

    const btnColor = {
        backgroundColor: text_button_bg,
        color: "white",
        width: "141px",
        height: "40px",
        borderRadius: "5px"
    }

    const cardBg = {
        backgroundColor: card_bg,

    }
    const categoryBg = {
        backgroundColor: category_bg,
        color: text_button_bg,
        width: "64px",
        height: "25px",
    }

    const textColor = {
        color: text_button_bg,
    }
    return (
        <div style={cardBg} className="card card-side">
            <figure><img className="h-full" src={picture} alt="Movie" /></figure>
            <div className="card-body">
                <small className="pt-1 text-center rounded" style={categoryBg}>{category}</small>
                <h2 className="card-title">New movie is released!</h2>
                <p style={textColor}>{price}</p>
                <div>
                    <Link to={`/donation/${id}`}><button style={btnColor}>View Details</button></Link>
                </div>
            </div>

        </div>
    );
};

export default List;