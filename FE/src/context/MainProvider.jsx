import { createContext } from "react"
import BasketProvider from "./BasketProvider"
import WishListProvider from "./WishListProvider"
import RequestProvider from "./RequestsProvider"

export const MainContext = createContext()

function MainProvider({ children }) {
  return (
    <RequestProvider>
      <BasketProvider>
        <WishListProvider>
          {children}
        </WishListProvider>
      </BasketProvider>
    </RequestProvider>
  )
}

export default MainProvider