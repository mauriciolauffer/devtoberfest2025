const cds = require('@sap/cds')

const { GET, POST, expect, axios } = cds.test (__dirname+'/..')
axios.defaults.auth = { username: 'alice', password: '' }

describe('AdminService OData APIs', () => {
  it('serves AdminService.Books', async () => {
    const { data, status } = await GET `/odata/v4/admin/AdminService.Books ${{ params: { $select: 'ID,title' } }}`
    expect(data.value).to.containSubset([{ ID: 251, title: "The Raven" }]);
    expect(status).to.equal(200);
  })

})
