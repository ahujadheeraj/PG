import React from 'react'
import {Link} from 'react-router-dom'

const PgSummary = ({pg}) => {
    
    return(
        <div >
          <div className = "col s12 m6 l3">
            <div class="card">
                
                <div class="card-content">
                    <p><b>{pg.PgName}</b></p>
                    
                    <p>{pg.PgLocation}</p>
                    <p>{pg.Type}</p>

                </div>
                <div class="card-action">
                    <Link to = {'/pg/'+pg.id}>View Details</Link>

                </div>  
              </div>
            </div>
        </div>
        
    )
}

export default PgSummary;