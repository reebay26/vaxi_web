<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Modernize Free</title>
  <link rel="shortcut icon" type="image/png" href="./admin/images/logos/favicon.png" />
  <link rel="stylesheet" href="./admin/css/styles.min.css" />
  <style>
    .card-body {
    background-color: #f8f9fa;
    border-radius: 8px;
}

.statistics {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.stat-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #dee2e6;
}

.stat-content {
    display: flex;
    flex-direction: column;
}

.stat-title {
    font-size: 1.1rem;
    color: #495057;
    margin-bottom: 0.5rem;
}

.stat-value {
    font-size: 1.5rem;
    font-weight: 600;
    color: #212529;
}

.badge {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 0.375rem;
}
.events-container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            width: 100%;
            text-align: center;
        }

        .events-container h2 {
            margin-bottom: 10px;
            color: black;
        }

        .event-card {
            background-color: rgb(22, 116, 193);
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 15px;
        }

        .event-card h3 {
            margin: 0 0 10px;
            color:  white;
        }

        .event-card p {
            margin: 0;
            color: white;
        }

        .no-events {
            color: black;
        }


  </style>
</head>

<body>
  <!--  Body Wrapper -->
  <div class="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">
    <!-- Sidebar Start -->
   @include('hospital.sidebar')
    <!--  Sidebar End -->
    <!--  Main wrapper -->
    <div class="body-wrapper">
      <!--  Header Start -->
      <header class="app-header">
        <nav class="navbar navbar-expand-lg navbar-light">
          <ul class="navbar-nav">
            <li class="nav-item d-block d-xl-none">
              <a class="nav-link sidebartoggler nav-icon-hover" id="headerCollapse" href="javascript:void(0)">
                <i class="ti ti-menu-2"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-icon-hover" href="javascript:void(0)">
                <i class="ti ti-bell-ringing"></i>
                <div class="notification bg-primary rounded-circle"></div>
              </a>
            </li>
          </ul>
          <!-- <div class="navbar-collapse justify-content-end px-0" id="navbarNav">
            <ul class="navbar-nav flex-row ms-auto align-items-center justify-content-end">

              <li class="nav-item dropdown">
                <a class="nav-link nav-icon-hover" href="javascript:void(0)" id="drop2" data-bs-toggle="dropdown"
                  aria-expanded="false">

                </a>
                <div class="dropdown-menu dropdown-menu-end dropdown-menu-animate-up" aria-labelledby="drop2">
                  <div class="message-body">
                    <a href="javascript:void(0)" class="d-flex align-items-center gap-2 dropdown-item">
                      <i class="ti ti-user fs-6"></i>
                      <p class="mb-0 fs-3">My Profile</p>
                    </a>
                    <a href="javascript:void(0)" class="d-flex align-items-center gap-2 dropdown-item">
                      <i class="ti ti-mail fs-6"></i>
                      <p class="mb-0 fs-3">My Account</p>
                    </a>
                    <a href="javascript:void(0)" class="d-flex align-items-center gap-2 dropdown-item">
                      <i class="ti ti-list-check fs-6"></i>
                      <p class="mb-0 fs-3">My Task</p>
                    </a>
                    <a href="./authentication-login.html" style="background-color: rgb(216, 26, 26) ; color: white;" class="btn btn-outline-white mx-3 mt-2 d-block">Logout</a>
                  </div>
                </div>
              </li>
            </ul>
          </div> -->


          <div class=".fixed-top-corner" style="position:fixed; top:5px; right:65px; z-index: 50; "><x-app-layout></x-app-layout></div>
        </nav>
      </header>

      @if (session('status'))
<script>
  document.addEventListener('DOMContentLoaded', function(){
  alert("{{session('status')}}")
  })

</script>
@endif

      <div class="container-fluid">
        <!-- Row 1 -->
        <div class="row">
            <!-- Adjusted the column to make the form wider -->
            <div class="col-lg-15 d-flex align-items-stretch">
                <div class="card w-100">
                    <div class="card-body">
                        <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
                            <div class="mb-3 mb-sm-0">
                                <h5 class="card-title fw-semibold">Hospital Registration Form</h5>
                            </div>
                        </div>
                        <form action="/add_hospital" method="Post" enctype="multipart/form-data" >
                            @csrf
                            <!-- Hospital Name -->
                            <div class="mb-3">
                                <label for="hospitalName" class="form-label">Hospital Name</label>
                                <input type="text" class="form-control" id="hospitalName" placeholder="Enter hospital name" name="hospitalname"  required name="">
                            </div>

                            <!-- Address -->
                            <div class="mb-3">
                                <label for="hospitalAddress" class="form-label">Address</label>
                                <textarea class="form-control" id="hospitalAddress" rows="3" placeholder="Enter hospital address"  name="hospitaladdress" required></textarea>
                            </div>

                            <!-- Contact Number -->
                            <div class="mb-3">
                                <label for="contactNumber" class="form-label">Contact Number</label>
                                <input type="tel" class="form-control" id="contactNumber" placeholder="Enter contact number"  name="hospitalnumber" required>
                            </div>



                            <!-- Description -->
                            <div class="mb-3">
                                <label for="description" class="form-label">Hospital Description</label>
                                <textarea class="form-control" id="description" rows="4" placeholder="Enter hospital description"  name="description" required></textarea>
                            </div>

                             <!-- Image Upload -->
                             <div class="mb-3">
                                <label for="hospitalImage" class="form-label">Upload Hospital Image</label>
                                <input type="file" class="form-control" id="hospitalImage" accept="image/*"  name="hospitalimage" required>
                            </div>

                            <!-- Submit Button -->
                            <div class="d-flex justify-content-center " >
                            <button type="submit" class=" px-4 btn btn-primary">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>



      </div>
    </div>
  </div>
  <script src="./admin/libs/jquery/dist/jquery.min.js"></script>
  <script src="./admin/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="./admin/js/sidebarmenu.js"></script>
  <script src="./admin/js/app.min.js"></script>
  <script src="./admin/libs/apexcharts/dist/apexcharts.min.js"></script>
  <script src="./admin/libs/simplebar/dist/simplebar.js"></script>
  <script src="./admin/js/dashboard.js"></script>
</body>

</html>
