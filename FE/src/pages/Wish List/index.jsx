import { useContext } from "react"
import { Link } from "react-router";
import { WishlistContext } from "../../context/WishListProvider"

function WishList() {
  const {wish,calcTotalWish} = useContext(WishlistContext)
  if (wish.length===0) {
    return <p>Hele wishlistinizde hecne yoxdur</p>
  }
  return (
    <>
      <title>Wish List</title>
      <h1>Total {calcTotalWish()}</h1>
      <div className="container">
        {
          wish.map((prod) => (
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
                <Link to={`detail/${prod._id}`}>
                <button>INFO</button>
                </Link>
                {/* <button onClick={()=>removeBasket(prod)}>Remove Basket</button> */}
              </div>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default WishList