import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
 
 

class Sty extends React.Component{
  constructor(){
    super();
    this.state={
      voteAllowed: 0,
      voteNotAllowed: 0,
      name: '',
      age: '',
      data: []
    }
  }

  onChangeH=(e)=>{
    let nam=e.target.name;
    let val=e.target.value;
    this.setState({[nam]:val});

     

  }
  onSubmitH(e){
    e.preventDefault();
    const {name,age, voteAllowed,voteNotAllowed,data}=this.state;

    const obj={
      name,
      age
    }
    if(parseInt(age)>18){
      this.setState({
        voteAllowed: voteNotAllowed+1

      })
    }else{
      this.setState({
        voteNotAllowed:voteNotAllowed+1
      })
    }

    this.setState({
      name: '',
      age: '',
    })
    data.push(obj)


  }
  render(){

    return(
      <div className="container">
      
       <h1> Voting System </h1>
       <br />
       <br />
       <div className="row">
        <div className="col-md-6">
          <div className="voteer">

          </div>




        </div>




        <div className="col-md-6">
           <h3>Vote Allowed: {this.state.voteAllowed}</h3> <br />
           <h3>Vote Not-Allowed: {this.state.voteNotAllowed}</h3>

        </div>

       </div>
       <form onSubmit={this.onSubmitH.bind(this)}>
        <div className="form-group">
         <label for="name" className="v1">Name:</label>
         <input type="text" className="form-control" id="name" onChange={this.onChangeH} name="name"/>
        </div>
        <div className="form-group">
         <label for="age" className="v1">Age:</label>
         <input type="text" className="form-control" id="age" onChange={this.onChangeH} name="age" />
        </div>
         
        <button type="submit" className="btn btn-secondary v1" >Submit</button>
      </form>


      </div>
       );
    }
  }

ReactDOM.render(<Sty /> ,document.getElementById('root'));
export default Sty;