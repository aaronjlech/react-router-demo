import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';






export default class MessageForm extends Component{

   constructor(...args){
      super();
      this.state ={
         textValue: ""
      };

   }


   sendMessage(e){
      e.preventDefault()
      console.log(this.state.textValue)
      browserHistory.push('#/')
   }
   handleTextChange(){
      this.setState({textValue: this.refs.message.value})
   }

   render(){
      return(
         <div className="container">
            <form className="form-horizontal" onSubmit={this.sendMessage.bind(this)}>
               <div className="form-group">
              <label htmlFor="textArea" className="col-lg-2 control-label">Textarea</label>
                 <div className="col-lg-10">
                   <textarea value={this.state.textValue} onChange={this.handleTextChange.bind(this)} className="form-control" rows="3" id="textArea" ref="message">
                   </textarea>
                 </div>
               </div>
               <div className="btn-group btn-group-justified">
                  <button className="btn btn-danger">Cancel</button>
                  <button className="btn btn-primary">Send</button>
               </div>
            </form>
         </div>

      )
   }
}
