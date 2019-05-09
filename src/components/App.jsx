import React, { Component } from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';
import ColorContext from '../contexts/ColorContext';
class App extends Component {
    // state=  {
    //         language : 'english', 
    //         };
    // onLanguageChange = ( language ) => {
    //     this.setState({ language });
    // }
    render () {
        return (
            <div className="ui container">
                <LanguageStore>
                   
                    <LanguageSelector/>               
                    <ColorContext.Provider value='black'>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
};
export default App;