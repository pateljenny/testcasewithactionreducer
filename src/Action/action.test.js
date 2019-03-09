import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import * as Action from '../Action/action';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../Reducer/reducer';
import { Service } from '../Service/service';

// const mockService = new MockAdapter(baseService);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)
var mock = new MockAdapter(Service);

describe('actions', () => {

    afterEach(() => {
        mock.reset();
    })


    // it('should pass login action', () => {
    //     mock.onPost('https://reqres.in/api/login').reply(200, {});
    //     //     user: [
    //     //         {  token: "QpwL5tke4Pnpja7X",
    //     //             error:""

    //     //         }
    //     //     ]
    //     // });
    //     const expectedActions = [
    //         { type: LOGIN_SUCCESS, token:"QpwL5tke4Pnpja7X" }
    //     ]
    //     const store = mockStore({ token:"",error:"" })
    //     return store.dispatch(Action.loginAction({email: "jenny", password: "jenny"})).then(() => {
    //     expect(store.getActions()).toEqual(expectedActions)

    //     // { "login": { user: [{ token: "QpwL5tke4Pnpja7X",error:""}] }}


    //     })  
    // })


    // it('should pass login action', () => {
    //     mock.onPost('https://reqres.in/api/login').reply(400, { });
    //     //     user: [
    //     //         {  token: "QpwL5tke4Pnpja7X",
    //     //             error:""

    //     //         }
    //     //     ]
    //     // });
    //     const expectedActions = [
    //         { type: LOGIN_FAIL, token:" " }
    //     ]
    //     const store = mockStore({ token:" ",error:" " })
    //     return store.dispatch(Action.loginAction({email: "jenny", password: " "})).then(() => {
    //     expect(store.getActions()).toEqual(expectedActions)
    //     })  
    // })

    it('can pass LOGIN_FAIL action if password is missing', () => {
        let user = { email: "test@test.com" };
        mock.onPost('/login', user).reply(400, {})

        let expectedActions = [{ type: LOGIN_FAIL, error: "Missing password" }];
        const store = mockStore({ token: "", error: "" });
        return store.dispatch(Action.loginAction(user)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('can pass LOGIN_FAIL action if username or email are missing', () => {
        let user = { password: "test" };
        mock.onPost('/login', user).reply(400, {})

        let expectedActions = [{ type: LOGIN_FAIL, error: "Missing email or username" }];
        const store = mockStore({ token: "", error: "" });
        return store.dispatch(Action.loginAction(user)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    

    it('should pass logout action', () => {
        const expectedActions = [
            { type: LOGOUT }
        ]
        const store = mockStore({ token: "", error: "" })
        return store.dispatch(Action.logoutAction())
        expect(store.getActions()).toEqual(expectedActions)
        
    })

})