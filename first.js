const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function alphaMatrix(n){
    for(let i=0;i<n;i++){
    let str="";
    for(let j=1;j<=n;j++){
        str = str + alphabet[((j*n)-i-1)%26] + " ";
    }
    console.log(str);
}
}

alphaMatrix(6);
