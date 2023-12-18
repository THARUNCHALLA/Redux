import { useSelector} from "react-redux"

const Account = ()=>{
    const data = useSelector((s)=>{
        return s
    })
    console.log(data)
    return(
        <div>
            <h1 Style="color:blue;font-family:bree serif;font-size:20px">Account Details</h1>
            <table border={1} Style="border-collapse:collapse">
                <tr>
                    <th width={130}>Balance</th>
                    <th width={130}>User Name</th>
                    <th width={130}>Mobile</th>
                </tr>
                <tr>
                    <td align="center">{data.Application.balance}</td>
                    <td align="center">{data.Application.Fullname}</td>
                    <td align="center">{data.Application.PhoneNumber}</td>
                </tr>
            </table>
            <h1 Style="color:blue;font-family:bree serif;font-size:20px">Transaction Details</h1>
            <table border={1} Style="border-collapse:collapse">
                <tr>
                    <th width={130}>Transaction Id</th>
                    <th width={130}>Amount </th>
                    <th width={130}>Type</th>
                    <th>Date</th>
                </tr>
                {data.Transaction.map(each=>(
                <tr key={each.date.getTime().toString()}>
                    <td>{each.date.getTime().toString()}</td>
                    <td align="center">{each.amount}</td>
                    <td align="center">{each.type}</td>
                    <td align="center">{each.date.toString()}</td>
                </tr>))
}
            </table>
        </div>
    )
}

export default Account