import { RouterState, connectRouter } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'


//===> from saga middleware
import { fork, all } from 'redux-saga/effects'



export interface IttyniState {
 
    router      : RouterState
}

export const createRootReducer = (history : History)=>
    combineReducers({

        router: connectRouter(history)
    })
//==============>rootReducer end

export function* rootSaga(){
    yield all([


        // //Administration Sagas
        // fork(LabTestsListingAdminSaga)
    ])
}