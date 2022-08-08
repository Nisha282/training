const express = require('express');
// const abc = require('../introduction/intro')
// const first = require('../logger/logger')
// const second = require('../util/helper')
// const third = require('../validator/formatter')
const fourth = require('lodash');



const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    // abc.printName()
    // first.welcome()
    // second.printDate()
    // second.printMonth()
    // second.getBatchInfo()
    // third.AllProgram()
    let month = ['jan', 'feb','march','april', 'may', 'june','july','august','sept','oct','nov','dec']
    let a = fourth.chunk(month , 3)
    console.log(a)
    
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason