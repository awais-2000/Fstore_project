// import React from 'react'

// export default function carousel() {
//   return (
//     <div>
//       <div>
//         <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel"  style={{ objectFit: "contain !important" }}>
//         <div className="carousel-inner" id='carousel'>

//           <div className="carousel-caption" style={{ zIndex: "10" }}>
//             <div className="d-flex justify-content-center "> 
//                 {/* Search function . When User search the item in search bar this function will run.   */}
//                 <input className="form-control me-2 " type="search" placeholder="Search Your Items" aria-label="Search"  value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
//               {/* <button className="btn btn-outline-success" type="submit">Search</button> */} 
//             </div>
//           </div>
//           <div className="carousel-item active">
//             <img src="https://source.unsplash.com/random/900×700/?burger" className="d-block w-100" style={{ filter: "brightness(50%)" , objectFit : "contain ! important" }}  alt="..." />
//           </div>
//           <div className="carousel-item">
//             <img src="https://source.unsplash.com/random/900×700/?pastry" className="d-block w-100" style={{ filter: "brightness(50%)", objectFit: "contain ! important" }} alt="..." />
//           </div>
//           <div className="carousel-item">
//             <img src="https://source.unsplash.com/random/900×700/?barbeque" className="d-block w-100" style={{ filter: "brightness(50%)", objectFit: "contain ! important" }} alt="..." />
//           </div>
//           <div className="carousel-item">
//             <img src="https://source.unsplash.com/random/900×700/?pizza" className="d-block w-100" style={{ filter: "brightness(50%)", objectFit: "contain ! important" }} alt="..." />
//           </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div> 
//       </div>
//       <div className='container'>        
//         {
//           foodCat.length > 0
//             ? foodCat.map((data) => {
//               return (
//                 <div className='row mb-3' key={data._id}>
//                   <div className='fs-3 m-3'>
//                     {data.CategoryName}
//                   </div>
//                   <hr  />
                   
//                   {foodItem.length > 0 ? foodItem
//                     .filter((Item) => Item.CategoryName === data.CategoryName && Item.name.toLowerCase().includes(search.toLowerCase())) 
//                     .map(filterItem => {
//                       return (
//                         <div key={filterItem._id} className='col-12 col-md-6 col-lg-3'>
//                            <Card data={filterItem}></Card>                           
//                          </div>
//                       )
//                     }) : <div> No Such Data </div>
//                     }
//                 </div>
//               )
//             })
//             : ""
//         }         
//       </div>
//     </div>
//   )
// }

//  <div id="home" class="carousel slide" data-bs-ride="carousel">
//         <div class="carousel-indicators">
//             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
//                 aria-current="true" aria-label="Slide 1"></button>
//             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
//                 aria-label="Slide 2"></button>
//             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
//                 aria-label="Slide 3"></button>
//         </div>
//         <div class="carousel-inner">
//             <div class="carousel-item active">
//                 <img src="project-1-img/home-1.jpg" class="d-block w-100" alt="...">
//                 <div class="carousel-caption d-none d-md-block">
//                     <h5>Your Dream House</h5>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
//                          distinctio. Deserunt quas inventore consequatur quam!</p>
//                          <p>
//                             <a href="#" class="btn btn-warning mt-3">Learn More</a>
//                          </p>
//                 </div>
//             </div>
//             <div class="carousel-item">
//                 <img src="project-1-img/home-2.jpg" class="d-block w-100" alt="...">
//                 <div class="carousel-caption d-none d-md-block">
//                     <h5>Always Dedicated</h5>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
//                         distinctio. Deserunt quas inventore consequatur quam!</p>
//                     <p>
//                         <a href="#" class="btn btn-warning mt-3">Learn More</a>
//                     </p>
//                 </div>
//             </div>
//             <div class="carousel-item">
//                 <img src="project-1-img/home-3.jpg" class="d-block w-100" alt="...">
//                 <div class="carousel-caption d-none d-md-block">
//                     <h5>True Constructions</h5>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
//                         distinctio. Deserunt quas inventore consequatur quam!</p>
//                     <p>
//                         <a href="#" class="btn btn-warning mt-3">Learn More</a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//         </button>
//         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//         </button>
//     </div>