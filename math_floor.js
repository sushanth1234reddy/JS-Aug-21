//program 3
//catogerize numbers of array based on their unit position
let arr=[99,87,66,54,90,15];
let evenvalues=[];
let oddvalues=[];
for(i of arr){
    if(Math.floor(i/10)%2==0){
        evenvalues.push(i);
    }
    else{
        oddvalues.push(i);
    }
}
console.log(evenvalues);
console.log(oddvalues);