import React from 'react'
import {Chart} from 'react-google-charts'

class GraghBar extends React.Component{

    render(){
        console.log(this.props.graghBar)
        let technical=0,manager=0,hr=0,service=0
        return(
           
            <div>
                {this.props.graghBar.forEach(graghelement=>{
                    if(graghelement.department==='TECHNICAL'){
                        technical++
                    }else if(graghelement.department==='MANAGER'){
                        manager++
                    } else if(graghelement.department==='HR'){
                        hr++
                    }else {
                        service++
                    }
                })}

                    <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['department', 'no-of-departments'],
                        ['TECHNICAL',technical] ,
                        ['MANAGER',manager],
                        ['HR', hr],
                        ['SERVICE',service],
                       
                    ]}
                    options={{
                        // Material design options
                        chart: {
                        title: 'Tickets by department',
                    
                        },
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '2' }}
                    />
                    {console.log(technical,manager.hr,service)}
            </div>
        )
    }
}
export default GraghBar