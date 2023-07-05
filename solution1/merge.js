    
    let first=[1,3,5,7,9,11,13];
    
    let second=[2,4,6,8,10,12,14];
    let third=[1,1,2,3,5,8,13];
    
    let fourth=[5,17,3,19,76,24,1,5,10,34,8,27,7];
    
    
   //const merged=[...first, ...second,...third, ...fourth];
   //console.log("numbers ="+"["+merged+"]");

   function combine(...arr) {
    let combinedarr = [];

    arr.forEach(arr => {
        combinedarr = [...combinedarr, ...arr]
    });

    return [...new Set([...combinedarr])];
}
console.log(combine(first,second,third,fourth));