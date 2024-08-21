let num=prompt("enter a number:");
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
console.log("max value is:",max);
console.log("min value is:",min);