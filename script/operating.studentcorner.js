let baseUrl = 'http://localhost:5440/student/create/IIB2019001?action=2';
let student = {}

async function searchStudent() {
    // let response = await fetch(baseUrl);
    // let data = await response.json();
    // console.log(data);
    var enrollNo = document.getElementById('inputEnroll').value;
    var cred = {
        my_id: "iib2019050",
        my_level: 2
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }
    var response;
    await fetch(`http://localhost:5440/student/create/${enrollNo}?action=2`, options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data);
                    response = data['student'][0];
                    student = response;
                    card = document.getElementById('detailCard');
                    if (response.length === 0) {
                        card.innerHTML = "<h2>No record found.</h2>";
                    } else {
                        card.innerHTML = `
                        <div class="card-header">
                            <h3 class="card-title" id="currEnrollID">
                            <i class="fa fa-user-circle"></i>
                            ${response['enrollment_id']}
                            </h3>
                        </div>
                        <div class="card-body">
                            <p><strong>Name : </strong>${response['name']}</p>
                            <p><strong>DOB : </strong>${response['dob']}</p>
                            <p><strong>Program : </strong>${response['program_id']}</p>
                            <p><strong>Branch : </strong>${response['branch_id']}</p>
                            <p><strong>Semester : </strong>${response['current_semester_number']}</p>
                            <p><strong>Section : </strong>${response['section']}</p>
                            <p><strong>Credits Comp. : </strong>${response['credits_completed']}</p>
                            <p><strong>CGPI : </strong>${response['cgpi']}</p>
                            <p><strong>Mob No. : </strong>${response['phone_number']}</p>
                            <p><strong>Email : </strong>${response['email_id']}</p>
                            <p><strong>Address : </strong>${response['address']}</p>
                        </div>
                        `;
                    }
                })
                .catch(err => {
                    console.log(`${err}`);
                    card = document.getElementById('detailCard');
                    card.innerHTML = "<h2>Something went fuzzy.</h2>";
                })
        })
        .catch(err => console.error(err))
        console.log("Avneesh ", currStudentDetail);
}

async function markAsVerfied(){
    var enrollNo = document.getElementById('currEnrollID').value;
    var cred = {
        my_id: "iib2019050",
        my_level: 2
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }
    var response;
    await fetch(`http://localhost:5440/student/create/${enrollNo}?action=2`, options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data);
                    response = data['student'][0];
                    student = response;
                    card = document.getElementById('detailCard');
                    if (response.length === 0) {
                        card.innerHTML = "<h2>No record found.</h2>";
                    } else {
                        card.innerHTML = `
                        <div class="card-header">
                            <h3 class="card-title" id="currEnrollID">
                            <i class="fa fa-user-circle"></i>
                            ${response['enrollment_id']}
                            </h3>
                        </div>
                        <div class="card-body">
                            <p><strong>Name : </strong>${response['name']}</p>
                            <p><strong>DOB : </strong>${response['dob']}</p>
                            <p><strong>Program : </strong>${response['program_id']}</p>
                            <p><strong>Branch : </strong>${response['branch_id']}</p>
                            <p><strong>Semester : </strong>${response['current_semester_number']}</p>
                            <p><strong>Section : </strong>${response['section']}</p>
                            <p><strong>Credits Comp. : </strong>${response['credits_completed']}</p>
                            <p><strong>CGPI : </strong>${response['cgpi']}</p>
                            <p><strong>Mob No. : </strong>${response['phone_number']}</p>
                            <p><strong>Email : </strong>${response['email_id']}</p>
                            <p><strong>Address : </strong>${response['address']}</p>
                        </div>
                        `;
                    }
                })
                .catch(err => {
                    console.log(`${err}`);
                    card = document.getElementById('detailCard');
                    card.innerHTML = "<h2>Something went fuzzy.</h2>";
                })
        })
        .catch(err => console.error(err))
        console.log("Avneesh ", currStudentDetail);
}

async function takeDisciplinaryAction(){
    var enrollNo = document.getElementById('currEnrollID').value;
    var cred = {
        my_id: "iib2019050",
        my_level: 2
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    }
    var response;
    await fetch(`http://localhost:5440/student/create/${enrollNo}?action=2`, options)
        .then(res => {
            res.json()
                .then(data => {
                    console.log(data);
                    response = data['student'][0];
                    // student = response;
                })
                .catch(err => {
                    console.log(`${err}`);
                    card = document.getElementById('detailCard');
                    card.innerHTML = "<h2>Something went fuzzy.</h2>";
                })
        })
        .catch(err => console.error(err))
        console.log("Avneesh ", currStudentDetail);   
}