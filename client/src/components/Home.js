import React, { useEffect, useState } from "react";
import '../App.css'
import Search from "./Search";
import BusinessList from "./BusinessList";

// import { Container } from "semantic-ui-react";

function Home() {

    const [searchTerm, setSearchTerm] = useState("");
    const [businesses, setBusinesses] = useState([])

    useEffect(() => { 
        const getBusinesses = async () => {
            let req = await fetch("http://localhost:3000/businesses")
            let res = await req.json()
            console.log(res)
            setBusinesses(res)
        }
        getBusinesses()
      }, []);


      const displayedBusinesses = businesses.filter((business) => {
        return business.name.toLowerCase().includes(searchTerm.toLowerCase());
      });

    return (
        <div className="homepage">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} displayedBusinesses={displayedBusinesses}/>
        {/* <Container> */}
            <h1>Support Local Immigrant-Owned Small Businesses</h1>
            <img alt="Happy immigrants" src="https://thumbs.dreamstime.com/b/family-immigrants-usa-family-immigrants-usa-134858326.jpg"/>
            <br />
        {/* </Container> */}

        <BusinessList 
            businesses = {displayedBusinesses}/>
        </div>
    );
}

export default Home;