/**
 * Created by User on 2019-03-04.
 */

'use strict'
//ex.1
class Worker{
    constructor(name, surname, hourRate, hours){
    	this.name = name;
    	this.surname = surname;
    	this.hourRate = hourRate;
    	this.hours = hours;
    }

    getSalary(hours, hourRate){
    	return (this.hourRate*this.hours);
    }
    
    
}

let worker = new Worker('Ion', 'Creangă', 10, 176); 
console.log(worker.name); //afișează 'Ion' 
console.log(worker.surname); //afișează 'Creangă' 
console.log(worker.hourRate); //afișează 10 
console.log(worker.hours); //afișează 31 
console.log(worker.getSalary()); //afișează 1760 = 10*176

//ex.2
let primulWorker = new Worker('Mihai', 'Eminescu', 9, 150); 
console.log(primulWorker.name);  
console.log(primulWorker.surname);  
console.log(primulWorker.hourRate); 
console.log(primulWorker.hours); 
console.log(primulWorker.getSalary());

let alDoileaWorker = new Worker('Lucian', 'Blaga', 11, 200); 
console.log(alDoileaWorker.name); 
console.log(alDoileaWorker.surname); 
console.log(alDoileaWorker.hourRate);  
console.log(alDoileaWorker.hours); 
console.log(alDoileaWorker.getSalary());

let max = worker.getSalary();
function salariuMaiMare(){
	if (primulWorker.getSalary() > max) {
		
		console.log(primulWorker.getSalary(), );
	}
}
