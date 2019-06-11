// Simple FizzBuzz program 1-100
for(let i = 1; i <= 100; ++i){
    let line = "";
    if( i % 3 == 0){
	line += "Fizz";
    }
    if(i % 5 == 0){
        line += "Buzz";
    }
    if(line.length == 0){
        line = i;
    }
    console.log(line);
}
