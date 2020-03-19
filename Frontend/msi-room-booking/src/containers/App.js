import React from 'react';
import Header from "../components/Header";
import Rooms from "../components/Rooms";
import Home from "../components/Home";
import AddReservation from "./AddReservation";
import './App.scss'
import InviteList from "../components/InviteList";
import FacilityList from "../components/FacilityList";
import AddNewReservation from "./AddNewReservation";

class App extends React.Component{


    render() {
        return (
            <React.Fragment>
                <nav >
                    <Header/>
                </nav>
                <AddNewReservation>

                </AddNewReservation>

                <main className="app-content" >
                    {this.props.children}
                </main>


            </React.Fragment>
        );
    }
}

export default App;
