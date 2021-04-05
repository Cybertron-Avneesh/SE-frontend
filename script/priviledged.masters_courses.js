let courses = [];

currUserObj = JSON.parse(window.localStorage.getItem("currUserObj"));
myID = currUserObj["user_id"];
myLevel = currUserObj["admin_level"]; 

function addCourse() {

    var course = {
        branch_id: document.getElementById('createBranchID').value,
        semester_id: document.getElementById('createSemID').value,
        course_id: document.getElementById('createCourseID').value,
        course_name: document.getElementById('createCourseName').value,
        credits: document.getElementById('createCourseCredit').value,
        my_id: myID??"TEMPUSER",
        my_level: myLevel??2,
        name: currUserObj["name"]
    }
    
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    }

    fetch('http://localhost:5440/masters/course?action=1', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    window.alert("Course created sucessfully.")
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    courses.push(course);
    document.forms[0].reset();
}

function updateCourse() {

    var course = {
        semester_id: document.getElementById('upSemID').value,
        course_id: document.getElementById('upCourseID').value,
        course_name: document.getElementById('upCourseName').value,
        credits: document.getElementById('upCourseCredit').value,
        my_id: myID??"TEMPUSER",
        my_level: myLevel??2,
        name: currUserObj["name"]
    }
    
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    }

    fetch('http://localhost:5440/masters/course?action=3', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    window.alert("Course updated sucessfully.")
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    courses.push(course);
    document.forms[0].reset();
}

function deleteCourse() {

    var course = {
        semester_id: document.getElementById('upSemID').value,
        course_id: document.getElementById('upCourseID').value,
        my_id: myID??"TEMPUSER",
        my_level: myLevel??2,
        name: currUserObj["name"]
    }
    
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    }

    fetch('http://localhost:5440/masters/course?action=4', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    window.alert("Course deleted sucessfully.")
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))

    courses.push(course);
    document.forms[0].reset();
}

let baseUrl = 'http://localhost:5440/masters/program';

async function getList() {

    var cred = {
        my_id: myID??"TEMPUSER",
        my_level: myLevel??2,
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }
    var response;
    await fetch('http://localhost:5440/masters/course?action=2', options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data)
                    response = data;
                    finalList = response['courses'];
                    console.log(finalList);
                    table = document.getElementById('listCourses');
                    table.innerHTML = "";
                    cnt = 0;
                    finalList.forEach(element => {
                        cnt++;
                        table.insertAdjacentHTML('beforeend', `
                        <tr>
                                    <td>
                                        ${cnt}
                                    </td>
                                    <td>
                                        ${element['semester_id']}
                                    </td>
                                    <td>
                                        ${element['branch_id']}
                                    </td>
                                    <td>
                                        ${element['course_id']}
                                    </td>
                                    <td>
                                        ${element['credits']}
                                    </td>
                                    <td>
                                        ${element['course_name']}
                                    </td>
                        </tr>
                        `);
                    });
                })
                .catch(err => console.log(`${err}`))
        })
        .catch(err => console.error(err))
}

