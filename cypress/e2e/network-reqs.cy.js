describe('User flows', () => {
  beforeEach(() => {
    cy.intercept('GET', "http://localhost:3001/api/v1/tricks", {
      statusCode: 200,
      fixture: "tricks"
    })
    .visit('http://localhost:3000/')
  });

  it(`Should visit the webpage and get / render its' elements`, () => {
    cy.contains('h1', 'Sick Trick Wish List')
    
    cy.get('#stance-select').contains('Choose your stance');
    cy.get('input[name="name"]').should('have.attr', 'placeholder',  'Name of trick')
    cy.get('#obstacle-select').contains('Choose your obstacle');
    cy.get('input[name="tutorial"]').should('have.attr', 'placeholder',  'Link to tutorial')
    cy.get('button').contains('SeNd iT');
    
    cy.get('.tricks-container').children().should('have.length', 3)
    
    cy.get('article').first().contains('p', 'regular treflip');
    cy.get('article').first().contains('p', 'Obstacle: flat ground');
    cy.get('article').first().contains('p', 'https://www.youtube.com/watch?v=XGw3YkQmNig');
    cy.get('article').last().contains('p', 'regular frontside 50-50, backside 180 out');
    cy.get('article').last().contains('p', 'Obstacle: ledge');
    cy.get('article').last().contains('p', 'https://www.youtube.com/watch?v=9N9swrZU1HA');
  });

  it('should post a new bird and display it to the page', () => {
    cy.intercept("POST", "http://localhost:3001/api/v1/tricks", {
      statuscode: 201,
      body: {
        "stance": 'goofy',
        "name": 'Test trick',
        "obstacle": 'flatground',
        "tutorial": 'Test link',
        "id": 'test01'
      }
    }).as("postTrick")

    cy.get('.tricks-container').children().should('have.length', 3);
    
    cy.get('form').get('select').first().select('goofy');
    cy.get('form').get('input[name="name"]').type('Test trick');
    cy.get('form').get('select').last().select('flatground');
    cy.get('form').get('input[name="tutorial"]').type('Test link');
    
    cy.get('form').get('button').click();
    
    cy.wait("@postTrick");
    
    cy.get('.tricks-container').children().should('have.length', 4);
    
    cy.get('.tricks-container').last().contains('p', 'goofy Test trick');
    cy.get('.tricks-container').last().contains('p', 'Obstacle: flat ground');
    cy.get('.tricks-container').last().contains('p', 'Test link');
  })
})

