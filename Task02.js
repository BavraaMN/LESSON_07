
const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];


const getAverageValue=(arg1)=>{  

    const sum = arg1.reduce(function(a, b){
        return a + b;
    }, 0);
    return sum / arg1.length; // return arg1.filter(e=>!arg2.includes(e)) 
}

console.log(Math.floor(getAverageValue(allСashbox)));





