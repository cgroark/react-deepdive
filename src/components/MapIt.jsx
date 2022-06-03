import React from 'react';

class MapIt extends React.Component{
    render(){
        const arr = ['yeah', 'yeah', 'yeahs'];
        
        const mapped = arr.map((each, i) => {
            return <li key={i}>{each}</li>
        })
        return(
            <div>
                <p>Maps: say say say</p>
                <ul>
                    {mapped}
                </ul>
            
            </div>
        )
    }
}

export default MapIt;