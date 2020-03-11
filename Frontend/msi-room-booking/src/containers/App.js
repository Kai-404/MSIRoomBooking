import React from 'react';
import Header from "../components/Header";
import Rooms from "../components/Rooms";
import Home from "../components/Home";

class App extends React.Component{

    render() {
        return (
            <React.Fragment>
                <nav>
                    <Header/>
                </nav>
                <main className="app-content">
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default App;