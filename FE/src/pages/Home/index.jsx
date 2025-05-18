import { Link } from "react-router"
import Cards from "./Cards"
import "./style.css"

function Home() {

  return (
    <>
      <title>Home Page</title>
      <section className="hero">
        <h1>We Serve fresh vegetables & fruits</h1>
        <p>We deliver organic vegetables & friuts</p>
        <Link to={"#"} className="heroLink">View Details</Link>
      </section>
      <section className="products">
        <h6>Featured Products</h6>
        <h3>Our Products</h3>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        <div className="container">
        <Cards/>
      </div>
      </section>
      

    </>

  )
}

export default Home