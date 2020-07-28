/// <reference types="cypress" />
const url = 'https://codepen.io/choskim/full/RLYebL'

describe('Test', () => {
    it('Square test', () => {
        cy.visit(url)
        cy.get('iframe#result')
            .then($iframe => {
                const $body = $iframe.contents().find('body')
                return cy.wrap($body)
            })
            .then(body => {
                cy.wrap(body).should('be.visible')
                cy.wrap(body).find('.square').trigger('mousedown', {button: 0})
                cy.wait(5000)
                cy.wrap(body).find('.square').trigger('mouseleave')

                //TODO: checar dimensao do quadrado
            })
    })
})
