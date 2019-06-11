import React from 'react'
import PgSummary from './PgSummary'

const PgList = ({pgs}) => {
    console.log(pgs)

    return(
        
        <div>
    
            {pgs && pgs.map(pg=>{
                return(
                    <PgSummary key = {pg.id} pg = {pg} />
                    
                )
            })}
        </div>
    )
}

export default PgList;