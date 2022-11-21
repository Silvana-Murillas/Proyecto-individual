const { Recipe, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', (done) => {
        Recipe.create({ name: 'Milanesa a la napolitana',summary:'Milanesa a la napolitana' }).then(done());
        Recipe.findAll({where:{name:'Milanesa a la napolitana'}}).end((error,res)=>{if(error){console.log(error); done(error)}
        else{
          
          expect(res.name).equal('Milanesa a la napolitana');done()
        }
      })
      });
    });
  });
});
