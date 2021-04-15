document.querySelector('#assessment').addEventListener('click',addAssessment)
document.querySelector('#award').addEventListener('click',award)
document.querySelector('#alumni').addEventListener('click',archive)


var myID = currUserObj["user_id"];
var myLevel = currUserObj["admin_level"]; 

async function addAssessment(){
    let enrollment_id = document.querySelector('#EnrollID').value;
    let semester_number = document.querySelector('#SemesterID').value;
    let course_id = document.querySelector('#CourseID').value;
    let c1 = document.querySelector('#marksc1').value;
    let c2 = document.querySelector('#marksc2').value;
    let c3 = document.querySelector('#marksc3').value;

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            my_id:myID,
            my_level:myLevel,
            enrollment_id:enrollment_id,
            semester_number:semester_number,
            course_id:course_id,
            c1:c1,
            c2:c2,
            c3:c3
        })
    }

    fetch('http://localhost:5440/student/assessment',options)
    .then((res)=>{
        console.log("successfully");
    })
    .catch((err)=>{
        console.log(`${err}`);
    })

}

function getMedal(medal){
    if(medal==1) return 'gold';
    else if(medal==2) return 'silver';
    else if(medal==3) return 'bronze';
    else return 'no medal';
}

async function award(){
    document.querySelector('#listAwards').innerHTML='';
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            my_id:myID,
            my_level:myLevel
        })
    }

    fetch('http://localhost:5440/student/create/?action=6',options)
    .then((res)=>{
        res.json()
        .then((data)=>{
            let i=1;
            data.alumni.forEach(curr => {
                let html = `<tr><td>${i}</td><td>${curr.enrollment_id}</td><td>${curr.name}</td><td>${curr.cgpi}</td><td>${getMedal(curr.medal)}</td></tr>`
                document.querySelector('#listAwards').insertAdjacentHTML('beforeend',html);
            });
        })
    })
}

async function archive(){
    document.querySelector('#listAlumni').innerHTML='';
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            my_id:myID,
            my_level:myLevel
        })
    }

    fetch('http://localhost:5440/student/create/?action=5',options)
    .then((res)=>{
        res.json()
        .then((data)=>{
            let i=1;
            data.alumni.forEach(curr => {
                let html = `<tr><td>${i}</td><td>${curr.enrollment_id}</td><td>${curr.name}</td><td>${curr.program_id}</td></tr>`
                document.querySelector('#listAlumni').insertAdjacentHTML('beforeend',html);
            });
        })
    })
}


