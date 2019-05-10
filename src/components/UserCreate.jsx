import React from 'react';
import Field from './Field';
import Button from './Button';
// import Canvas from './Canvas';
import HighCharts from './HighCharts';


const UserCreate = ( props ) => {
    return (
            <div className='ui form'>
                {/* <Canvas /> */}
                <Field />
                <Button />
                <HighCharts />
            </div>
    );
};
export default UserCreate;
