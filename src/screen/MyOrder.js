import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function MyOrder() {
    // const [orderData, setOrderData] = useState([]);
    const [orderDataArr, setOrderDataArr] = useState([]);
    const [orderDate, setOrderDate] = useState("")

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        try {
            fetch('http://localhost:5000/api/myOrderData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: userEmail,
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log("get data");
                console.log(data)

                generateData(data.orderData[0].order_data)
            });

        } catch (error) {
            console.error('Error during fetchMyOrder:', error);
        }
    }, []);

    // function generateData(updatedOrderData) {
    //     if(updatedOrderData.length > 0) {
    //         updatedOrderData.map((arrayOfObjects) => {
    //             const dataArr = [];
    //             for (const obj of arrayOfObjects) {
    //                 if(obj.Order_date){
    //                     setOrderDate(obj.Order_date)
    //                 } else {
    //                     dataArr.push(obj)
    //                 }                    
    //             }
    //             setOrderDataArr(dataArr);
    //         })
    //     }
    // }
    function generateData(updatedOrderData) {
  const dataArr = [];
  let orderDate = "";

  updatedOrderData.forEach((arrayOfObjects) => {
    arrayOfObjects.forEach((obj) => {
      if (obj.Order_date) {
        orderDate = obj.Order_date;
      } else {
        dataArr.push(obj);
      }
    });
  });

  setOrderDataArr(dataArr);
  setOrderDate(orderDate);
}

    
    
    return (
        <div>
            <div>
                <NavBar />
            </div>

            <div className='container'>
                <div className='row'>
                <div className='m-auto mt-5'>
                    {orderDate}
                    <hr />
                </div>
                {orderDataArr.length > 0 && 
                    orderDataArr.map((obj) => (
                        <div className='col-3 col-md-3 col-lg-3' key={obj.id}>
                            <div className='card mt-3' style={{ width: '16rem', maxHeight: '360px' }}>
                                <img src={obj.img} className='card-img-top' alt='...' style={{ height: '120px', objectFit: 'fill' }} />
                                <div className='card-body'>
                                    <h5 className='card-title'>{obj.name}</h5>
                                    <div className='container w-100 p-0' style={{ height: '38px' }}>
                                        <span className='m-1'>{obj.qty}</span>
                                        <span className='m-1'>{obj.size}</span>
                                        <div className='d-inline ms-2 h-100 w-20 fs-5'>Pkr{obj.price}/-</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>

            <Footer />
        </div>
    );
}
