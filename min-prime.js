let number="1723594";
let flag=1;
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
                minprime=num;
                flag++;
            }
            else{
                   if(num<minprime){
                    minprime=num;
                   }
                   
                   
            }
        }
    }
}
console.log("Minprime number is:",minprime);

