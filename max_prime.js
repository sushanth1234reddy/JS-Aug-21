let number="865271";
let flag=1;
let maxprime=0;


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
                flag++;
            }
            else{
                   if(num>maxprime){
                    maxprime=num;
                   }
                   
                   
            }
        }
    }
}
console.log("Maxprime number is:",maxprime);

