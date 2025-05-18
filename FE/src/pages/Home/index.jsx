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
      <div className="container">
        <Cards/>
      </div>

    </>

  )
}

export default Home