document.querySelector('#assessment').addEventListener('click',addAssessment)
myID = currUserObj["user_id"];
myLevel = currUserObj["admin_level"]; 

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