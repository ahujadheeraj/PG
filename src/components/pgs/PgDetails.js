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
          <div className="card-action grey lighten-4 darkblue-text">
            <div><strong>PgName:</strong> {pg.PgName }</div><br/>
            <div><strong>PgLocation:</strong> {pg.PgLocation }</div><br/>
            <div><strong>Owner:</strong> {pg.Owner }</div><br/>
            <div><strong>contact:</strong> {pg.contact }</div><br/>
            <div><strong>Type:</strong> {pg.Type }</div><br/>
            <div><strong>Rent:</strong> {pg.Rent }</div><br/>
            <div>
              <text><strong>Details:</strong><br/>
              {pg.Details}
            </text>
            </div>
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


    
