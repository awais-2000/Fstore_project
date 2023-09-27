const express = require('express');
const router = express.Router();

router.get('/foodData', (req, res) => { // (7)
    try {
        // console.log(global.food_items) // (8)
        const response = {
            "categories": global.foodCategory,
            "items": global.food_items
        }
        res.json(response); // (9)

    } catch (error) {

        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;

