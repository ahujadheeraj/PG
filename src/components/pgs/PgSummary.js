import React from 'react'
import {Link} from 'react-router-dom'

const PgSummary = ({pg}) => {
    
    return(
        <div >
          <div className = "col s12 m10 l9">
            <div className="card">
                
                <div className="card-content">
                    <p><b>{pg.PgName}</b></p>
                    
                    <p>{pg.PgLocation}</p>
                    <p>{pg.Type}</p>

                </div>
                <div className="card-action">
                    <Link to = {'/pg/'+pg.id}>View Details</Link>

                </div>  
              </div>
            </div>
        </div>
        
    )
}

export default PgSummary;