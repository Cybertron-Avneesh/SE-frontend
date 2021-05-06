const html = {
    add_notification : `
    <div class="panel-header panel-header-sm">
    </div>
    <div class="content">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <h2 class="card-title">Create a Notification</h2>
                    </div>
                    <div class="card-body text-center">
                        <div class="form-control" style="padding:20px;">
                            <form>
                                <p class="badge badge-primary">Target is UserID to notify a user else leave blank to
                                    broadcast.</p>
                                <div class="text-left"><label for="inputUsername"> <b>Target</b></label></div>
                                <input type="name" class="form-control" id="inputTarget" placeholder="Enter target"
                                    required>
                                <br>
                                <div class="text-left"><label for="inputNotifMsg"> <b>Message</b></label></div>
                                <div>
                                    <textarea id="inputNotifMsg" class="form-control" rows="3" style="margin:10px;"
                                        placeholder="Enter message to notify..."></textarea>
                                </div>
                            </form>
                            <button onclick="addNotification()" type="submit" class="btn btn-primary">Create Notification</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    </div>
    `,
    admission : `
    <div class="panel-header panel-header-sm">
    </div>
    <div class="content">
        <div class="row">
            <div class="col">
                <center>
                    <div class="card" >
                        <div class=" card-header">
                            <h3>Admission
                            </h3>
                        </div>
                        <div class="card-body"
                            style="padding-left: 20px; padding-right: 20px; padding-top: 0px; padding-bottom: 0px;">
                            <button class="btn btn-round tablink" onclick="openPage('Fresh', this, 'orange')" id="defaultOpen">
                                <i class=" fa fa-plus"></i>
                                Fresh
                            </button>
                            <button class="btn btn-round tablink" onclick="openPage('Lateral', this, 'green');">
                                <i class="fa fa-edit"></i>
                                Lateral
                            </button>
                            <hr>

                            <div id="Fresh" class="tabcontent">
                                <div class="card">
                                  <div class="card-header">
                                    <h5 class="title">Fresh Admission</h5>
                                  </div>
                                  <div class="card-body">
                                    <form>
                                    <div class="row">
                                        <div class="col">
                                          <div class="form-group">
                                            <label>Enrollment ID</label>
                                            <input id="fEnrollID" type="text" class="form-control" placeholder="Enrollment" value="">
                                          </div>
                                      </div>
                                    </div>
                                      <div class="row">
                                        <div class="col-md-6 pr-1">
                                          <div class="form-group">
                                            <label>Email ID</label>
                                            <input id="fEmailID" type="email" class="form-control" placeholder="abc@xyz.com" value="">
                                          </div>
                                        </div>
                                        <div class="col-md-6 pl-1">
                                          <div class="form-group">
                                            <label>Full Name</label>
                                            <input id="fFullName" type="text" class="form-control" placeholder="John Doe" value="">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col-md-4 pr-1">
                                          <div class="form-group">
                                            <label>Date of Birth</label>
                                            <input id="fDOB" type="date" class="form-control" placeholder="DOB" value="">
                                          </div>
                                        </div>
                                        <div class="col-md-4 px-1">
                                          <div class="form-group">
                                            <label>Age</label>
                                            <input id="fAge" type="number" class="form-control" placeholder="Age" value="">
                                          </div>
                                        </div>
                                        <div class="col-md-4 pr-1">
                                          <div class="form-group">
                                            <label>Phone Number</label>
                                            <input id="fPhoneNo" type="number" class="form-control" placeholder="+91 12..." value="">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                          <div class="col">
                                            <div class="form-group">
                                              <label>Address</label>
                                              <input id="fAddress" type="text" class="form-control" placeholder="Full Address" value="">
                                            </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col-md-4 pr-1">
                                          <div class="form-group">
                                            <label>Program ID</label>
                                            <input id="fProgramID" type="text" class="form-control" placeholder="program id" value="">
                                          </div>
                                        </div>
                                        <div class="col-md-4 px-1">
                                          <div class="form-group">
                                            <label>Branch ID</label>
                                            <input id="fBranchID" type="text" class="form-control" placeholder="branch id">
                                          </div>
                                        </div>
                                        <div class="col-md-4 pl-1">
                                          <div class="form-group">
                                            <label>Section</label>
                                            <input id="fSection" type="text" class="form-control" placeholder="section">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col-md-4 pr-1">
                                          <div class="form-group">
                                            <label>Current Semester</label>
                                            <input type="number" class="form-control" placeholder="Current Sem" value="1" disabled>
                                          </div>
                                        </div>
                                        <div class="col-md-4 px-1">
                                          <div class="form-group">
                                            <label>CGPI</label>
                                            <input type="text" class="form-control" placeholder="cgpi" value="0.0" disabled>
                                          </div>
                                        </div>
                                        <div class="col-md-4 pl-1">
                                          <div class="form-group">
                                            <label>Credits Completed</label>
                                            <input type="number" class="form-control" placeholder="section" value="0" disabled>
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                    <button onClick="addFreshStudent()" type="submit" class="btn btn-primary">Submit</button>
                                  </div>
                                </div>
                            </div>

                            <div id="Lateral" class="tabcontent">
                                <div class="card">
                                  <div class="card-header">
                                    <h5 class="title">Lateral Admission</h5>
                                  </div>
                                  <div class="card-body">
                                    <form>
                                    <div class="row">
                                        <div class="col-md-8 pr-1">
                                          <div class="form-group">
                                            <label>Enrollment ID</label>
                                            <input id="lEnrollID" type="text" class="form-control" placeholder="Enrollment" value="">
                                          </div>
                                      </div>
                                      <div class="col-md-4 pl-1">
                                          <div class="form-group">
                                            <label>Current Semester</label>
                                            <input id="lCurrSem" type="number" class="form-control" placeholder="Semester" value="0">
                                          </div>
                                      </div>
                                    </div>
                                      <div class="row">
                                        <div class="col-md-6 pr-1">
                                          <div class="form-group">
                                            <label>Email ID</label>
                                            <input id="lEmailID" type="email" class="form-control" placeholder="abc@email.com" value="">
                                          </div>
                                        </div>
                                        <div class="col-md-6 pl-1">
                                          <div class="form-group">
                                            <label>Full Name</label>
                                            <input id="lFullName" type="text" class="form-control" placeholder="Full Name" value="">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col-md-4 pr-1">
                                          <div class="form-group">
                                            <label>Date of Birth</label>
                                            <input id="lDOB" type="date" class="form-control" placeholder="DOB" value="">
                                          </div>
                                        </div>
                                        <div class="col-md-4 px-1">
                                          <div class="form-group">
                                            <label>Age</label>
                                            <input id="lAge" type="number" class="form-control" placeholder="Age" value="">
                                          </div>
                                        </div>
                                        <div class="col-md-4 pr-1">
                                          <div class="form-group">
                                            <label>Phone Number</label>
                                            <input id="lPhoneNo" type="number" class="form-control" placeholder="987..." value="">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                          <div class="col">
                                            <div class="form-group">
                                              <label>Address</label>
                                              <input id="lAddress" type="text" class="form-control" placeholder="Full Address" value="">
                                            </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col-md-4 pr-1">
                                          <div class="form-group">
                                            <label>Program ID</label>
                                            <input id="lProgramID" type="text" class="form-control" placeholder="program id" value="">
                                          </div>
                                        </div>
                                        <div class="col-md-4 px-1">
                                          <div class="form-group">
                                            <label>Branch ID</label>
                                            <input id="lBranchID" type="text" class="form-control" placeholder="branch id">
                                          </div>
                                        </div>
                                        <div class="col-md-4 pl-1">
                                          <div class="form-group">
                                            <label>Section</label>
                                            <input id="lSection" type="text" class="form-control" placeholder="section">
                                          </div>
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="col-md-6 px-1">
                                          <div class="form-group">
                                            <label>CGPI</label>
                                            <input id="lCGPI" type="text" class="form-control" placeholder="cgpi" value="0.0">
                                          </div>
                                        </div>
                                        <div class="col-md-6 pl-1">
                                          <div class="form-group">
                                            <label>Credits Completed</label>
                                            <input id="lCreditComp" type="number" class="form-control" placeholder="section" value="0">
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                    <button onClick="addLateralStudent()" type="submit" class="btn btn-primary">Submit</button>
                                  </div>
                                </div>
                            </div>



                        </div>
                    </div>

                </center>
            </div>
        </div>
    `,
    extension : `
    <div class="panel-header panel-header-sm">
    </div>
    <div class="content">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title"> Extension of Dates</h4>
                    </div>
                    <div class="card-body">
                        <form >
                            <div class="row">
                                <div class="col-md-6 pr-1">
                                    <div class="form-group">
                                        <label>Activity Name</label>
                                        <input id="acName" type="text" class="form-control" placeholder="Effe" value="">
                                    </div>
                                </div>
                                <div class="col-md-6 pl-1">
                                    <div class="form-group">
                                        <label>Activity Date</label>
                                        <input id="acDate" type="date" class="form-control" placeholder="" value="">
                                    </div>
                                </div>
                            </div>
                        </form>
                        <button onclick="extendDate()" class="btn btn-primary" type="submit" name="button">Change Date</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    fee_status : `
    <div class="panel-header panel-header-sm">
    </div>
    <div class="content">
      <!-- <div class="d-flex justify-content-center align-items-center" style="height:100vh;"> -->
            <div class="row">
                  <div class="col-lg">
                        <div class="card">
                              <div class="card-header">
                                    <h4 class="card-title"> Fees Status</h4>
                              </div>
                              <hr>
                              <div class="card-body">
                                    <div class="table-responsive">
                                          <table class="table">
                                                <thead class=" text-primary">

                                                      <!-- name, username, role, sn -->
                                                      <th>
                                                            S.no.
                                                      </th>
                                                      <th>
                                                            Roll
                                                      </th>
                                                      <th>
                                                            Semester
                                                      </th>
                                                      <!-- <th>
                                                            Amount
                                                      </th> -->
                                                      <th>
                                                            Date
                                                      </th>
                                                      <th>
                                                            Status
                                                      </th>
                                                </thead>
                                                <tbody id="feeStatusTable" >
                                                      
                                                </tbody>
                                          </table>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
    `,
    index : `
    <nav class="navbar navbar-expand-lg navbar-transparent  bg-primary  navbar-absolute">
    <div class="container-fluid">
        <div class="navbar-wrapper">
            <a class="navbar-brand" href=""><i class="fa fa-bars"></i></a>
        </div>
      <div class="navbar-collapse justify-content-end collapse show" id="navigation" >
        <button type="button" onclick="getNotification()" class="btn btn-outline-info btn-round" data-toggle="modal" data-target="#notification">
            <i class="fas fa-envelope fa-2x"></i>
        </button>
        </div>
    </div>
    </nav>

    <div id="notification" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Notifications</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body" id="notifDiv">
                <ul id="notifList" style="list-style-type: none;">
                </ul>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
    </div>

        <div class="panel-header panel-header-sm">
        </div>
        <div class="content">
            <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
                <div class="text-center">
                    <img src="./../imgs/img/welcome.svg" height="400px" />
                </div>
            </div>

        </div>
    `,
    result_comp : `
    <div class="panel-header panel-header-sm">
    </div>
<div class="content">
      <!-- <div class="d-flex justify-content-center align-items-center" style="height:100vh;"> -->
            <div class="row">
                  <div class="col">
                        <div class="card">
                              <div class="card-header">
                                    <h4 class="card-title"> Result Compilation</h4>
                                    <div class="input-group no-border" >
                                      <input class="form-control" id="inputSemester" type="text" placeholder="Enter Semester number" value="">
                                      <div class="input-group-append">
                                            <button class="btn btn-outline-primary btn-round btn-icon" id="search_result">
                                                <i class="now-ui-icons ui-1_zoom-bold"></i>
                                            </button>
                                      </div>
                                    </div>
                              </div>
                              <hr>
                              <div class="card-body">
                                    <div class="table-responsive">
                                          <table class="table">
                                                <thead class=" text-primary">

                                                      <!-- name, username, role, sn -->
                                                      <th>
                                                            S.no.
                                                      </th>
                                                      <th>
                                                            Roll
                                                      </th>
                                                      <th>
                                                            Credits
                                                      </th>
                                                      <th>
                                                            GPA
                                                      </th>
                                                      <th>
                                                            Medal
                                                      </th>
                                                </thead>
                                                <tbody id="result_table" align="center">

                                                </tbody>
                                          </table>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
    `,
    sem_reg : `
    <div class="panel-header panel-header-sm">
    </div>
    <div class="content">
        <div class="row">
            <div class="col">
                <div class="card">
                      <div class="card-header">
                            <h4 class="card-title"> Semester Registration </h4>
                            <div class="input-group no-border" >
                              <input class="form-control" id="inputProgramID" type="text" placeholder="Enter Program ID" value="">
                              <div class="input-group-append">
                                    <button class="btn btn-outline-primary btn-round btn-icon" id="search_program" onclick="search_program()">
                                        <i class="now-ui-icons ui-1_zoom-bold"></i>
                                    </button>
                              </div>
                            </div>
                      </div>
                      <hr>
                      <div class="card-body">
                            <div class="table-responsive">
                                  <table class="table">
                                        <thead class=" text-primary">

                                              <!-- name, username, role, sn -->
                                              <th>
                                                    S.no.
                                              </th>
                                              <th>
                                                    Enrollment ID
                                              </th>
                                              <th>
                                                    Name
                                              </th>
                                              <th>
                                                    Date of Birth
                                              </th>
                                              <th>
                                                    Semesters
                                              </th>
                                        </thead>
                                        <tbody id="sem_reg_table" align="center">


                                        </tbody>
                                  </table>
                            </div>
                      </div>
                </div>
            </div>
        </div>

    </div>`
}


function appendHTML(type){
    if(type === "logout") {
        localStorage.clear();
    }

    document.getElementById('main-panel').innerHTML='';
    document.getElementById('main-panel').innerHTML=html[type];
    if(type==='result_comp') document.querySelector('#search_result').addEventListener('click',fetchResults);
    if(type==='admission') document.getElementById("defaultOpen").click();
    if(type==='fee_status') getFeeStatusForAll();
    if(type==="see_logs") getLogs();
    else if(type==="list_user") listOfUser();
}


function setCurrent(type){
    localStorage.setItem('current',type);
}
