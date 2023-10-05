import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Card from '../components/card';


export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  useEffect(() => {
    // Call loadData when the component mounts
    try {
      fetch("http://localhost:5000/api/foodData", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data) {
          setFoodCat(data.categories)
          setFoodItem(data.items)
        }
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);
  return (
    <div>
      <div><NavBar /></div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
        <div className="carousel-inner" id='carousel'>

          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center "> 
                {/* Search function . When User search the item in search bar this function will run.   */}
                <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"  value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */} 
            </div>
          </div>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" style={{ filter: "brightness(50%)" , objectFit : "contain ! important" }}  alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?pastry" className="d-block w-100" style={{ filter: "brightness(50%)", objectFit: "contain ! important" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?barbeque" className="d-block w-100" style={{ filter: "brightness(50%)", objectFit: "contain ! important" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" style={{ filter: "brightness(50%)", objectFit: "contain ! important" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> 
      </div>
      <div className='container'>        
        {
          foodCat.length > 0
            ? foodCat.map((data) => {
              return (
                <div className='row mb-3' key={data._id}>
                  <div className='fs-3 m-3'>
                    {data.CategoryName}
                  </div>
                  <hr  />
                   
                  {foodItem.length > 0 ? foodItem
                    .filter((Item) => Item.CategoryName === data.CategoryName && Item.name.toLowerCase().includes(search.toLowerCase())) 
                    .map(filterItem => {
                      return (
                        <div key={filterItem._id} className='col-12 col-md-6 col-lg-3'>
                           <Card data={filterItem}></Card>                           
                         </div>
                      )
                    }) : <div> No Such Data </div>
                    }
                </div>
              )
            })
            : ""
        }         
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}


