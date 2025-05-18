import { useParams } from "react-router";
import { RequestsContext } from "../../context/RequestsProvider";
import { useContext, useEffect, useState } from "react";
import "./style.css"

function DetailPage() {
  const {_id}=useParams()
  const [detailProd, setDetailProd] = useState([])
  const {url} = useContext(RequestsContext)
  
   async function getElementById(url,id) {
      const res= await fetch(url+id)
      const data= await res.json()
      setDetailProd(data)
    }
    useEffect(() => {
      getElementById(url,_id)
    }, [])
    console.log(detailProd);
    
    
  return (
    <>
    <title>Detail Page</title>
    <div className="detailBox">
            <div className="card">
              <div className="card_image">
                <img src={detailProd.image} alt="image" />
              </div>
              <div className="card_title">
                <div className="card_name">
                  {detailProd.name}
                </div>
                <div className="card_price">
                  {detailProd.price}
                </div>
              </div>
              <div className="card_buttons">
                <button>ADD Basket</button>
                <button>ADD WishList</button>
              </div>
            </div>
    </div>
    </>
  )
}

export default DetailPage