import React from 'react'
import PgSummary from './PgSummary'

const PgList = (props) => {
    console.log("**************")
   let obj  =  props.pgs
   if(typeof(obj)=="object"){
        var res = Object.keys(obj).map(function(k) {
        return [+k, obj[k]];
    });

    let farr = []
    res.forEach((ele)=>{
        farr.push(ele[1])
        }
    )
    console.log(">>>",farr);
    console.log(props.PgLocation)
    console.log(props.Type)
    console.log("**************")

    let filteredPgs = []
    farr.filter((pg)=>{
            if(pg.PgLocation===props.PgLocation && pg.Type === props.Type){
                filteredPgs.push(pg)
            }
    })
    console.log(filteredPgs);

            if(filteredPgs.length===0){
                return(
                    <div className = "container">
                        <strong>No Filtered Result.
                            <p>Try Changing Filter.</p>
                        </strong>
                        {farr && farr.map(pg=>{
                            return(<PgSummary key = {pg.id} pg = {pg} />)
                            
                        }
                            )
                        }
                    </div>
                )
            }
            else if(filteredPgs.length!==0){
                return(
                    <div className = "container">
                        {filteredPgs && filteredPgs.map(pg=>{
                            return(<PgSummary key = {pg.id} pg = {pg} />)
                            
                        })}
                    </div>
                )
                
            }}
    
    else{
        return(
            <div className = "container">
                Loading
            </div>
        )
    }
}
export default PgList;