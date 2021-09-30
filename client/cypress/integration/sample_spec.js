
//sample passing test
describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })
  
//sample failing test
  describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(false)
    })
  })