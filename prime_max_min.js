let number="865271";
let flag=1;
let maxprime=0;
let minprime=0;

for(num of number){
    if(num>1){
        let c=0;
        for(i=2;i<num;i++){
            if(num%i==0){
                c++;
                

                break;
            }
        }
        if(c==0){
            if(flag==1){
                maxprime=num;
                minprime=num;
                flag++;
            }
            else{
                   if(num>maxprime){
                    maxprime=num;
                   }
                   if(num<minprime){
                    minprime=num;
                   }
                   
            }
        }
    }
}
console.log("Maxprime number is:",maxprime)
console.log("Minprime number is:",minprime);