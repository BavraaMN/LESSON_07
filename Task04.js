
const allnewСashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];


const getAverageAllValue=(arg1)=>{ 

   let totalproduct=0;
   let totalcost=0;

   for (let i = 0; i < arg1.length; i++) {
    
    let cost = arg1[i][1] / arg1[i][0] ;
    totalcost =  totalcost + cost; 
    
    }   
 
  return totalcost / arg1.length;
}

console.log(getAverageAllValue(allnewСashbox));