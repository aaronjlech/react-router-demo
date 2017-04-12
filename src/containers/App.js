import React from 'react';
import axios from 'axios';
// WRAPPER COMPONENT THAT PASSES STATE AS PROPS TO ALL CHILDREN COMPONENTS
const App = React.createClass({

   getInitialState: function(){
      return {
         currentUser: {},
         users: [],
         messages: [],
         friendRequests: []

      }
   },
   componentDidMount(){
      const getAllUsers = () => axios.get('https://randomuser.me/api/?results=100')
      const getCurrent= ()=> axios.get('https://randomuser.me/api/?results=1')

      axios.all([getCurrent(), getAllUsers()])
      .then(axios.spread((current, all)=> {
         this.setState({currentUser: current.data.results[0], users: all.data.results})
        }));

   },


   render(){
      console.log(this.state)
      if(this.state.users.length < 1){
         return(
            <div></div>
         )
      }
      return(
         <div>
            {React.cloneElement(this.props.children, this.state)}
         </div>
      )
   }


})

export default App;
