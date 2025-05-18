import { createContext, useState } from "react"

export const WishlistContext= createContext()

function WishListProvider({children}) {
  const [wish, setWish] = useState([])

   function addWish(obj) {
    const addedWish = wish.find(x => x._id === obj._id)
    if (addedWish) {
      return
    }
    else {
      setWish([...wish,{...obj}])
    }
  }

   function calcTotalWish() {
    return wish.reduce((total, initial) => (
      total + initial.price), 0)
  }
  
  return (
    <WishlistContext.Provider value={{addWish,wish,calcTotalWish}}>
      {children}
      </WishlistContext.Provider>
  )
}

export default WishListProvider