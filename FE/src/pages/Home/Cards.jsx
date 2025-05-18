import { Link } from "react-router";
import { BasketContext } from "../../context/BasketProvider";
import { WishlistContext } from "../../context/WishListProvider";
import { useContext } from "react"
import { RequestsContext } from "../../context/RequestsProvider"

function Cards() {
    const { product } = useContext(RequestsContext)
    const { addBasket, checkIsBasket, removeBasket } = useContext(BasketContext)
    const { addWish } = useContext(WishlistContext)
    return (
        <>
        {
            product.map((prod) => (
                <div className="card" key={prod._id}>
                    <div className="card_image">
                        <img src={prod.image} alt="image" />
                    </div>
                    <div className="card_title">
                        <div className="card_name">
                            {prod.name}
                        </div>
                        <div className="card_price">
                            {prod.price}
                        </div>
                    </div>
                    <div className="card_buttons">
                        {
                            checkIsBasket(prod) ? <button onClick={() => removeBasket(prod)}>Remove Basket</button> : <button onClick={() => addBasket(prod)}>ADD Basket</button>
                        }
                        <button onClick={() => addWish(prod)}>ADD WishList</button>
                        <Link to={`detail/${prod._id}`}>
                            <button>INFO</button>
                        </Link>
                    </div>
                </div>
            ))
        }
        </>
        
    )
}

export default Cards