import React from 'react'
import ReactDOM from 'react-dom'

// import Users1 from './Users1'
// import UserShow from './UserShow'

import App from './App'

//import Hashtag from './Hashtag'
// import Conversion from './Conversion'
//import Convertunits from './Convertunits'


const Hello = (props) =>{
    return(
        <div>
           {/* <h1>Ajax calls</h1> */}
            
            
            <App />

            {/* {<Users1 />}

            {<UserShow />} */}

            {/* <Conversion /> */}
            

            
           
            
            
            </div>
    )
}
ReactDOM.render(<Hello/>, document.getElementById('root'))