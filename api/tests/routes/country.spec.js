/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const request = require('supertest');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

//const agent = session(app);
const recipe = {
  name: 'Milanea a la napolitana',
  summary:'Milanesa a la napolitana '
};


  before((done) =>
    conn.authenticate()
      .then(done())
      .catch((err) => {
        console.error('Unable to connect to the database:', err);
        done()
      }
    ));

  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));


  describe('GET /recipes', (done) => {
    it('should get 201', (done) =>{
      request(app)
        .get('/recipes').expect(201)
        .then(done())   }
    );
    it('respond with a object with the recipe', (done)=>{
      request(app).get("/recipes").end((error,res)=>{if(error){console.log(error); done(error)}
      else {
        
         expect(res.body.slice(10 )[0].name).equal(
           'Milanea a la napolitana',
          
        ); 
        done()

      }})
        
      })
    it('should replay the query in the GET method when the query is provided ',(done)=>{
    request(app).get('/recipes?name=Milanea a la napolitana').end((error,res)=>{if(error){console.log(error); done(error)}
       
          else{ 
            
            expect (res.body[0].name).equal( 
            'Milanea a la napolitana'    
           ); done()
          }
    })})
    it("should replay with the recipe if recives the id by params",(done)=>{
      request(app).get(`/recipes/716426`).end((error,res)=>{if(error){console.log(error); done(error)}
      else{
        
        expect(res.body.name).equal("Cauliflower, Brown Rice, and Vegetable Fried Rice");done()
      }
    })
    })
    it("should get status 404 if does not found the name by query",(done)=>{
      request(app).get('/recipes?name=sjsjsjs').expect(404).then(done())
    })
})
describe('POST/recipes',(done)=>{
  it('should get 201',(done)=>{
  request(app).post('/recipes').send({name:"Frijol",summary:"Frijol"}).expect(201).then(done())
  })
  it('should respond with a message when recipes is create',(done)=>{
  request(app).post('/recipes').send({name:"Arroz",summary:"Arroz"}).end((error,res)=>{
    if(error){console.log(error); done(error)}
    else{
      
      expect(res.text).equal('Receta creada existosamente');done()
    }
  }
  )}
  )
  it("Should return status (404) if does not send name and summary",(done)=>{
    request(app).post('/recipes').expect(404).then(done())
  })
})
