//problem 7
//fibonacci numbers which are divisible by 3
let num=18;
let mul=0;
a=0;
b=1;
i=1;
let res=[];
while(i<=num){
    res.push(a);
    c=a+b;
    a=b;
    b=c;
    i++;
}
console.log(res);
for(i of res){
    if(i>0 && i%3==0){
        console.log(i);
    }
}
