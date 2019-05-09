import React from 'react';
import Field from './Field';
import Button from './Button';
import Canvas from './Canvas';


const UserCreate = ( props ) => {
    return (
            <div className='ui form'>
                <Canvas />
                <Field />
                <Button />
            </div>
    );
};
export default UserCreate;
