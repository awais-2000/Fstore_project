// import React, { useEffect, useRef, useState } from 'react';
// import { useDispatchCart, useCart } from './contexReducer';

// export default function Card(props) {

//   const dispatch = useDispatchCart();
//   const data = useCart();
//   const priceRef = useRef();
//   const { CategoryName, description, img, name } = props.data;

//   const options = props.options;
//   const priceOptions = Object.keys(options);

//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState("");

//   const handleAddToCart = async () => {
//     let food = null; // Initialize 'food' as null

//     for (const item of data) {
//       if (item.id === props.foodItem._id) {
//         food = item; // Assign 'item' to 'food' if a matching item is found
//         break;
//       }
//     }

//     if (food !== null) { // Check if 'food' is not null
//       if  (food.size === size) {
//         await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
//         return
//       }
//     } else { // Use 'else' to handle the case when 'food' is null
//       await dispatch({ type: "ADD", id: props.foodItem._id, name: props.data.name, price: finalPrice, qty: qty, size: size });
//       return
//     }
//   };

//   const finalPrice = qty * parseInt(options[size]);

//   useEffect(() => {
//     setSize(priceRef.current.value);
//   }, []);

//   return (
//     <div>
//       <div>
//         <div className="card m-3 mt-3 " style={{ width: '18rem' }}>
//           <img src={img} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "fill" }} />
//           <div className="card-body">
//             <h5 className="card-title">{name}</h5>
//             <p className="card-text">{description}</p>
//             <div className='container w-100'>

//               <select className="m-2 h-100 bg-success rounded" onChange={(e) => setQty(parseInt(e.target.value))}>
//                 {Array.from(Array(6), (e, i) => (
//                   <option key={i + 1} value={i + 1}>
//                     {i + 1}
//                   </option>
//                 ))}
//               </select>

//               <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
//                 {priceOptions.map((data) => (
//                   <option key={data} value={data}>
//                     {data}
//                   </option>
//                 ))}
//               </select>
//               <div className='d-inline fs-5'>
//                 PKR{finalPrice}/-
//               </div>
//             </div>
//             <hr />
//             <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add To Cart</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './contexReducer';

export default function Card(props) {

  const dispatch = useDispatchCart();
  const data = useCart();
  const priceRef = useRef();
  const { CategoryName, description, img, name } = props.data;

  const options = props.options;
  const priceOptions = Object.keys(options);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");


  const handleAddToCart = async () => {
    
    let food = null; // Initialize 'food' as null

    for (const item of data) {
      if (item.id === data._id) {
        food = item; // Assign 'item' to 'food' if a matching item is found
        break;
      }
    }

    if (food !== null) { // Check if 'food' is not null
      if  (food.size === size) {
        await dispatch({ type: "UPDATE", id: data._id, price: finalPrice, qty: qty });
        return; 
      } else { // Handle the case when 'food' is not null but 'size' doesn't match
        await dispatch({ type: "ADD", id: data._id, name:data.name, price: finalPrice, qty: qty, size: size });
        return; 
      }
    } else { // Use 'else' to handle the case when 'food' is null
      await dispatch({ type: "ADD", id:data._id, name: data.name, price: finalPrice, qty: qty, size: size });
      return;
    }
    
  
  };

  const finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div>
        <div className="card m-3 mt-3 " style={{ width: '18rem' }}>
          <img src={img} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "fill" }} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
            <div className='container w-100'>

              <select className="m-2 h-100 bg-success rounded" onChange={(e) => setQty(parseInt(e.target.value))}>
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                {priceOptions.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))}
              </select>
              <div className='d-inline fs-5'>
                PKR{finalPrice}/-
              </div>
            </div>
            <hr />
            <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
