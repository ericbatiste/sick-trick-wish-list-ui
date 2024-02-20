describe('User flows', () => {
  beforeEach(() => {
    cy.intercept('GET', "http://localhost:3001/api/v1/tricks", {
      statusCode: 200,
      fixture: "tricks"
    })
    .visit('http://localhost:3000/')
  });

  it(`Should visit the webpage and render its' elements`, () => {
    cy.contains('h1', 'Sick Trick Wish List')
    cy.get('#stance-select').contains('Choose your stance');
    cy.get('button').contains('SeNd iT');
    cy.get('article').first().contains('p', 'regular treflip');
    cy.get('article').last().contains('p', 'regular frontside 50-50, backside 180 out');
  })

  it('Should enter info into form and display info to page', () => {
    cy.get('select').first().select('goofy');
    cy.get('input').first().type('Test trick');
    cy.get('select').last().select('flatground');
    cy.get('input').last().type('Test link');
    cy.get('button').click();
    cy.get('article').last().contains('p', 'Test trick');
  })
})