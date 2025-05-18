import { createContext, useState } from "react"

export const BasketContext = createContext()

function BasketProvider({ children }) {
  const [basket, setBasket] = useState([])

  function addBasket(obj) {
    const addedBasket = basket.find(x => x._id === obj._id)
    if (addedBasket) {
      addedBasket.count++
      setBasket([...basket])
    }
    else {
      setBasket([...basket, { ...obj, count: 1 }])
    }
  }

  function increaseBasket(id) {
    const addedBasket = basket.find(x => x._id === id)
    if (addedBasket.count === 1) {
      return
    }
    else {
      addedBasket.count--
      setBasket([...basket])
    }
  }

  function calcTotalBasket() {
    return basket.reduce((total, initial) => (
      total + (initial.price * initial.count)), 0)
  }

  function checkIsBasket(obj) {
    return basket.some(x => x._id === obj._id)
  }

  function removeBasket(obj) {
   setBasket(basket.filter(x=>x._id!==obj._id))   
  }

  return (
    <BasketContext.Provider value={{ basket, addBasket, increaseBasket, calcTotalBasket, checkIsBasket,removeBasket }}>
      {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider