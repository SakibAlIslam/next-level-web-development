// Nullable type
const searchName = (value: string | null) => {
    if (value === null) {
        console.log('There is nothing to search');
    } else {
        console.log('Searching...');
    }
}

searchName(null);

//Unknown type
const getCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        console.log(`Car speed is ${speed} km/h`);
    } else {
        console.log(`Car speed is speed ${speed}`);
    }
}

getCarSpeed(100);
getCarSpeed('100Km/h');

// Never type
function throwError(message: string): never {
    throw new Error(message);
}

throwError('Error is occuring');