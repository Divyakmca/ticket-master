import React from 'react'
import axios from 'axios'

class TicketForm extends React.Component{
    constructor(){
        super()
        this.state = {
            name:'',
            department:'',
            priority:'',
            message:'',
            departmentOptions: [
                {id:1, name:'technical'},
                {id:2, name:'sales'},
                {id:3, name:'hr'},
                {id:4, name:'service'}
            ],
            errors: {}
           // msg:'Add tickets'
            
        }
        this.handleReset = this.handleReset.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this)
    }
 
    // 3 ways of writing event handlers

    //1 - arrow functions
    handleNameChange = (e) => {
        const name = e.target.value
        this.setState(() => ({name}))
        
    }

    //2. regular method - bind in constructor
    handleDepartmentChange(e){
        const department = e.target.value
        this.setState(() => ({department}))


    }

    //bind when calling function - least popular way - not at all used nowadays
    handlePriorityChange(e){
        const priority = e.target.value
        this.setState(() => ({priority}))

    }

    handleSubmit(e){
        e.preventDefault()
        const formData = {
            name: this.state.name,
            department: this.state.department,
            priority: this.state.priority,
            message: this.state.message
        }
        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=6210d965fc0b939a',formData)
        .then(response => {
            console.log(response.data)
            if(response.data.hasOwnProperty('errors')){
                this.setState(() => ({errors: response.data.errors}))

            }
            else
            {
            this.props.handleTicketSubmission(response.data)
            this.resetForm()
        }
        })
       // console.log(formData)
    }
    resetForm(){
        this.setState(() => ({
            name: '',
            department: '',
            priority: '',
            message: ''
        }))

    }

    handleReset(e){
        e.preventDefault()
        this.resetForm()
       

    }

    // printMessage(){
    //     return this.state.msg
    // }

  

    render(){
       // console.log(this.state)
        return(
            <div className="form-group">
                <form onSubmit={this.handleSubmit}>
                    <fieldset className="p-3 mb-2 bg-secondary text-white">
                       <legend>Add Tickets</legend>
                        <label>
                            Name:
                            <input type="text" class="form-control" value={this.state.name} onChange={this.handleNameChange}/>

                            {this.state.errors.name && <span>{this.state.errors.name.join(', ')}</span>}
                        </label><br/>

                        <label>
                          Department
                          <select value={this.state.department} class="form-control" onChange={this.handleDepartmentChange}>
                              <option value="">select</option>
                              {this.state.departmentOptions.map((dept) => {
                                  return <option key={dept.id}>{dept.name.toUpperCase()}</option>

                              })}
                              
                          </select>  
                          {this.state.errors.department && <span>{this.state.errors.department.join(', ')}</span>}  
                        </label><br/>

                        <label>
                            Priority
                            <select value={this.state.priority} class="form-control" onChange={this.handlePriorityChange.bind(this)}>
                            <option value="">select</option>
                            <option value="low">low</option>
                            <option value="high">high</option>
                            <option value="medium">medium</option>
                            </select>
                            {this.state.errors.priority && <span>{this.state.errors.priority.join(', ')}</span>}

                        </label><br/>

                        <label>
                            Message
                            <textarea value={this.state.message} class="form-control" onChange={(e) => {
                                const message = e.target.value
                                this.setState(() => ({message}))

                            }}>
                            </textarea>    
                            {this.state.errors.message && <span>{this.state.errors.message.join(', ')}</span>}
                        </label><br/>
                        <input class="btn btn-primary mr-1" type="submit"/>
                        <button class="btn btn-primary " onClick={this.handleReset}>reset</button>

                    </fieldset>    
                </form>
            </div> 
        )
    }
}
export default TicketForm