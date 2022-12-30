const mongoose = require('mongoose');
const entryModel = require('../server/models/entryModel');
const entryData = {date: "11/22/2022", iLearned: 'testing', moodScaler: 3};
require('dotenv').config();

describe('entry model test', () => {

    
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }// , useCreateIndex: true }
            , (err) => {
            if (err) {
                console.log(err);
                process.exit(1);
            }
        }
        );
    })

    afterAll(done => {
        // Closing the DB connection allows Jest to exit successfully.
        mongoose.connection.close()
        done()
    })

    it('create an entry successfully', async () => {
        const entry = new entryModel(entryData);
        const savedEntry = await entry.save();
        // Object Id should be defined when successfully saved to MongoDB.
        expect(savedEntry._id).toBeDefined();
        expect(savedEntry.date).toBeInstanceOf(Date);
        expect(savedEntry.iLearned).toBe(entryData.iLearned);
        expect(savedEntry.moodScaler).toBe(entryData.moodScaler);
    });

    // test delete function
    it('delete an entry successfully', async () => {
        const entry = new entryModel(entryData);
        const savedEntry = await entry.save();
        const deleted = await entryModel.findOneAndDelete({_id: savedEntry._id});
        expect(savedEntry._id).toEqual(deleted._id);
    })
});
//expect(typeof value).toBe('number')