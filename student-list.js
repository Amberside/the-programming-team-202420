class StudentList{
	constructor(rootId, students){
		this.rootId = rootId;
		this.studentList = students;
		this.refresh();
	}
    
	// generate one row
	studentItemString(fullName, initial, color, img, clip, path){
	//console.log(img);
	return `
		<div class="col-xl-3 col-md-4 col-6">
			<a href="team/${path}/index.html">
			<div class="flip-card">
				<div class="flip-card-inner ${color} ${clip}">
					<div class="flip-card-front">
						<div class="clip">
							<div class="content">
								<h1>${initial}</h1> 
								<p>${fullName}</p> 
							</div>
						</div>
					</div>
					<div class="flip-card-back">
						<img src="./images/${img}" alt="${fullName}" class="w-100">
					</div>
				</div>
			</div>
			</a>
		</div>
		`;
	}

	// generate all rows 
	studentListString(students){
		let html = ``;
		for(let i = 0; i < students.length; i++) {
			let student = students[i];
			//console.log(student);
			html += this.studentItemString(student.fullName, student.initial, student.color, student.image, student.clip, student.path);
		}
		return html;
    }

	// refresh the whole list in HTML
	refresh(){
		let elementString = this.studentListString(this.studentList);
		let rootElement = document.getElementById(this.rootId);
        rootElement.innerHTML = elementString;
	}
}
    