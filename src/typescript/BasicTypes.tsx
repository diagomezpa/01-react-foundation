export const BasicTypes = () => {
    const name: string = 'Alejandro';
    const age: number = 31;
    const isActive: boolean = true;
    const powers: string[] = ['React', 'ReactNative', 'Vue', 'Qwik'];
    return (
        <>
            <div>BasicTypes</div>
            {name} {age} {isActive ? 'true' : 'false'}
            <br />
        </>
    );
};
