import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
class App extends Component {
    state=  {
            language : 'english', 
            };
    onLanguageChange = ( language ) => {
        this.setState({ language });
    }
    render () {
        return (
            <div className="ui container">
               <LanguageSelector onLanguageChange = { this.onLanguageChange } />               
                <ColorContext.Provider value='black'>
                    <LanguageContext.Provider value={ this.state.language }>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>
               
            </div>
        );
    }
};
export default App;