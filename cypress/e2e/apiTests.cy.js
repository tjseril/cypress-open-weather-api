describe('Open Weather API Tests', () => {
  it('gets current weather update for specified latitude and longitude values', () => {
    cy.request('GET','api.openweathermap.org/data/2.api.openweathermap.org/data/2.5/weather?lat=40.730610&lon=-73.935242&appid=cc96d489c4256b107a36297092ec11bs/weatherlat').then((response) => {
      expect(response.status).to.equal(200)
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('name')
    })
  })
})