var expressFunction = require('express');
const router = expressFunction.Router();
const authorization = require('../config/authorize')

const products =[
    {
        type: 'B6108755',
        id: '10001',
        name: 'นายพศิน บัวสิงห์',
        detail: 'Computer Engineer',
        phone: '0970703578',
        img: 10
    },
    {
        type: 'B6108755',
        id: '10001',
        name: 'นายพศิน บัวสิงห์',
        detail: 'Computer Engineer',
        phone: '0970703578',
        img: 10
    },
    {
        type: 'B6108755',
        id: '10001',
        name: 'นายพศิน บัวสิงห์',
        detail: 'Computer Engineer',
        phone: '0970703578',
        img: 10
    }
];

router.route('/products')
    .get(authorization, (req, res) =>{
        res.status(200).json(products);
    })

module.exports = router