import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
    static contextType = LanguageContext;
    render(){
        const lableText = this.context.language === 'english' ? 'Name' : 'Naam';
        return (
            <div className="ui field">
                <label>{ lableText }</label>
                <input type='text' />
            </div>
        ); 
    }
};
export default Field;