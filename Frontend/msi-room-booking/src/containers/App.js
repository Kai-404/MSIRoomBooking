import React from 'react';
import Header from "../components/Header";
import './App.scss'
import ReservationDetail from "../components/ReservationDetail";


class App extends React.Component{


    render() {
        return (
            <React.Fragment>
                <nav >
                    <Header/>
                </nav>
                <main className="app-content" >
                    {this.props.children}
                </main>


            </React.Fragment>
        );
    }
}

export default App;
