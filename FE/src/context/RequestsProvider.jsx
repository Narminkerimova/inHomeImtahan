import { createContext, useEffect, useState } from "react"

export const RequestsContext = createContext()
function RequestsProvider({ children }) {
  const url = "http://localhost:3000/products/"
  const [product, setProduct] = useState([])

  async function getElement(url) {
    const res = await fetch(url)
    const data = await res.json()
    setProduct(data)
  }

  async function deleteElement(url, id) {
    const res = await fetch(url + id, {
      method: "DELETE"
    })
    getElement(url)
  }

  async function postElement(url, body) {
    const res = fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
    const data= (await res).json()
    setProduct(data)
  }
 

  useEffect(() => {
    getElement(url)
  }, [])


  return (
    <RequestsContext.Provider value={{product,deleteElement,url,postElement}}>
      {children}
    </RequestsContext.Provider>
  )
}

export default RequestsProvider