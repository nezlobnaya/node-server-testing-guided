const Hobbits = require('./hobbitsModel')

const db = require('../data/dbConfig')

describe('the Hobbit Model', () => {
    
    beforeEach(async () => {
        await db('hobbits').truncate()
    })

    describe('the insert function', () => {
        it('should insert an entry to the db', async () => {
            const hobbitData = { name: 'frodo' }
            const hobbit = await Hobbits.insert(hobbitData)
            const hobbits = await db('hobbits')
            expect(hobbits.length).toBe(1)
            expect(hobbits[0].name).toBe('frodo')
                })
        it('should resolve to the newly created hobbit', async () => {
            const hobbitData = { name: 'frodo' }
            const hobbit = await Hobbits.insert(hobbitData)
            expect(hobbit).toEqual({id: 1, name: 'frodo' })
        })
       })
     })
