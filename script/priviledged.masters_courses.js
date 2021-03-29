let courses = [];

function addCourse() {

    var course = {
        branch_ID: document.getElementById('createBranchID'),
        sem_ID: document.getElementById('createSemID'),
        course_ID: document.getElementById('createCourseID'),
        course_name: document.getElementById('createCourseName'),
        course_credit: document.getElementById('createCourseCredit')
    }

    courses.push(course);
    document.forms[0].reset();
}

function updateCourse() {

    var course = {
        branch_ID: document.getElementById('upBranchID'),
        sem_ID: document.getElementById('upSemID'),
        course_ID: document.getElementById('upCourseID'),
        course_name: document.getElementById('upCourseName'),
        course_credit: document.getElementById('upCourseCredit')
    }

    courses.push(course);
    document.forms[0].reset();
}

function deleteCourse() {

    var course = {
        branch_ID: document.getElementById('delBranchID'),
        sem_ID: document.getElementById('delSemID'),
        course_ID: document.getElementById('delCourseID')
    }

    courses.push(course);
    document.forms[0].reset();
}

let baseUrl = 'http://localhost:5440/masters/program';

async function getList() {
    let response = await fetch(baseUrl);
    let data = await response.json();
    console.log(data);
    finalList = data['courses'];
    console.log(finalList);
    //     data['users'].array.forEach(element => {

    //     });
    table = document.getElementById('listCourses');
    cnt = 0;
    finalList.forEach(element => {
        cnt++;
        // roleTag = getRoleTag(element["admin_level"]);
        table.insertAdjacentHTML('beforeend', `
        <tr>
                                    <td>
                                        ${cnt}
                                    </td>
                                    <td>
                                        ${element['sem_ID']}
                                    </td>
                                    <td>
                                        ${element['branch_ID']}
                                    </td>
                                    <td>
                                        ${element['course_ID']}
                                    </td>
                                    <td>
                                        ${element['course_credit']}
                                    </td>
                                    <td>
                                        ${element['course_name']}
                                    </td>
        </tr>
                                
        `);
    });
}

