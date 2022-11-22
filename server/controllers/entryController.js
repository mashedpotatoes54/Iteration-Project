const express = require('express');

const Entry = require('../models/entryModel.js');

const entryController = {};

// show entries (last 10?)
  // entryController.getEntries = () =>

entryController.getEntries = async (req, res, next) => {
  try{
    const entries = await Entry.find();
    res.locals.entries = entries;
    return next();
  } catch(error) {
    return next({error: 'error in middleware getEntries'})
  }
}



// update entry 
  // entryController.updateEntry = () => 

// delete entry
  // entryController.deleteEntry = () =>

// create a new entry
entryController.createEntry = async (req, res, next) => {
    try{
        const { date, iLearned, moodScaler } = req.body;
        const result = await Entry.create({ date, iLearned, moodScaler });
        res.locals.entry = result;
        return next();
    } catch(err){
        return next({
          log: 'Error caught in entryController.createEntry middleware',
          message: {
            err: 'An error has occured in the entryController.createEntry middleware ',
          },
        })
    }
}

entryController.deleteEntry = async (req, res, next) => {
  try{
    console.log(req.params);
    const { id } = req.params;
    res.locals.deleted = Entry.findOne({_id: id});
    const result = await Entry.findOneAndDelete({_id : id});
    console.log(result);
    res.status(200).json(result)
    return next();
  }catch(err){
    return next({
      log: 'Error caught in entryController.deleteEntry middleware',
      message: {
        err: 'An error has occured in the entryController.deleteEntry middleware ',
      },
    })
  }
} 

module.exports = entryController