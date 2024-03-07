interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
    isAlive?:boolean;
}

interface Address {
    country: string;
    houseNo: number;
}
export const ObjectLiterals = () => {
    const person: Person = {
        age: 37,
        firstName: 'Diego',
        lastName: 'Gomez',
        address: {
            country: 'Canada',
            houseNo: 340
        }
    };
    return (
        <>
            <div>ObjecktLiterals</div>
            <pre>{JSON.stringify(person, null, 2)}</pre>
        </>
    );
};
