import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import MainNav from '../components/NavBar'





export default class MessageForm extends Component{

   constructor(...args){
      super();
      this.state ={
         textValue: ""
      };

   }


   sendMessage(e){
      e.preventDefault()

      if(this.state.textValue === ""){
         return
      }
      console.log(this.state.textValue)
      hashHistory.push('/')
   }
   handleTextChange(){
      this.setState({textValue: this.refs.message.value})
   }

   render(){
      let { textValue } = this.state
      let handleButtonShow = ()=>{
         if(textValue === ""){
            return "btn btn-primary disabled"
         }else{
            return "btn btn-primary"
         }
      }

      return(
         <div className="fluid-container home-container">
            <MainNav {...this.props}/>
            <div className="container">
               <form className="form-horizontal" onSubmit={this.sendMessage.bind(this)}>
                  <div className="form-group">
                    <div className="col-lg-12">
                      <textarea placeholder={"send message to " + this.props.params.userName} value={this.state.textValue} onChange={this.handleTextChange.bind(this)} className="form-control" rows="3" id="textArea" ref="message">
                      </textarea>
                    </div>
                  </div>
                  <div className="btn-group btn-group-justified">
                     <button className="btn btn-danger"><Link to="/">Cancel</Link></button>
                     <button className={handleButtonShow()} type="submit">Send</button>
                  </div>
               </form>
            </div>

         </div>

      )
   }
}
