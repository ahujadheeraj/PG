import React from 'react'
import './welcome.css'

const Welcome = () => {
    return(
        <div>
            <div className="welcome">
                <div className = "img">

                </div>
                <div className = "brand">
                        MY PG
                </div>
                <div className ="tagline">
                we help u find a pg <br/>that makes u feel ur home...
                </div>
            </div>
    

            
            <div className ="element">
                <div className = "container">
                    <h1>Are You Looking For A PG?</h1>
                    <h3>We Can Help You Find one :)</h3>
                    <br/>
                    <h5><a href ="/filter">See Our Collection</a></h5>
                </div>
            </div>
        </div>
    )
}
       
            
    


export default Welcome