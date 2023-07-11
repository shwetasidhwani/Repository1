/*Simple # triangle.*/
const prompt=require("prompt-sync")({sigint:true})
var n = Number(prompt("Enter a number: "));
for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        console.log("# ");
    }
    console.log("\n");
}