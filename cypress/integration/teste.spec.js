/// <reference types="cypress" />
const url = 'https://codepen.io/choskim/full/RLYebL'

describe('Test', () => {
    it('Square test', () => {
        cy.visit(url)
        cy.get('iframe#result')
            .then($iframe => {
                const $body = $iframe.contents().find('body')
                return cy.wrap($body).find('.square')
            })
            .then(square => {
                cy.wrap(square).should('be.visible')
                cy.wrap(square).trigger('pointerdown', { button: 0 })
                cy.wait(5000)
                cy.wrap(square).trigger('pointerleave')

                cy.wrap(square)
                    .then(($el) => {
                        expect($el[0].getBoundingClientRect().width).to.be.greaterThan(224)
                        expect($el[0].getBoundingClientRect().height).to.be.greaterThan(224)
                    })
            })
    })
})
