import React from 'react'
import {Chart} from 'react-google-charts'

class Charts extends React.Component{
    render(){
        let high=0,low=0,medium=0;
        console.log(this.props.piHandle)
        return(
            <div>
              {this.props.piHandle.forEach(pielement => {
                   if(pielement.priority==="high"){
                       high++
                   }else if(pielement.priority==="medium"){
                       medium++
                   }else
                   {
                       low++
                   }
                   })}

                <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                   
                    ['priority', 'levels'],
                    ['high', high],
                    ['low', low],
                    ['medium', medium],
                  
                 
                ]}
                options={{
                    title: 'ticket priority',
                }}
                rootProps={{ 'data-testid': '1' }}
                />
                  
                   {console.log(high,medium,low)}

            </div>
        )
    }
}

export default Charts