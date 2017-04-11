import React from 'react';
import UserThumbnail from '../components/UserThumbnail';
import MainNav from '../components/NavBar';

export const HomeView = React.createClass({

   render(){
      let { users } = this.props
      return(
         <div className="fluid-container home-container">
            <MainNav {...this.props}/>
            <div className="row">
               {users.map( (user, i) => <UserThumbnail key={i} user={user}/>   )}
            </div>
         </div>
      )
   }
})
