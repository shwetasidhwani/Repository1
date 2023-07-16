function countBs(TERM,char){
    let str=String(TERM);
    let len=str.length;
    let n=0;
    for(let i=0;i<len;i++){
        let ch=str[i];
        if(ch==char)
        n++;
    }
    return n;
}
console.log(countBs("Bumblebees","e"));
