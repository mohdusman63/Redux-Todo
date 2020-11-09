import React from 'react';
// import Login from './Login'
import {Provider} from 'react-redux'
import Form from './Form';
import store from './store/index'
import User from './User'

function App() {

    return (
        <Provider store={store}>
            <div className="container mt-5" >
                <Form/>
                <User/>
            </div>


        </Provider>



    );
}

export default App;