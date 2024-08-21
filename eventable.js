//problem 4
//print tables for all odd numbers in an array
let arr=[1,2,3,4,5,6,7,8,9,10];
for(i of arr){
    if(!((Math.floor(i/2))*2==i)){
        for(j=1;j<=10;j++){
            console.log(`${i}*${j}=${i*j}`);
        }
        console.log(" ")
    }
}