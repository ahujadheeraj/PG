import React,{Component} from 'react'
import { connect } from 'react-redux'
import firestore from 'react-redux-firebase'

class Filter extends Component{
    state = {
        PgLocation : '' ,
        Type:''
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.PgLocation);
        console.log(this.state.Type);
            {/* var query = firestore.collection('pgs')
            .where("PgLocation", "==", this.state.PgLocation)
            .where("Type", "==", this.state.Type)
            console.log(query)*/}       
        }
    render(){
    return(
        <div>
            <form onSubmit = {this.handleSubmit} >
                    <div className = "container">
                    <h4>Filter Search Results</h4>

                    <div className = "input-field">
                        <input type = "text" id = "PgLocation" onChange = {this.handleChange} />
                        <label htmlFor = "PgLocation">PgLocation</label>
                    </div>

                    <div className = "input-field">
                        <input type = "text" id = "Type" onChange = {this.handleChange} />
                        <label htmlFor = "Type">Type</label>
                    </div>
                    
                   

                    <div className="input-field">
                     <button className="btn blue lighten-1">Search</button>
                    </div>
                    </div>
                </form>
        </div>
    )
}

}

export default Filter;