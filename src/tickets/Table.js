import React from 'react'
import TicketRow from './Row'

const TicketTable = (props) => {
    return(
        <table border="1" className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col"> Code </th>
                    <th scope="col"> Name </th>
                    <th scope="col"> Department </th>
                    <th scope="col"> Priority </th>
                    <th scope="col"> Message </th>
                    <th scope="col"> Status </th>
                </tr>
            </thead>
            <tbody>
                {props.tickets.map(ticket => {
                    return <TicketRow key={ticket.ticket_code} ticket={ticket}/>
                })}
            </tbody>

        </table>
    )
}
export default TicketTable