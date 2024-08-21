let input="78592";
let final=0;
let largest=input[0];
for(i=1;i<input.length;i++){
    if(input[i]>largest){
        largest=input[i];
    }
}
console.log(largest);
let a=0;
let b=1;
let j=1;
let res=""
while(a<=largest){
    res=res+a+" "
    c=a+b;
    a=b;
    b=c;
    j++;
}
console.log(res);
for(k of res){
    if(input.includes(k)){
        final=final+Number(k);
    }
}
console.log(final);