const express = require('express');
const router = express.Router();

router.get('/' , (req, res)=>{

    const {number} = req.query;
    if(number!==undefined){
		if( isNaN(number)){
		 res.send(`<h1>Wrong Parameter</h1>`);
		}
		else if(!isNaN(number)){
		let ans =0;
		for(let i=0;i<=number;i++){
			ans +=i;
		}
		 res.send(`<h1>${ans}<h1>`);
		}}
	else    
    	res.send(`<h1>Lack of Parameter</h1>`);

})

module.exports = router;
