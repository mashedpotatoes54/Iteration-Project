const mongoose = require('mongoose');
const entryModel = require('../server/models/entryModel');
const entryData = {date: '10/10/2010', iLearned: 'testing', moodScaler: 3};
require('dotenv').config();

describe('entry model test', () => {

    
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    })

    it('create an entry successfully', async () => {
        const entry = new entryModel(entryData);
        const savedEntry = await entry.save();
        // const entries = await Entry.find();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedEntry._id).toBeDefined();
        expect(savedEntry.date).toBe(entryData.date);
        expect(savedEntry.iLearned).toBe(entryData.iLearned);
        expect(savedEntry.moodScaler).toBe(entryData.moodScaler);
    });
});