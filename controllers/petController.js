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
		if (err) {
			res.send('there was an error creating the new pet');
		}else {
			res.redirect('/pets');
		};
	});
});

router.delete('/delete/:id', (req, res)=>{
	petDB.findByIdAndRemove(req.params.id, (err, deleted)=>{
		if (err) {
			res.send('there was an error while deleting');
		}else {
			res.redirect('/pets');
		};
	});
});

router.get('/edit/:id', (req, res)=>{
	petDB.findById(req.params.id, (err, pet)=>{
		if (err) {
			res.send('could not find pet');
		}else {
			res.render('edit', {pet: pet})
		};
	});
});

router.put('/edit/:id', (req, res)=>{
	petDB.findByIdAndUpdate(req.params.id, {name: req.body.name, type: req.body.type, breed: req.body.breed, color: req.body.color, age: req.body.age}, (err, pet)=>{
		if (err) {
			res.send('there was an error loading the page');
		}else {
			res.redirect('/pets')
		};
	});
});








module.exports = router;