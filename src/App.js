import React from 'react'
import axios from 'axios'
import TicketTable from './tickets/Table'

import TicketForm from './tickets/TicketForm'
import SearchForm from './tickets/Search'

import Charts from './tickets/charts'
import Graphbar from './tickets/graphbar'



class App extends React.Component{
    constructor(){
        super()
        this.state = {
            tickets: [],
            originalTickets:[]
        }
        this.handlePriorityClick = this.handlePriorityClick.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleTicketSubmission = this.handleTicketSubmission.bind(this)
    }

    componentDidMount(){
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=6210d965fc0b939a')
        .then(response => { //the response obtained is an object so you should use arrow function
            console.log("index", response.data)
            this.setState(() => ({
                tickets: response.data,
                originalTickets: response.data
            }))
        })
    }

    handleTicketSubmission(ticket){
        //console.log('app',ticket)
        this.setState((prevState) => ({
            tickets: prevState.tickets.concat(ticket),
            originalTickets: prevState.originalTickets.concat(ticket)
        }))


    }

    handleSearch(value){
       // console.log('app', value)
       this.setState((prevState) => ({
           tickets: prevState.originalTickets.filter(ticket => ticket.ticket_code.includes(value))
       }))
    }

    handlePriorityClick(value){
        if(value == 'all'){
            this.setState((prevState) => ({
                tickets:[].concat(prevState.originalTickets)
            }))
        }
        else
        {
            this.setState(prevState => ({
                tickets: prevState.originalTickets.filter(ticket => ticket.priority === value)
            }))
        }
        

    }


    render(){
        return(
            <div className="container">
                <div className="d-flex justify-content-center">
                <h1>Ticket Master</h1>
                </div>

                <h2>Listing Tickets-{this.state.tickets.length}</h2>

                <div className="row">
                <div className="col-md-8">
                <SearchForm handleSearch={this.handleSearch} handlePriorityClick={this.handlePriorityClick}/>

                <TicketTable tickets={this.state.tickets}/>
                </div>
                
                <div className="col-md-4">
                <TicketForm handleTicketSubmission={this.handleTicketSubmission}/>
                </div>

                <Charts piHandle={this.state.tickets}/>
                <Graphbar graghBar={this.state.tickets}/>
                
                </div>
            </div>
        )
    }
}
export default App





