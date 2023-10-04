//  const express = require ('express');

// const router = express.Router();

// const Order = require ('..models/Order');

// router.post('/orderData', async (req,res)=>{
//     let data = req.body.order_data
//     await data.splice(0,0, {Order_date: req.body.order_date})
// })

// // if email not exisiting in db then create : else : InderMany ()
// let eId = await Order.findOne({'email' : req.body.email})
// console.log (eId)
// if (eId === null){
// try {
//     await Order.create({
//         email: req.body.email,
//         order_data: [data]
//     }).then(()=>{
//         res.json({ seccess : true})
//     })
// } catch (error) {
//     console.log(error.message)
//     res.send("Server Error", error.message)    
// }
// }
// else{
//     try {
//         await Order.findOneAndUpdata({email :req.body.email},
//             {$push: {order_data: data}}).then(()=>{
//                 res.json({seccess:true})
//             })
//     } catch (error) {
//     res.send("Server Error", error.message) 
//     }
// }
const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // Fix the require statement

router.post('/orderData', async (req, res) => {
    let data = req.body.order_data;
    data.splice(0, 0, { Order_date: req.body.order_date }); // Removed unnecessary 'await'
    
    // if email not existing in db then create : else : UpdateMany()
    let eId = await Order.findOne({ 'email': req.body.email });
    console.log(eId);
    if (eId === null) {
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true });
            });
        } catch (error) {
            console.error(error.message); // Use console.error for errors
            res.status(500).send("Server Error: " + error.message); // Use res.status(500) to set the status code
        }
    } else {
        try {
            await Order.findOneAndUpdate(
                { email: req.body.email },
                { $push: { order_data: data } }
            ).then(() => {
                res.json({ success: true });
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Server Error: " + error.message);
        }
    }
});

module.exports = router;
