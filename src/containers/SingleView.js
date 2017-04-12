import React, { Component } from 'react';
import UserThumbnail from '../components/UserThumbnail';
import MainNav from '../components/NavBar';



export default class SingleView extends Component{

   render(){
      let selectedUser = this.props.users.filter((user, i)=>{
         if(this.props.params.userName === user.login.username){
            return true
         }
      })[0]

      let { login, name, picture } = selectedUser
      return(
         <div className="">
            <MainNav {...this.props}/>
            <div className="fluid-container home-container">
               <div className="row">
                  <div className="col-sm-12">
                     <img src={picture.large} alt=""/>
                     <h4>name:</h4>
                     <h3>{name.first + " "  + name.last}</h3>
                     <h4>username:</h4>
                     <h3>{login.username}</h3>
                     <h4>email:</h4>
                     <h3>{selectedUser.email}</h3>

                  </div>
               </div>
            </div>
         </div>
      )
   }
}
