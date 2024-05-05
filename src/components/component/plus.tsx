import React from 'react';
import { Plus } from 'lucide-react';

const increase = () => {
    const handleClick = () => {
        console.log('Plus button clicked!');

    };

    return (
        <button onClick={handleClick}>
            <Plus />
        </button>
    );
};

export default increase;
