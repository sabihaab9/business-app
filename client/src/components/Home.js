import React, { useState } from "react";
import '../App.css'
import Search from "./Search";
import Filters from "./Filters";
import BusinessList from "./BusinessList";
//import UserProfile from "./UserProfile";

// import { Container } from "semantic-ui-react";

function Home({addToFavorites, businessList, setBusinessList}) {

    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({category: "all"})


    function handleChangeCategory(category) {
        setFilters({ category: category });
      }

      function handleFindBusinessClick() {
        let url = "http://localhost:3000/biz/";
    
        console.log(filters.category)

            if (filters.category !== "all") {
            url += `${filters.category}`;
            }

            console.log(`new url: ${url}`)

            fetch(url)
            .then((r) => r.json())
            .then((businesses) => {
              setBusinessList(businesses);
            });
        }

    
        // shows filtered list 
      const showBusinessList = businessList.filter(business => business.name.toLowerCase().includes(searchTerm.toLowerCase()))




      

    return (
        <div className="homepage">
        <h1>Support Local Immigrant-Owned Small Businesses</h1>
        <h3>Search by Name</h3>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} showBusinessList={showBusinessList}/>
        <Filters onChangeCategory={handleChangeCategory} onFindBusinessClick={handleFindBusinessClick}/>
        {/* <Container> */}
            
            {/* <img alt="Happy immigrants" src="https://thumbs.dreamstime.com/b/family-immigrants-usa-family-immigrants-usa-134858326.jpg"/> */}
            <br />
        {/* </Container> */}
      
        <BusinessList businessList={showBusinessList} addToFavorites={addToFavorites}/>
        {/* <UserProfile businessList={businessList}/> */}
        </div>
    );
}

export default Home;