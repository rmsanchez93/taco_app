import React from 'react';
import './WelcomePage.css';
// import image from './favicon.png'


class WelcomePage extends React.Component{

    state={
        modal: false,
    };

  
    showModal = () => {
        this.setState({
            modal: true
        })
    }

    showModal2 = () => {
        this.setState({
            modal: false
        })
    }

    renderModal = () => {
        if(this.state.modal === true){
            console.log('The SignUpModal should appear')
           return(
           <div>
                <h2> Let's Sign Up!</h2>
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
                <label> Confirm Password: </label>
                <input type='text' placeholder='Password..Again'/>
                <br></br>

                <button type='submit' className='submitSignUp'> Show Me Tacos! </button>
                
                </form>
        </div>
           )
        }if(this.state.modal === false){
            console.log('The LoginModal should appear')
            return(
            <div>
                    <h2> Please Log In!</h2>
                    <form className='loginContainer'> 

                    <label> Email: </label> 
                    <br/>
                    <input type='text' placeholder='Email' name='Email'/>  
                    <br/>
                    <label> Password: </label>
                    <br/>
                    <input type='text' placeholder='Password '/> 
                    <br></br>
                    <button type='submit' className='submitLogin'> Login! </button>
                    
                    </form>
                    {/* <img src={image}/> */}
            </div>
            ) 
        }else{
            return(
                <div>
                        <h2> Please Log In!</h2>
                        <form className='loginContainer'> 
    
                        <label> Email: </label> 
                        <input type='text' placeholder='Email' name='Email'/>  
                        <br/>
                        <label> Password: </label>
                        <input type='text' placeholder='Password '/> 
                        <br></br>
                        <button type='submit' className='submitLogin'> Login! </button>
                        
                        </form>
                </div>
                ) 
        }
    };

    
    render(){


        return(
    <div className='welcomePage'>
                <div className='main-container'>
                <h1> Food Truck App </h1>
             
                
           
            {this.renderModal()}
          
                <br></br>


        <div className='button-container'>
            <div className='loginButton' onClick={() => this.showModal2()}>
                    <h2> Login  </h2>
            </div>
            <div className='signupButton' onClick={() => this.showModal()}>
                    <h2> Sign Up  </h2>
            </div>
        </div>   

    </div> {/* closes 'main-containter'*/}
</div> // closes 'welcomePage'
        ); // closes return
    } // closes render
}; // closes Class Component


export default WelcomePage;
