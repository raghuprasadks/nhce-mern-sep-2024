import React from 'react'

const IPL = (properties) => {

    const ipldata = properties.data;
  return (
    <div>
        <h1>IPL Dashboard</h1>
        <table>
            <tr>
                <th>Team</th>
                <th>Captain</th>
                <th>Home</th>
            </tr>
            {
                ipldata.map((team) => {
                    return (
                        <tr>
                            <td>{team.team}</td>
                            <td>{team.captain}</td>
                            <td>{team.home}</td>
                        </tr>
                    )
                })
            }
        </table>
    </div>
  )
}

export default IPL