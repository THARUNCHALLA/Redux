import {createStore,combineReducers} from "redux"

const data={
    Fullname:"",
    PhoneNumber:null,
    balance:0,
}

function Myapplication(state=data,action){
    if(action.type==="deposit"){
        return {...state,balance:state.balance+parseInt(action.payload)}
    }
    else if(action.type==="Withdraw"){
        return {...state,balance:state.balance-parseInt(action.payload)}
    }
    else if(action.type==="NameUpdate"){
        return {...state,Fullname:action.payload}
    }
    else if(action.type==="PhoneNumberUpdate"){
        return {...state,PhoneNumber:action.payload}
    }
    else if(action.type==="reset"){
        return data
    }
    return state
}

function transaction(state=[],action){
    if(action.type==="Add"){
        return [...state,{amount:action.payload.amount,type:action.payload.type,date:action.payload.date}]
    }
    return state
}

const DATA = combineReducers({
    Application:Myapplication,
    Transaction:transaction
})

const UserStore = createStore(DATA)


export default UserStore