const spinChar = ['\r|   ' , '\r/   ' , '\r-   ' , '\r\\   ' , '\r|   ' , '\r/   ' , '\r-   ' , '\r\\   '];
let delay = 100;
    for (let char of spinChar) {
        setTimeout(( ) => {
        process.stdout.write(char);
        },delay);
        delay += 200;
    }
