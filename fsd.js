console.log("first");

function aa(){
    console.log("second");
}
setTimeout(aa,5000);
console.log("Third");

function rollnumber(num,time,nextroll){
    setTimeout(
        () => {
            console.log("Roll.no.is",num);
            if (nextroll) nextroll();
        },time)
    
}
rollnumber(12344,1000, () => {
    rollnumber(12344,1000, () => {
        rollnumber(12344,1000, () =>{
        });
    });
    
});
