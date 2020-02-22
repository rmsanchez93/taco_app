import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';


class NavBar extends React.Component{
    

    render(){


        return(
            <div>
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Taco Truck App</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/user_dashboard">Home</Nav.Link>
                <Nav.Link href="/trucks_near_you">Trucks Near You</Nav.Link>
                <Nav.Link href="/map">Map</Nav.Link>
                <Nav.Link herf='/reviews'> Reviews </Nav.Link>
                </Nav>

                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form> */}
        </Navbar>
            </div>
        )
    }

};


export default NavBar;