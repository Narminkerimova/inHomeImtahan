import { createContext } from "react"

export const BasketContext= createContext()

function BasketProvider({children}) {
  return (
    <BasketContext.Provider>
      {children}
      </BasketContext.Provider>
  )
}

export default BasketProvider