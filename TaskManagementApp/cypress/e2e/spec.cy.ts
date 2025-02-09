// Please complete the following end to end tests for the entire application

describe('Task table', () =>
{

  it('should display a list of tasks', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test
    // cy.intercept('GET', '/api/task').as('getTask');
    // cy.intercept('GET', '/api/user').as('getUser');
 
    // cy.wait('@getUser');
    // cy.wait('@getTask');
    cy.wait(3000);
    cy.get('#task-table').should('exist');
    cy.get('#task-table tr').then(el => {
      expect(el.length).greaterThan(1);
    });
  });

  it('should be able to change the completion status of a task from Yes to No or from No to Yes', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });

  it('should be able to change the assigned user of a task', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });

  it('should be able to create a task', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });

  it('should be able to delete a task', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });


});

describe('User table', () =>
{
  it('should display a list of users', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test
    // cy.intercept('GET', '/api/task').as('getTask');
    // cy.intercept('GET', '/api/user').as('getUser');
 
    // cy.wait('@getUser');
    // cy.wait('@getTask');
    cy.wait(3000);
 
    cy.get('#user-table').should('exist');
    cy.get('#user-table tr').then(el => {
      expect(el.length).greaterThan(1);
    });
  });


  it('should be able to create a user', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });

  it('should be able to delete a user', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });

  it('should not be able to delete a user if they have tasks assigned to them', () =>
  {
    cy.visit('http://localhost:4500');
    //TODO: implement test

  });
});


