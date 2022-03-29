
const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];



const addPrefix = (arg) => { 

  const result = []
       arg.forEach( (word) => {
        result.push('Mr ' + word) //// return  arg1;//.forEach(item => { item = 'str' +' '+ item });
})

   return result;
}

console.log(addPrefix(names));  