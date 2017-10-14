const express = require('express');
const router = express.Router();
const petDB = require('../models/petsModel');

router.get('/', (req, res)=>{
	petDB.find((err, petsFromDB)=>{
		if (err){
			res.send('there was an error getting the index page');
		}else {
			res.render('index', {pets: petsFromDB});
		};
	});
});

router.get('/new/', (req, res)=>{
	res.render('new', {});
});

router.post('/create/', (req, res)=>{
	petDB.create(req.body, (err, newFruit)=>{
		if (err){
			res.send('there was an error creating the new pet');
		}else{
			res.redirect('/pets');
		};
	});
});

router.delete('/delete/:id', (req, res)=>{
	petDB.findByIdAndRemove(req.params.id, (err, deleted)=>{
		if (err) {
			res.send('there was an error while deleting');
		}
		console.log(deleted);
	});
});









module.exports = router;