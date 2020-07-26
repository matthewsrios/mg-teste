/// <reference types="cypress" />

describe('Test', () => {
        const url = 'https://codepen.io/choskim/full/RLYebL';
        const iframeUrl = 'https://s.codepen.io/choskim/fullpage/RLYebL';

        beforeEach(() => {
            cy.request({
                method: 'GET',
                url: iframeUrl,
                headers: {
                    Referer: url,
                    accept: 'text/html',
                }
            })
                .its('body')
                .then(html => {
                    cy.document().then(document => {
                        document.write(html)
                        document.close()
                    })
                })
            cy.get('.center-center').should('be.visible')
        })

        it('Square test', () => {
            cy.get('.square').click({ release: false })
        })
})