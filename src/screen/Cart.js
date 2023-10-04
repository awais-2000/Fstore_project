// import React from 'react';

// import { useCart, useDispatchCart } from '../components/contexReducer'; 

// export default function Cart() {
//     let data = useCart();
//     let dispatch = useDispatchCart();

//     if (data.length === 0) {
//         return (
//             <div>
//                 <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
//             </div>
//         )
//     }

//     // const handleRemove = (index) => {
//     //   console.log(index)
//     //   dispatch({ type: "REMOVE", index: index })
//     // }

//     const handleCheckOut = async () => {
//         let userEmail = localStorage.getItem("userEmail");

//         let response = await fetch("http://localhost:5000/api/auth/orderData", {
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
//         console.log("JSON RESPONSE:::::", response.status)
//         if (response.status === 200) {
//             dispatch({ type: "DROP" })
//         }
//     }

//     let totalPrice = data.reduce((total, food) => total + food.price, 0);

//     return (
//         <div>
//             {console.log(data)}
//             <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
//                 <table className='table table-hover'>
//                     <thead className='text-success fs-4'>
//                         <tr>
//                             <th scope='col'>#</th>
//                             <th scope='col'>Name</th>
//                             <th scope='col'>Quantity</th>
//                             <th scope='col'>Option</th>
//                             <th scope='col'>Amount</th>
//                             <th scope='col'></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((food, index) => (
//                             // Correction: Add a 'key' prop to each <tr> element to avoid React warnings.
//                             <tr key={index}>
//                                 <th scope='row'>{index + 1}</th>
//                                 <td>{food.name}</td>
//                                 <td>{food.qty}</td>
//                                 <td>{food.size}</td>
//                                 <td>{food.price}</td>
//                                 <td><button type="button" className="btn p-0" DeleteIcon onClick={() => { dispatch({ type: "REMOVE", index: index }) }}></button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
//                 <div>
//                     <button className='btn bg-success mt-5' onClick={handleCheckOut}>Check Out</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React from 'react';
import { useCart, useDispatchCart } from '../components/contexReducer';
// import trash from "../trash.svg";

export default function Cart() {
    const data = useCart();
    const dispatch = useDispatchCart();

    if (data.length === 0) {
        return (
            <div>
                <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div> 
            </div>
        );
    }

    const handleCheckOut = async () => {
        let userEmail = localStorage.getItem("userEmail");
        let response = await fetch("http://localhost:5000/api/orderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ // Corrected the order of JSON.stringify
                order_data: data,
                email: userEmail,
                order_date: new Date().toDateString() // Corrected 'date' to 'Date'
            })
        });
            console.log("Order Status", response);
        if (response.status === 200) {
            dispatch({ type: "DROP" });
        }
    }


    // Correction 1: Use the correct method name 'reduce' instead of 'reducer'
    const totalPrice = data.reduce((total, food) => total + food.price, 0);

    return (
        <div>
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
                            // Correction 2: Add a 'key' prop to each <tr> element to avoid React warnings.
                            <tr key={index}>
                                <th scope='row'>{index + 1}</th>
                                <td>{food.name}</td>
                                <td>{food.qty}</td>
                                <td>{food.size}</td>
                                <td>{food.price}</td>
                                <td>
                                    <button type='button' className='btn p-0'>
                                        <img
                                            src={1}
                                            alt='delete'
                                            onClick={() => {
                                                // Correction 3: Correct the action type to "REMOVE_ITEM"
                                                dispatch({ type: "REMOVE", index: index });
                                            }}
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <h1 className='fs-2'>Total Price: {totalPrice}/-</h1>
                </div>
                <div>
                    <button className='btn bg-success mt-5' onClick={handleCheckOut}>Check Out</button>
                </div>
            </div>
        </div>
    );
}
