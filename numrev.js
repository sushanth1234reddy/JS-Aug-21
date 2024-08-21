//problem 8
//reverse the number and check palindrome or not
let num=2002;
let org=num;
res=0;
while(num>0){
    rem=num%10;
    res=(res*10)+rem;
    num=Math.floor(num/10);
}
console.log(res);
if(org==res){
    console.log(`${org} is a palindrome number`);
}
else{
    console.log(`${org} not a palindrome number`);
}