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

   
    getName(name){
    	return this.name;
    }
    getSurname(surname){
    	return this.surname;
    }
    getRate(hourRate){
    	return this.hourRate;
    }
    getHours(hours){
    	return this.hours;
    }
    increaseSalary(a){
    	return (a*this.hourRate);
    }
     getSalary(hours, hourRate){
    	return (increaseSalary()*this.hours);
    }
}

/*let worker = new Worker('Ion', 'Creangă', 10, 176); 
console.log(worker.name); //afișează 'Ion' 
console.log(worker.surname); //afișează 'Creangă' 
console.log(worker.hourRate); //afișează 10 
console.log(worker.hours); //afișează 31 
console.log(worker.getSalary()); //afișează 1760 = 10*176*/

//ex.2
/*let primulWorker = new Worker('Mihai', 'Eminescu', 9, 150); 
/*console.log(primulWorker.name);  
console.log(primulWorker.surname);  
console.log(primulWorker.hourRate); 
console.log(primulWorker.hours); 
console.log(primulWorker.getSalary());*/

/*let alDoileaWorker = new Worker('Lucian', 'Blaga', 11, 200); 
/*console.log(alDoileaWorker.name); 
console.log(alDoileaWorker.surname); 
console.log(alDoileaWorker.hourRate);  
console.log(alDoileaWorker.hours); 
console.log(alDoileaWorker.getSalary());*/

//ex.3

/*let max = new Worker;

/*function salariuMaiMare(){
	if (primulWorker.getSalary() > worker.getSalary()) {
		max = primulWorker;
	}
	else {
		max = worker;
	}
	if (alDoileaWorker.getSalary() > max.getSalary()){
		max = alDoileaWorker;
	}
	console.log(max.name); 
	console.log(max.surname); 
	console.log(max.hourRate);  
	console.log(max.hours); 
	console.log(max.getSalary());

	if (max != worker){
		console.log(worker.name); 
		console.log(worker.surname); 
		console.log(worker.hourRate);  
		console.log(worker.hours); 
		console.log(worker.getSalary());
		console.log('Salariul lui ', max.name, ' e mai mare cu ', max.getSalary() - worker.getSalary());
	}
	if (max != primulWorker){
		console.log(primulWorker.name); 
		console.log(primulWorker.surname); 
		console.log(primulWorker.hourRate);  
		console.log(primulWorker.hours); 
		console.log(primulWorker.getSalary());
		console.log('Salariul lui ', max.name, ' e mai mare cu ', max.getSalary() - primulWorker.getSalary());
	}
	if (max != alDoileaWorker){
		console.log(alDoileaWorker.name); 
		console.log(alDoileaWorker.surname); 
		console.log(alDoileaWorker.hourRate);  
		console.log(alDoileaWorker.hours); 
		console.log(alDoileaWorker.getSalary());
		console.log('Salariul lui ', max.name, ' e mai mare cu ', max.getSalary() - alDoileaWorker.getSalary());
	}

}
salariuMaiMare();*/

//ex.4 
var worker = new Worker('Ion', 'Creangă', 10, 176); 
console.log(worker.getName()); // afișează Ion 
console.log(worker.getSurname()); // afișează Creangă 
console.log(worker.getRate()); // afișează 10 
console.log(worker.getHours()); // afișează 176
console.log(worker.getSalary()); //afișează 1760 = 10*176
worker.increaseSalary(2); //mărește hourRate cu 2
console.log(worker.getSalary()); //afișează 2112 = 12*176
