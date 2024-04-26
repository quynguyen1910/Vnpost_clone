import React from 'react';

const Heading = ({content}) => {
    return (
        <>
            <h3 className='text-2xl font-bold text-blue-800 uppercase'>{content}</h3>
        </>
    );
};

export default Heading;