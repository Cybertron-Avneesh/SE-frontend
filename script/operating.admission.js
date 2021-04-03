
async function addFreshStudent() {
    var enrollNo = document.getElementById('fEnrollID').value;
    var email = document.getElementById('fEmailID').value;
    var fullName = document.getElementById('fFullName').value;
    var dob = document.getElementById('fDOB').value;
    var age = document.getElementById('fAge').value;
    var phoneNo = document.getElementById('fPhoneNo').value;
    var address = document.getElementById('fAddress').value;
    var programID = document.getElementById('fProgramID').value;
    var branchID = document.getElementById('fBranchID').value;
    var section = document.getElementById('fSection').value;
    var currSem = 1;
    var cgpi = 0.0;
    var creditComp = 0;
    var isVerified = 0;

    var student = {
        enrollment_id: enrollNo,
        email_id: email,
        name: fullName,
        dob: dob,
        age: age,
        photo: null,
        phone_num: phoneNo,
        address: address,
        program_id: programID,
        branch_id: branchID,
        section: section,
        current_semester_number: currSem,
        cgpi: cgpi,
        credits_completed: creditComp,
        is_verified: isVerified,
        grade_card: null,
        medal: null,
        my_id: "IIB2019050",
        my_level: 2
    }

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    }
    await fetch(`http://localhost:5440/student/create/${student['enrollment_id']}?action=1`, options)
        .then(res => {
            if (res.status === 200) {
                window.alert(`Student ${student['enrollment_id']} admitted sucessfully!`);

            }
            else {
                window.alert('Some error occured while creating a new student. Please try again.');
                console.log(res);
            }
        })
        .catch(err => console.error(err))
}



async function addLateralStudent() {
    var enrollNo =  document.getElementById('lEnrollID').value;
    var email =     document.getElementById('lEmailID').value;
    var fullName =  document.getElementById('lFullName').value;
    var dob =       document.getElementById('lDOB').value;
    var age =       document.getElementById('lAge').value;
    var phoneNo =   document.getElementById('lPhoneNo').value;
    var address =   document.getElementById('lAddress').value;
    var programID = document.getElementById('lProgramID').value;
    var branchID =  document.getElementById('lBranchID').value;
    var section =   document.getElementById('lSection').value;
    var currSem =   document.getElementById('lCurrSem').value;
    var cgpi =      document.getElementById('lCGPI').value;
    var creditComp = document.getElementById('lCreditComp').value;
    var isVerified = 0;

    var student = {
        enrollment_id: enrollNo,
        email_id: email,
        name: fullName,
        dob: dob,
        age: age,
        photo: null,
        phone_num: phoneNo,
        address: address,
        program_id: programID,
        branch_id: branchID,
        section: section,
        current_semester_number: currSem,
        cgpi: cgpi,
        credits_completed: creditComp,
        is_verified: isVerified,
        grade_card: null,
        medal: null,
        my_id: "IIB2019050",
        my_level: 2
    }

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    }
    await fetch(`http://localhost:5440/student/create/${student['enrollment_id']}?action=1`, options)
        .then(res => {
            if (res.status === 200) {
                window.alert(`Student ${student['enrollment_id']} admitted sucessfully!`);
            }
            else {
                console.log(res);
            }
        })
        .catch(err => console.error(err))
}