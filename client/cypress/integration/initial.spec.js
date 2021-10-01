

describe('General Navigation and content check', () => {
  

    it('loads correct page and finds/clicks button', () => {
      cy.visit('http://localhost:3000/')
      cy.get('button').click()
    })

    it('Checks that question and 4 answer options are avaialable', () => {
      cy.get('#cy-question')
      cy.get('#cy-ans').find('>label').eq(2).click()
      cy.get('button').click()
    })

    it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(3).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(1).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(3).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(1).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(3).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(0).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(3).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(1).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(3).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(0).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(1).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(3).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(0).click()
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click()
        cy.get('button').eq(1).click()
      })

  })