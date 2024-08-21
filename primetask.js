//problem 5
//print prime numbers in range of 0 to 30  and find sum of them
let pelements=[];
let primesum=0;
for(prime=0;prime<=30;prime++){
    if(prime>1){
        let c=0;
        for(i=2;i<prime;i++){
            if(prime%i==0){
                c++;
                break;

            }
        }
        if(c==0){
            pelements.push(prime);
            primesum=primesum+prime;

            

        }

    }
}
console.log(pelements);
console.log(primesum);