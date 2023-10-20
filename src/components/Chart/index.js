import React from 'react'
import './styles.css'
import { LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

 const Chart = ({ data, dataKey}) => {

    return(
        <div className="chart">
          < ResponsiveContainer width="100%" aspect={4 / 3}>
        <LineChart 
          data={data}
        >
          <CartesianGrid  />
          <Tooltip  />
          <Line dataKey={dataKey} fill="#EBD579" />
          <Line dataKey={dataKey} fill="#EBD579" />
        </LineChart>
        </ResponsiveContainer>
        </div>
    )
}
export default Chart