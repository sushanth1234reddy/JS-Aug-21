//problem 6
//find Max and Min value in an array and sum of them
function summ(...num){
    console.log(num);

let max=num[0];
let min=num[0];
for(i=1;i<num.length;i++){
    if(num[i]>max){
        max=num[i];
        
    }
    if(num[i]<min){
        min=num[i];
        
    }
}
console.log("min value is:",min);
console.log("max value is:",max);
let sum=Number(max)+Number(min);
console.log("sum of min max values is:",sum);
}
summ(23,65,78,34,11,99,100,364)