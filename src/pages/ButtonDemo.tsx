import React, { useState } from 'react';
import Button from '../Components/Button';

const ButtonDemo = () => {

    const [loading, setLoading] = useState(false);

    const simulateAsyncAction = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            console.log('Async action completed');
        }, 2000);
    };

    return (
        <div className='flex items-center gap-x-10'>
            <Button text="Primary Loading" onClick={() => simulateAsyncAction()} loading={loading} loadingText='Fetching data' />
            <Button text="Disabled Button" onClick={() => { }} disabled />
            <Button text="Secondary Button" onClick={() => alert("Clicked me")} styleType="secondary" />
            <Button text="Danger Button" onClick={() => { }} styleType="danger" />
        </div>
    );
};

export default ButtonDemo;