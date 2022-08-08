const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    
    res.send('My second ever api!')
});

router.get('/movies', function(req , res){
    let movies = ['DDLJ','MS.DHONI','KGH2', 'RRR']
    res.send(movies)

})



router.get('/movies/:i', function (req, res){
    let movies=['DDLJ','MS.DHONI','KGH2', 'RRR']
    
    let requestParams = req.params  //
    let num= JSON.stringify(requestParams)
    let value=Object.values(requestParams)
    
    
    res.send(movies[value])
     
})

router.get('/movies/:i',function(req , res){
    let movies = ['DDLJ','MS.DHONI','KGH2', 'RRR']
        
        let requestParams = req.params  //
        let num= JSON.stringify(requestParams)
        let value=Object.values(requestParams)
        
        if(value >= movies.length ){
            res.send("Enter Valid Number")
        }else{
        res.send(movies[value])
        }
          
   })

   router.get('/films', function(req, res){
    let movies=[{'id': 1, 'name':'KGF2' }, {'id': 2, 'name': 'MS.DHONI' }, 
    {'id': 3, 'name':'RRR' }, {'id': 4, 'name':'DDLJ' }]
    
    
     res.send(movies) 
})

router.get('/films/:indexNumber',function(req , res){
    let films = ['DDLJ','MS.DHONI','KGH2', 'RRR']
        
        let requestParams = req.params  //
        let num= JSON.stringify(requestParams)
        let value=Object.values(requestParams)
        
        if(value >= films.length ){
            res.send("films length is greater")
        }else{
        res.send(films[value])
        }
          console.log(films)
   })

   






router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason