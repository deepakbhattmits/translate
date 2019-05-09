import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
    renderText = ( value ) => {
        return value === 'english' ? 'Submit' : 'Voorleggen';
    }
    renderButton = ( color ) => {
        return (
            <button className={`ui button ${ color }`}>
                <LanguageContext.Consumer >
                    { ( value ) => this.renderText(value) }
                </LanguageContext.Consumer>
            </button>
        );
    }
    // static contextType = LanguageContext;
    render(){
        // console.log(this.context);
       //  const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
        return (
            <div className="ui">
            <ColorContext.Consumer>
                { 
                    ( color ) => 
                       this.renderButton( color )
                 }
            </ColorContext.Consumer>
            </div>
        );
    }
};
export default Button;