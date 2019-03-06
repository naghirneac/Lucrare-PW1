/**
 * Created by User on 2019-03-04.
 */

'use strict'
// Lucrare PW1 - Naghirneac Ana (is21z)
//ex.1-------------------------------------
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
    getSalary(){
		return this.hourRate*this.hours; 
	}
    increaseSalary(n){
		this.hourRate = n + this.hourRate;
	}
	setTax(n){
		return ((this.getSalary()*n)/100);
	}
	getSalaryNetto(n){
		return (this.getSalary() - this.setTax(n));
	}
}

/*let worker = new Worker('Ion', 'Creangă', 10, 176); 
console.log(worker.name); //afișează 'Ion' 
console.log(worker.surname); //afișează 'Creangă' 
console.log(worker.hourRate); //afișează 10 
console.log(worker.hours); //afișează 31 
console.log(worker.getSalary()); //afișează 1760 = 10*176*/

//ex.2---------------------------------------------------
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

//ex.3---------------------------------------------

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

//ex.4 -----------------------------------------------
/*var worker = new Worker('Ion', 'Creangă', 10, 176); 
console.log(worker.getName()); // afișează Ion 
console.log(worker.getSurname()); // afișează Creangă 
console.log(worker.getRate()); // afișează 10 
console.log(worker.getHours()); // afișează 176 
console.log(worker.getSalary()); //afișează 1760 = 10*176*/

//ex.5-------------------------------------------------
/*var worker = new Worker('Ion', 'Creangă', 10, 176); 
console.log(worker.getName()); // afișează Ion 
console.log(worker.getSurname()); // afișează Creangă 
console.log(worker.getRate()); // afișează 10 
console.log(worker.getHours()); // afișează 176 
console.log(worker.getSalary()); //afișează 1760 = 10*176
worker.increaseSalary(2); //mărește hourRate cu 2
console.log(worker.getSalary()); //afișează 2112 = 12*176
 //ex.6---------------------------------------------
 worker.setTax(18); 
 //console.log(worker.setTax(18));
 //console.log(worker.getSalary() - worker.setTax());
 console.log(worker.getSalaryNetto(18)); //afișează 2112 – 18% = 1731.84*/
 //ex.7-------------------------------------------
 function masivAngajati(){
 	let ang1 = new Worker('Ion', 'Creanga', 10, 176);
 	let ang2 = new Worker('Mihai', 'Eminescu', 9, 150); 
 	let ang3 = new Worker('Lucian', 'Blaga', 11, 200); 
	let angajati = [ang1, ang2, ang3];
	for(let i = 0; i < angajati.length; i++){
		console.log('Prenume:', angajati[i].getName());
		console.log('Nume:', angajati[i].getSurname());
		console.log('Bani/ora:', angajati[i].getRate());
		console.log('Ore lucrate:', angajati[i].getHours());
		angajati[i].increaseSalary(2);
		console.log('Salariu brut:', angajati[i].getSalary());
		angajati[i].setTax(18);
		console.log('Salariu net:', angajati[i].getSalaryNetto(18));
		console.log('----------------------');
 	}
 }
masivAngajati();
