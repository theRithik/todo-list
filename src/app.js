import React,{Component} from 'react';

class App extends Component{
    constructor(){
        super()
        this.state={
            title:'',
            keyword:''
           
        }

    }

    handleChange=(event)=>{
        this.setState({title:event.target.value})
    }
    handleClick =()=>{

        this.setState({keyword:this.state.title})
    }

    render(){
    return(
        <>
        <div class='container'>
            <br/>
        <center>
            <div class='col-mb-4'>
        <input onChange={this.handleChange} type='text'  class='form-control'/>
        <input className='btn btn-primary' type='button' onClick={this.handleClick} value='submit'/>
        </div>
        <span type='checkbox'>{this.state.keyword}</span>
        </center>
        </div>
         

        </>
    )
    }
}
export default App;