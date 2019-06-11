import React, {Component} from 'react'
import PgList from '../pgs/PgList'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import Filter from '../pgs/FilterPg'

class Dashboard extends Component{
    render(){
    
        const {pgs} = this.props
        return(
            <div>
            <Filter />
                <div className = "row" >
                    <div>
                        
                    <PgList pgs = {pgs} />
                    </div>
                </div>      
                </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        pgs: state.firestore.ordered.pgs
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
      { collection: 'pgs' }
    ])
  )(Dashboard)