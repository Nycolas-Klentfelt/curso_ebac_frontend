/// <reference types="cypress" />

describe('Testes para as funcionalidades', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })
    it('Deve adicionar um contato corretamente', () => {
        cy.get('input[type="text"]').type('Nycolas Klentfelt')
        cy.get('input[type="email"]').type('nyalk03@gmail.com')
        cy.get('input[type="tel"]').type('41996377775')
        cy.get('.adicionar').click()
        cy.wait(2000)
    })
    it('Deve editar um contato corretamente', () => {
        cy.contains('.contato', 'Nycolas Klentfelt').find('button.edit').click()
        cy.get('input[type="text"]').clear().type('Nycolas')
        cy.get('input[type="email"]').clear().type('nyalk02@gmail.com')
        cy.get('input[type="tel"]').clear().type('15932635179')
        cy.get('.alterar').click()
        cy.wait(2000)
    })
    it('Deve excluir um contato corretamente', () => {
        cy.contains('.contato', 'Nycolas').find('button.delete').click()
    })
}) 