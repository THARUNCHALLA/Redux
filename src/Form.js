import { useState } from "react"
import { useDispatch } from "react-redux"
import {deposit, Withdraw,NameUpdate,PhoneNumberUpdate,reset} from "./Action"

const Form = () => {
    const dispatch = useDispatch()
    const [value1, setvalue] = useState("")
    const [name, setname] = useState("")
    const [number, setPhoneNumber] = useState("")
    const tharun = (e) => (setvalue(
        e.target.value
    ))
    const NAME = (e) => setname(e.target.value)
    const NUMBER = (e) => {
        setPhoneNumber(e.target.value)
    }
    return (
        <div>
            <h1 Style="color:blue;font-family:bree serif;font-size:20px">Form</h1>
            <div>
                <input type="number" placeholder="Enter amount" name="Money" value={value1} onChange={tharun} />
                <button className="button1" onClick={(e) => {
                    dispatch(deposit(value1))
                    dispatch({type:"Add",payload:{amount:value1,type:"Credit",date:new Date()}})
                    setvalue("")
                }
                }>Deposit</button>
                <button className="button2" onClick={(e) => {
                    dispatch(Withdraw(value1))
                    dispatch({type:"Add",payload:{amount:value1,type:"Debit",date:new Date()}})
                    setvalue("")
                }
                }>Withdraw</button>
            </div>
            <div>
                <input type="text" placeholder="Enter ur name" name="Name" value={name} onChange={NAME} />
                <button className="button1" onClick={(e) => {
                    dispatch(NameUpdate(name))
                    setname("")
                }}>Update</button>
            </div>
            <div>
                <input type="number" placeholder="Enter ur Mobile Number" name="MObile" onChange={NUMBER} value={number} />
                <button className="button1" onClick={(e) => {
                    dispatch(PhoneNumberUpdate(number))
                    setPhoneNumber("")
                }}>Update</button>
            </div>
            <button className="button2" onClick={()=>{dispatch(reset())}}>Reset</button>
        </div>
    )
}

export default Form