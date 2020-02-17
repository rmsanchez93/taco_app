import React from 'react';
import './WelcomePage.css';



class WelcomePage extends React.Component{

    state={
        signUpShow: false,
        loginShow: false,
        modal: false,
    }

    showSignUp = () => {
        this.setState({
            signUpShow: !this.state.signUpShow
        })
    }

    renderSignUpModal = () => {
        console.log('The SignUpModal should appear')
        if(this.state.signUpShow === true)
        return(
            <form className='signUpContainer'> 

            <label> Full Name: </label> 
              <input type='text' placeholder='Name Here' name='Full Name'/>  
             <br/>
             <label> Email: </label>
              <input type='text' placeholder='Email' name='Email'/> 
              <br></br>
              <label> Password: </label>
              <input type='text' placeholder='Password' name='Password'/>
              <br></br>

              <button type='submit' className='submitSignUp'> Show Me Tacos! </button>
              
        </form>
        )
    }

    renderLoginModal = () => {
        this.setState({
            loginShow: !this.state.loginShow
        })
        console.log('The LoginModal should appear')
        return(
            <form className='loginContainer'> 

            <label> Email: </label> 
              <input type='text' placeholder='Email' name='Email'/>  
             <br/>
             <label> Password: </label>
              <input type='text' placeholder='Password '/> 
              <br></br>
              <button type='submit' className='submitLogin'> Login! </button>
              
        </form>
        )
    }


    render(){


        return(
            <div className='welcomePage'>
    <div className='main-container'>
      <h1> Food Truck App </h1>
      <br></br>

            
            {this.renderSignUpModal()}
            {/* {this.renderLoginModal()} */}

          {/* <form className='changingContainer'> 

              <label> Email: </label> 
                <input type='text' placeholder='Email' name='Email'/>  
               <br/>
               <label> Password: </label>
                <input type='text' placeholder='Password '/> 
                <br></br>
                <button type='submit' className='submitLogin'> Login! </button>
                
          </form> */}
     <br></br>
     <br></br>


        <div className='button-container'>
            <div className='loginButton' onClick={() => this.showLogin()}>
                    <h2> Login  </h2>
            </div>
            <div className='signupButton' onClick={() => this.showSignUp()}>
                    <h2> Sign Up  </h2>
            </div>
        </div>   

    </div> {/* closes 'main-containter'*/}
</div> // closes 'welcomePage'
        ); // closes return
    } // closes render
}; // closes Class Component


export default WelcomePage;
