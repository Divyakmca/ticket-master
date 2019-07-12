import React from 'react'

class SearchForm extends React.Component{
    constructor(){
        super()
        this.state = {
            search: ''
        }
        this.handleSearchChange = this.handleSearchChange.bind(this)

    }
   
    handleSearchChange(e){
        const search = e.target.value
        this.setState(() => ({search}))
        {this.props.handleSearch(search)}


    }
    

    render(){
        return(
            <div>
                <input type="text" value={this.state.search} onChange={this.handleSearchChange} placeholder="search by code"/>
                
                <button class="btn btn-primary mr-1" onClick={() => {
                    this.props.handlePriorityClick('all')
                }}>All</button>

                <button class="btn btn-success mr-1" onClick={() => {
                    this.props.handlePriorityClick('high')
                }}>High</button>

                <button class="btn btn-warning mr-1" onClick={() => {
                    this.props.handlePriorityClick('medium')}}>Medium</button>

                <button class="btn btn-danger mr-1" onClick={() => {
                    this.props.handlePriorityClick('low')}}>Low</button>
            </div>
        )
    }
}

export default SearchForm