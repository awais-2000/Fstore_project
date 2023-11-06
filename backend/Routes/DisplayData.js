const express = require('express');
const router = express.Router();

router.get('/foodData', (req, res) => {
    try {
        
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

