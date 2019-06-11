import React , {Component} from 'react'
import {newPg} from '../../store/actions/pgActions'
import {connect} from 'react-redux'

class NewPg extends Component{
    state = {
        PgName : '',
        PgLocation : '' ,
        Owner:'',
        contact:'',
        Type:'',
        Rent:''
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.newPg(this.state);
        this.props.history.push('/');
    }

    render(){
        return(
            <div className = "container">

                <form onSubmit = {this.handleSubmit} >
                    <div className = "container">
                    <h4>Add a new pg</h4>
                    <div className = "input-field">
                        <input type = "text" id = "PgName" onChange = {this.handleChange} />
                        <label htmlFor = "PgName">Pg Name</label>
                    </div>
                    
                    <div className = "input-field">
                        <input type = "text" id = "PgLocation" onChange = {this.handleChange} />
                        <label htmlFor = "PgLocation">PgLocation</label>
                    </div>
                    <div className = "input-field">
                        <input type = "text" id = "Owner" onChange = {this.handleChange} />
                        <label htmlFor = "Owner">Owner</label>
                    </div>

                    <div className = "input-field">
                        <input type = "text" id = "contact" onChange = {this.handleChange} />
                        <label htmlFor = "contact">contact</label>
                    </div>

                    <div className = "input-field">
                        <input type = "text" id = "Type" onChange = {this.handleChange} />
                        <label htmlFor = "Type">Type</label>
                    </div>

                    <div className = "input-field">
                        <input type = "text" id = "Rent" onChange = {this.handleChange} />
                        <label htmlFor = "Rent">Rent</label>
                    </div>


                    <div className="input-field">
                     <button className="btn blue lighten-1">Post</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        newPg:(pg) => dispatch(newPg(pg))
    }
}

export default connect(null,mapDispatchToProps)(NewPg);