


const allstudents= ['Иванов', 'Петров', 'Смирнов', 'Кузнецов', 'Попов', 'Соколов', 'Сидоров'];

const failedstudents= ['Сидоров', 'Смирнов','Попов'];

const filter=(arg1,arg2)=>{  

  return arg1.filter(e => !arg2.includes (e) ) 
  
}


console.log(filter(allstudents,failedstudents)); 