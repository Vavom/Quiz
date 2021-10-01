

describe('General Navigation and content check', () => {
  

    it('loads correct page and finds/clicks button', () => {
      cy.visit('http://localhost:3000/')
      cy.get('button').click()
    })

    it('Checks that question and 4 answer options are avaialable', () => {
      cy.get('#cy-question')
      cy.get('#cy-ans').find('>label').eq(2).click({force: true})
      cy.get('button').click()
    })

    it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(3).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(1).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(3).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(1).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(3).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(0).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(3).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(1).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(3).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(0).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(1).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(3).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(0).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('Checks that question and 4 answer options are avaialable', () => {
        cy.get('#cy-question')
        cy.get('#cy-ans').find('>label').eq(2).click({force: true})
        cy.get('button').eq(1).click()
      })

      it('checks for results in the finished page', () => {
        cy.get('#root').find('div').eq(0)
      })

      it('checks for header', () => {
        cy.get('h1')
      })

      it('checks for leaderboard', () => {
        cy.get('table')
      })

      it('able to input highscore using form', () => {
        cy.get('input').type('xxQuizMaster69xx')
        cy.get('#cy-button').click()
      })

  })
