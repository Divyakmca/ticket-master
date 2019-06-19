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
                
                <button onClick={() => {
                    this.props.handlePriorityClick('all')
                }}>All</button>

                <button onClick={() => {
                    this.props.handlePriorityClick('high')
                }}>High</button>

                <button onClick={() => {
                    this.props.handlePriorityClick('medium')}}>Medium</button>

                <button onClick={() => {
                    this.props.handlePriorityClick('low')}}>Low</button>
            </div>
        )
    }
}

export default SearchForm