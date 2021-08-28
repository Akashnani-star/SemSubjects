myjson = '{"Sem 2" : ["CHEMISTRY"],"Sem 3" : ["ELECTRONICS DEVICES & CIRCUITS","ENGINEERING MECHANICS & STRENGTH OF MATERIALS"],"Sem 4" : ["Electrical Machines-1","Analog Electronics Circuits","Primemovers & Pumps","Electrical Power Generation,Transmission & Distribution"],"Sem 5" : ["Electrical Machines-II","Linear Integrated & Pulse Circuits","Control Systems","Digital Signal Processing"],"Sem 6" : [ "Principles of Economics & Management","Power System Protection","Microprocessor & Microcontroller"],"Sem 7" : ["Non-Conventional Energy Sources"]}'
myJsonObj = JSON.parse(myjson);

mySubjectsTable = document.getElementById("subjects");

for(const sem in myJsonObj){
	tr = document.createElement("tr");
	th = document.createElement("th");
	th.innerText = sem;
	th.classList.add("td");
	tr.appendChild(th);
	const len = myJsonObj[sem].length;
	myJsonObj[sem].forEach((cur,index,arr)=>{
		td = document.createElement("td");
		td.classList.add("td");
		td.innerText = cur;
		tr.appendChild(td);
	});
	for(let i=len;i<4;i++){
		td = document.createElement("td");
		td.classList.add("td");
		td.innerText = " ---- ";
		tr.appendChild(td);
	}
	mySubjectsTable.appendChild(tr);
}