import React from 'react';
import Header from "../components/Header";
import './App.scss'


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
