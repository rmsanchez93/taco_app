import React from 'react';
import NavBar from '../UserDashBoard/NavBar/NavBar';
import './UserDashboard.css'




class UserDashBoard extends React.Component{


    render(){


        return(
            <div>
                <NavBar/>

                <h1 className='title'> Let's Find Some Food! </h1>
            </div>
        )
    }

};


export default UserDashBoard;