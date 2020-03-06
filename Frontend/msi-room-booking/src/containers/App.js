import React from 'react';
import Header from "../components/Header";
import Rooms from "../components/Rooms";

class App extends React.Component{

    render() {
        return (
            <React.Fragment>
                <nav>
                    <Header/>
                </nav>
            <Rooms>

            </Rooms>
            </React.Fragment>
        );
    }
}

export default App;
