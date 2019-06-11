import React from 'react'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'




const PgDetails = (props) => {
  const { pg } = props;
  if (pg) {
    return (
      <div className="container">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{pg.PgName}</span>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>PgName: {pg.PgName }</div>
            <div>PgLocation: {pg.PgLocation }</div>
            <div>Owner: {pg.Owner }</div>
            <div>contact: {pg.contact }</div>
            <div>Type: {pg.Type }</div>
            <div>Rent: {pg.Rent }</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Please wait finding pgs...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const pgs = state.firestore.data.pgs;
  const pg = pgs ? pgs[id] : null
  return {
    pg: pg
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'pgs'
  }])
)(PgDetails)


    
