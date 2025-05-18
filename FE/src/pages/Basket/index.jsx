import { useContext } from 'react'
import { BasketContext } from '../../context/BasketProvider'
import { Link } from "react-router";

function Basket() {
  const {basket,addBasket,increaseBasket,calcTotalBasket,removeBasket} = useContext(BasketContext)
  if (basket.length===0) {
    return <p>Hele basketde hecne yoxdur</p>
  }
  return (
    <>
      <title>Basket</title>
      <h1>Total {calcTotalBasket()}</h1>
      <div className="container">
        {
          basket.map((prod) => (
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
                <button onClick={()=>addBasket(prod)}>+</button>
                <div>Count:{prod.count}</div>
                <button onClick={()=>increaseBasket(prod._id)}>-</button>
                <Link to={`detail/${prod._id}`}>
                <button>INFO</button>
                </Link>
                <button onClick={()=>removeBasket(prod)}>Remove Basket</button>
              </div>
            </div>
          ))
        }
      </div>

    </>
  )
}

export default Basket