//problem 9
//non-fibonacci series which are divisible by 2
let num=10;
let a=0;
let b=1;
nonfib=0
while(nonfib<num){
let i=a+1;
while(i<b){
    if(i%2==0){
        console.log(i);
    }
    nonfib++;
    if(nonfib==num){
        break;
    }
    i++;
}
c=a+b;
a=b;
b=c;
}