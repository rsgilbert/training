const noOfRows = 4;

for (let i = 1; i <= noOfRows; i++)
{
    let pattern = '';
    for (let j = 1; j <= i; j++)
    {
        pattern += '*';
    }
    console.log(pattern);
}

for (let i = noOfRows - 1; i >= 1; i--) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*';
    }
    console.log(pattern);
}
