// import React from 'react';
// import { useCart, useDispatchCart } from '../components/contexReducer';
// // import trash from "../trash.svg";
// // import { useNavigate } from 'react-router-dom';

// export default function Cart() {
//     const data = useCart();
//     const dispatch = useDispatchCart();
//     // const navigate = useNavigate();

//     const handleCheckOut = async () => {
//         let userEmail = localStorage.getItem("userEmail");
//         let response = await fetch("http://localhost:5000/api/orderData", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 order_data: data,
//                 email: userEmail,
//                 order_date: new Date().toDateString() 
//             })
//         });
//         if (response.status === 200) {
//             dispatch({ type: "DROP" });
//             // navigator('/myorder')
//         }
//     }
    
//     const totalPrice = data.reduce((total, food) => total + parseFloat(food.price), 0);

//     return (
//         <div>
//             {
//                 (data.length === 0) ?  
//                     <div className='m-5 w-100 text-center fs-3' style={{color: "white"}}>The Cart is Empty!</div>
//                 :
//                     <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
//                         <table className='table table-hover'>
//                             <thead className='text-success fs-4'>
//                                 <tr>
//                                     <th scope='col'>#</th>
//                                     <th scope='col'>Name</th>
//                                     <th scope='col'>Quantity</th>
//                                     <th scope='col'>Option</th>
//                                     <th scope='col'>Amount</th>
//                                     <th scope='col'></th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {data.map((food, index) => (
                                    
//                                     <tr key={index}>
//                                         <th scope='row'>{index + 1}</th>
//                                         <td>{food.name}</td>
//                                         <td>{food.qty}</td>
//                                         <td>{food.size}</td>
//                                         <td>{food.price}</td>
//                                         <td>
//                                             <button type='button' className='btn p-0'>
//                                                 <img
//                                                     src={1}
//                                                     alt='delete'
//                                                     onClick={() => {
                                                        
//                                                         dispatch({ type: "REMOVE", index: index });
//                                                     }}
//                                                 />
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                         <div>
//                             <h1 className='fs-2' style={{color: "white"}}>Total Price: {totalPrice}/-</h1>
//                         </div>
//                         <div>
//                             <button className='btn bg-success mt-5' onClick={handleCheckOut}>Check Out</button>
//                         </div>
//                     </div>
//             }
            
//         </div>
//     );
// }
// ===========================================================================
import React from 'react';
import { useCart, useDispatchCart } from '../components/contexReducer';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";


export default function Cart() {
  const data = useCart();
  const dispatch = useDispatchCart();
  const navigate = useNavigate();

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem('userEmail');
    let response = await fetch('http://localhost:5000/api/orderData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });

    if (response.status === 200) {
      dispatch({ type: 'DROP' });
      navigate('/home'); // Navigate to the "MyOrder" page
    }
  };

  const totalPrice = data.reduce((total, food) => total + parseFloat(food.price), 0);

  return (
    <div>
      {data.length === 0 ? (
        <div className='m-5 w-100 text-center fs-3' style={{ color: 'white' }}>
          The Cart is Empty!
        </div>
      ) : (
        <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
          <table className='table table-hover'>
            <thead className='text-success fs-4'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Option</th>
                <th scope='col'>Amount</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {data.map((food, index) => (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.qty}</td>
                  <td>{food.size}</td>
                  <td>{food.price}</td>
                  <td>
                    <button
                      type='button'
                      className='btn p-0'
                      onClick={() => {
                        dispatch({ type: 'REMOVE', index: index });
                      }}
                    >
                      <img src={<MdDelete />} alt='Delete' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <h1 className='fs-2' style={{ color: 'white' }}>
              Total Price: {totalPrice}/-
            </h1>
          </div>
          <div>
            <button className='btn bg-success mt-5' onClick={handleCheckOut}>
              Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
