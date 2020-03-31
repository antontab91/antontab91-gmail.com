export function psevdo() {
    console.log(typeof arguments);
    console.log(arguments);
    console.log([...arguments]);
}

psevdo(45, 'asddas', function () { }, null)