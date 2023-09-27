// import React, { useEffect, useState } from 'react';
// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import Card from '../components/card'; 
// import Carousel from '../components/carousel';

// export default function Home() {

//   const [foodCat, setfoodCat] = useState([]);
//   const [foodItem, setfoodItem] = useState([]);

//   const loadData = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/foodData", {
//         method: "GET",
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });

//       if (response.ok) {
//         const responseData = await response.json();
//         console.log(responseData[0], responseData[1]);

//         // Set your state variables based on responseData[0] and responseData[1]
//         setfoodCat(responseData[0]);
//         setfoodItem(responseData[1]);
//       } else {
//         console.error('Failed to fetch data');
//       }
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   useEffect(() => {
//     // Call loadData when the component mounts
//     loadData();
//   }, []);

//   return (
//     <div>
//       <div><NavBar /></div>

//       <div><Carousel /></div>

//       <div className='container'>
//         {
//           foodCat !== []
//             ? foodCat.map((data) => {
//               return (

//                 // justify-content-center
//                 <div className='row mb-3'>
//                   <div key={data.id} className='fs-3 m-3'>
//                     {data.CategoryName}
//                   </div>
//                   <hr id="hr-success" style={{ height: "4px", backgroundImage: "-webkit-linear-gradient(left,rgb(0, 255, 137),rgb(0, 0, 0))" }} />
//                   {foodItem !== [] ? foodItem.filter(
//                     (items) => (items.CategoryName === data.CategoryName))
//                     .map(filterItems => {
//                       return (
//                         <div key={filterItems.id} className='col-12 col-md-6 col-lg-3'>
//                           {console.log(filterItems.url)}
//                           <Card foodName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img} ></Card>
//                         </div>
//                       )
//                     }) : <div> No Such Data </div>}
//                 </div>
//               )
//             })
//             : ""
//         }
//       </div>

//       <div> <Footer /> </div>
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Card from '../components/card';
import Carousel from '../components/carousel';

export default function Home() {

  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  console.log("Home Called =========>")
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
      <div><Carousel /></div>
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
                    .filter((Item) => Item.CategoryName === data.CategoryName)
                    .map(filterItem => {
                      return (
                        <div key={filterItem._id} className='col-12 col-md-6 col-lg-3'>
                          {console.log(filterItem.url)} 
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


// ------------------------------- Actuall Data

// <div className='container'>
  
//     foodCat !== []
//     ? foodCat.map((data) =>{
//       return (
//         <div>
//           <div key={data._id} className='fs-3 m-3'>
//             {data.CategoryName}
//           </div>
//           <hr />
//           {
//             foodItem !==[]
//             ?
//             foodItem.filter((item) => item.CategoryName === data.CategoryName)
//             .map(filterItem =>{
//               return (
//                 <div key={filterItem._id}>
//                   <Card />
//                 </div>
//               )
//             }) : <div>No Such Data</div>
//           }
//         </div>
//       )
//     })
  

// </div>

//-------------------------------
//foodName = { filterItem.name } Item = { filterItem } options = { filterItem.options[0] } ImgSrc = { filterItem.img }