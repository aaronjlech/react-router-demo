import React, { Component } from 'react';
import { Link } from 'react-router';




export default class UserThumbnail extends Component{

   render(){
      let { name, login, picture } = this.props.user

      return(

         <div className="col-sm-6 col-md-3">
            <div className="thumbnail text-center" >
             {/* <div className=" thumbnail"> */}
             <div className="caption text-center">
                <img src={picture.large} alt="..."/>
                <div>
                   <h3>{name.first}</h3>

                </div>
                  <h4>{login.username}</h4>
               <p>...</p>
               <Link to={`/send-message/${login.username}`}><button className="btn btn-default">Send Message</button></Link>
               <Link to={`/view/${login.username}`}><button className="btn btn-default">View Profile</button></Link>
            </div>
         </div>
      </div>
      )
   }
}
