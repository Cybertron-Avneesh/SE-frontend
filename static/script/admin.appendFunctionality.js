const html = {
    index_html : `
    <div class="container">
        <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
            <div class="text-center">
                <img src="./../imgs/img/welcome.svg" height="400px" />
            </div>
        </div>
    </div>      
    `,
    create_user : `
    <div class="panel-header panel-header-sm">
    </div>
    <div class="content">
        <div class="row">
            <div class="col">
                <div class="card">
                      <div class="d-flex justify-content-center align-items-center" style="padding:20px;" >
                            <!-- <center>
                                  <img src="./imgs/img/add_user.svg" height="250px">
                            </center> -->
                            <div class="text-center">
                                  <h2>Create a User</h2>
                                  <div class="form-control" style="padding:20px;">
                                        <form>
                                              <div class="text-left"><label for="inputUsername"> <b>User ID</b></label></div>
                                              <input type="name" class="form-control" id="inputUsername" placeholder="Enter User ID" required>

                                              <div class="text-left"><label for="inputName"> <b>Name</b></label></div>
                                              <input type="name" class="form-control" id="inputName" placeholder="Enter Name of User" required>

                                        <br>

                                              <div class="text-left"><label for="inputRole"><b>Role</b></label><br></div>
                                              <input type="radio" data-color="orange" id="adminRole" name="role"
                                                    value="System Admin" >
                                              <label for="adminRole">System Admin</label>
                                              <input type="radio" data-color="orange" id="prevRole" name="role"
                                                    value="Previledged User">
                                              <label for="prevRole">Privileged User</label>
                                              <input type="radio" data-color="orange" id="operatRole" name="role"
                                                    value="Operating User" checked="checked">
                                              <label for="operatRole">Operating User</label>
                                        </form>
                                        <button onClick="addUsers()" type="submit" class="btn btn-primary">Submit</button>

                                  </div>
                            </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
    `,
    list_user : `
    <div class="panel-header panel-header-sm">
    </div>
    <div class="content">
        <div class="row">
            <div class="col">
                <div class="card">
                  <div class="card-header">
                        <h4 class="card-title"> Users</h4>
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
                                                Name
                                          </th>
                                          <th>
                                                UserID
                                          </th>
                                          <th>
                                                Role
                                          </th>
                                    </thead>
                                    <tbody id="listUser">
                                         
                                    </tbody>
                              </table>
                        </div>
                  </div>
            </div>
      </div>
    </div>
    `,
    remove_user : `
    <div class="panel-header panel-header-sm">
    </div>
    <div class="content">
        <div class="row">
            <div class="col">
                <div class="card">
                      <div class="d-flex justify-content-center align-items-center" style="padding:20px;" >
                            <!-- <center>
                                          <img src="./imgs/img/add_user.svg" height="250px">
                                    </center> -->
                            <div class="text-center">
                                <h2>Remove a User</h2>
                                <div class="form-control" style="padding:20px;">
                                    <form>
                                        <div class="text-left"><label for="inputUsername"> <b>User ID</b> </label></div>
                                        <input type="name" class="form-control" id="inputUsername" placeholder="Enter User ID">
                                    </form>
                                    <br>
                                    <button type="submit" class="btn btn-primary" onclick="removeUsers()">Remove</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    see_logs : `            
    <div class="panel-header panel-header-sm"></div>
    <div class="content">
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-header">
                            <h4 class="card-title"> Logs</h4>
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
                                            UserID
                                        </th>
                                        <th>
                                            Time Stamp
                                        </th>
                                        <th>
                                            Action Performed
                                        </th>

                                    </thead>
                                    <tbody id="logsTable">

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <script type="text/javascript"> getLogs()</script>
        `
}

function appendHTML(type){
    if(type === "logout") {
        localStorage.clear();
    }
    document.getElementById('main-panel').innerHTML='';
    document.getElementById('main-panel').innerHTML=html[type];
    if(type==="see_logs") getLogs();
    else if(type==="list_user") listOfUser();
}
