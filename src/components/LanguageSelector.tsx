import { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
class LanguageSelector extends Component {
    static contextType =  LanguageContext ;
    render (){
        // console.log('test : ',this.context);
        return (
            <div>
            Select Language: 
                <i className='flag us' onClick={ () => this.context.onLanguageChange('english') } />
                <i className='flag nl' onClick={ () => this.context.onLanguageChange('dutch') } />
        </div>
        );
    }

};
export default LanguageSelector;