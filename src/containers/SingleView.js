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
      console.log(selectedUser)
      return(
         <div className="">
            <MainNav {...this.props}/>
            <div className="fluid-container">
               <div className="row">

               </div>
            </div>
         </div>
      )
   }
}
