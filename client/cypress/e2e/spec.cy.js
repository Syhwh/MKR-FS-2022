/* eslint-disable no-undef */

describe('template spec', () => {
  beforeEach(() => {

  })

  it('passes', () => {
    cy.visit('http://localhost:3000/dashboard/home')
  })
  it('type in input', () => {
    cy.visit('http://localhost:3000/dashboard/home')
    cy.get('input').type('test')
    cy.get('input').should('be.enabled')
  })


  it('test login form', () => {
    cy.visit('http://localhost:3000/auth/sign-in')
    cy.get('input[name="email"]').type('email')
    cy.get('input[name="password"]').type('password')
    cy.get('input[name="check"]').check()
    cy.get('button[name="submit"]').click()
  })

})