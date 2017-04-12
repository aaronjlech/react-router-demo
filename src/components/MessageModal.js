import React, { Component } from 'react';
import MainNav from './NavBar';
import UserThumbnail from './UserThumbnail'
import { Link } from 'react-router'



export default class MessageModal extends Component{

   render(){
      let { type } = this.props.params
      return(

            <Link to="/">
               <div className="modal fade in" style={{display: "block"}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
              <h4 className="modal-title">{type === "messages"? "Messages": "Friend Requests"}</h4>
            </div>
            <div className="modal-body">
               <div className="alert alert-dismissible alert-danger">

                 <strong>Oh snap!</strong> <a href="#" className="alert-link">YOU GOT NO {type === "messages"? "Messages": "Friend Requests"}</a> check back in a few minutes
               </div>            </div>

          </div>
        </div>
      </div>


               </Link>
      )

   }
}
