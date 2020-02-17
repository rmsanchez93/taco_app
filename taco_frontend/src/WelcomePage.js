import React from 'react';
import './WelcomePage.css';


// class SignUp extends React.Component
class WelcomePage extends React.Component{

    state={
        signUpBox: false,
        loginBox: false,
    }

    signUpModal = () => {
        this.setState({
            signUpBox: !this.state.signUpBox
        })
        console.log('The SignUpModal should appear')
    }

    loginModal = () => {
        this.setState({
            loginBox: !this.state.loginBox
        })
        console.log('The LoginModal should appear')
    }


    render(){
        return(
            <div>
    <div className='main-container'>
      <h1> Food Truck App </h1>

      {/* NOTE: For some reason this form makes an error 
    Error: input is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.
            Must find a way to clear problem
       */}

          {/* <form> 

              <label> Email: </label> 
                <input type='text' placeholder='Email' name='Email'>  </input>
               
               <label> Password: </label>
                <input type='text' placeholder='Password '> </input>
                
          </form> */}
     

      <div>
          <br></br>
          Here we want the modal to change depending on which button pressed
          <br></br>
          <br></br>
      </div>

        <div className='button-container'>
            <div className='loginButton' onClick={() => this.loginModal()}>
                    <h2> Login  </h2>
            </div>
            <div className='signupButton' onClick={() => this.signUpModal()}>
                    <h2> Sign Up  </h2>
            </div>
        </div>   

    </div> 
</div>
        );
    } // closes render
}; // closes Class Component


export default WelcomePage;
