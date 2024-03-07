import React from 'react';

export const BasicFuntions = () => {
    const addTwoNumber= (a:number, b:number):string =>{
        // return (a +b).toString();
        return `${a+b}`;
    }
    return (
        <>
            <div>Funciones</div>
            <span>El resultado de sumar: {addTwoNumber(2, 8)}</span>
        </>
    );
};
