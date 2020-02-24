import React from 'react';
import './WelcomePage.css';
// import image from './favicon.png'



class WelcomePage extends React.Component{

    state={
        modal: false,
        login: {
            email: '',
            password: ''
        },
        signUp:{
            full_name: '',
            username: '',
            email: '',
            password: '',
            confirm_password: '',
        },

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
    consoleLoginEmail = (e) => {
        this.setState({
            login: {...this.state.login, email: e.target.value }
        })
    }

    consoleLoginPassword = (e) => {
        this.setState({
            login: {...this.state.login, password: e.target.value}
        })
    }

    handleConsoleLog = (e) => {
        console.log(this.state.login);
        e.preventDefault();
    }
    
    consoleSignFullName = (e) => {
        this.setState({
            signUp: {...this.state.signUp, full_name: e.target.value}
        })
    }

    consoleSignUsername = (e) => {
        this.setState({
            signUp: {...this.state.signUp, username: e.target.value}
        })
    }

    consoleSignEmail = (e) => {
        this.setState({
            signUp: {...this.state.signUp, email: e.target.value}
        })
    }

    consoleSignPassword = (e) => {
        this.setState({
            signUp: {...this.state.signUp, password: e.target.value}
        })
    }

    consoleSignConfirm = (e) => {
        this.setState({
            signUp: {...this.state.signUp, confirm_password: e.target.value}
        })
    }

    handleConsoleLog2 = (e) => {
        console.log(this.state.signUp);
        e.preventDefault();
    }

    renderModal = () => {
        if(this.state.modal === true){
            // console.log('The SignUpModal should appear')
           return(
           <div className= 'testDeez'>
                <h2> Let's Sign Up!</h2>
                <form className='signUpContainer' onSubmit={this.handleConsoleLog2}> 

                <label> Full Name: </label> 
                <input type='text' placeholder='Name Here' name='Full Name' value={this.state.signUp.full_name} onChange={this.consoleSignFullName}/>  
                <br/>
                <label> Username: </label>
                <input type='text' placeholder='Create Username' value={this.state.signUp.username} onChange={this.consoleSignUsername}/>
                <br></br>
                <label> Email: </label>
                <input type='text' placeholder='Email Here' name='Email' value={this.state.signUp.email} onChange={this.consoleSignEmail}/> 
                <br></br>
                <label> Password: </label>
                <input type='text' placeholder='Something Secret' name='Password' value={this.state.signUp.password} onChange={this.consoleSignPassword}/>
                <br></br>
                <label> Confirm Password: </label>
                <input type='password' placeholder='Password..Again' value={this.state.signUp.confirm_password} onChange={this.consoleSignConfirm}/>
                <br></br>
                {/* <br></br> */}
                <button type='submit' className='submitButton'> Show Me Tacos! </button>
                
                </form>
        </div>
           )
        }if(this.state.modal === false){
            // console.log('The LoginModal should appear')
            return(
                <div className= 'testDeez'>
                    <h2> Please Log In!</h2>
                    <form className='loginContainer' onSubmit={this.handleConsoleLog}> 

                    <label> Email: </label> 
                    <br/>
                    <input type='text' placeholder='Email' name='Email' value={this.state.login.email} onChange={this.consoleLoginEmail}/>  
                    <br/>
                    <label> Password: </label>
                    <br/>
                    <input type='password' placeholder='Password' value={this.state.login.password} onChange={this.consoleLoginPassword}/> 
                    <br></br>
                    {/* <br></br> */}
                    <button type='submit' className='submitButton'> Login! </button>
                    
                    </form>
                    {/* <img src={image}/> */}
            </div>
            ) 
        }
    };

    // componentDidMount(){
    //     fetch( 'http://localhost:3000/users' ) 
    //     .then( resp => resp.json() )
    //     .then( users => console.log(users) )
    // }
    
     
    render(){


        return(
    
        <div className='main-container'>
            <br></br>
                   
                <h1> Food Truck App </h1>
             
                
           
            {this.renderModal()}
          
                <br></br>


        <div className='button-container'>
            <div className='loginButton' onClick={() => this.showModal2()}>
                    <h3>Click Here To Login</h3>
            </div>
            <div className='signupButton' onClick={() => this.showModal()}>
                    <h3>Click Here To Sign Up</h3>
            </div>
        </div>   
            
    </div> 
        // closes 'welcomePage'
        ); // closes return
    } // closes render
}; // closes Class Component


export default WelcomePage;
