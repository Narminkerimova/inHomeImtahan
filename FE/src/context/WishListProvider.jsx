import { createContext } from "react"

export const WishlistContext= createContext()

function WishListProvider({children}) {
  return (
    <WishlistContext.Provider>
      {children}
      </WishlistContext.Provider>
  )
}

export default WishListProvider