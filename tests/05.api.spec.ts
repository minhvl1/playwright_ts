import {test,expect} from '../feature/base';

test.describe.configure({mode: 'serial'});

test('Send Get API request', async ({sendRequest}) => {
    const res = await sendRequest.reqresGetListUser()
    console.log(res)
    expect(res).toHaveProperty('data');
    console.log(res.data.length)
    console.log(res.data[0].email)
})

test('Send Post API request', async ({sendRequest}) => {
    const createUser = await sendRequest.reqresCreateUser("Minh","Director")
    console.log(createUser.data)
    console.log(createUser.statusCode)
})

