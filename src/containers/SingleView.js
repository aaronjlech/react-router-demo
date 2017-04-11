import React, { Component } from 'react';
import UserThumbnail from '../components/UserThumbnail';
import MainNav from '../components/NavBar';



export default class SingleView extends Component{





   render(){
      console.log(this.props, 'heyy')
      let selectedUser = this.props.users.filter((user, i)=>{
         console.log(this.props.params.id, i)
         if(this.props.params.userName === user.login.username){
            return true
         }
      })[0]
      console.log(selectedUser)
      return(
         <div className="">
            <MainNav {...this.props}/>
            <h1>Hello {selectedUser.name.first}</h1>
         </div>
      )
   }
}
