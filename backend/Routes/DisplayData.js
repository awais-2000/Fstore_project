const express = require('express');
const router = express.Router();

router.get('/foodData', (req, res) => { // (7)
    try {
        console.log(global.food_Items, global.foodCategory) // (8)
        res.json(global.food_items); // (9)

    } catch (error) {

        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;

