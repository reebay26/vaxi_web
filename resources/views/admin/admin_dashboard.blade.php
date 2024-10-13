<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Modernize Free</title>
  <link rel="shortcut icon" type="image/png" href="./admin/images/logos/favicon.png" />
  <link rel="stylesheet" href="./admin/css/styles.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <style>
   <style>
    .timeline-widget {
  padding: 0;
  margin: 0;
}

.timeline-item {
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 10px;
}

.timeline-item:last-child {
  border-bottom: none;
}

.icon-wrap {
  background-color: #007bff; /* Bootstrap primary color */
  color: white;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
}

.icon-wrap i {
  font-size: 16px;
}

.timeline-item h6 {
  margin: 0;
  font-weight: 600;
}

.timeline-item small {
  display: block;
  margin-top: 2px;
}

.card-title {
  margin-bottom: 1rem;
}

.card-body {
  padding: 1.5rem;
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
   @include('admin.sidebar')
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

        <!--  Header End -->
        <div class="container-fluid">
            <!--  Row 1 -->
            <div class="row">
              <div class="col-lg-8 d-flex align-items-strech">
                <div class="card w-100">
                  <div class="card-body">
                    <div class="d-sm-flex d-block align-items-center justify-content-between mb-9">
                      <div class="mb-3 mb-sm-0">
                        <h5 class="card-title fw-semibold">Vaccination Appointments</h5>
                      </div>
             <a href="/appointments_details"  style="background-color: rgb(22, 116, 193); color:white" class="btn" >View Appointments Details</a>
                    </div>
                    <ul class="timeline-widget list-unstyled mb-0">
              @foreach($appointment as $appointment)
                <li class="timeline-item d-flex align-items-center mb-4">
                  <div class="icon-wrap me-3">
                    <i style="background-color: rgb(22, 116, 193); color:white" class="fas fa-calendar-check"></i>
                  </div>
                  <div>
                    <h6 class="mb-1">{{ $appointment->parent_name }} booked their child {{$appointment->child_name}} appointment</h6>
                    <small class="text-muted">Parent Email is  {{ $appointment->parent_email }}</small>
                  </div>
                </li>
              @endforeach
            </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="row">
                  <div class="col-lg-12">
                    <!-- Yearly Breakup -->
                    <div class="card overflow-hidden">
                        <div class="card-body p-4">
                          <h5 class="card-title mb-9 fw-semibold">Vaccination History</h5>
                          <div class="row align-items-center">
                            <div class="col-8">
                              <h4 class="fw-semibold mb-3">Total Vaccinations</h4>
                              <div class="d-flex align-items-center mb-3">
                                <span
                                  class="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                                  <i class="ti ti-arrow-up-left text-success"></i>
                                </span>
                                <p class="text-dark me-1 fs-3 mb-0">+9%</p>
                                <p class="fs-3 mb-0">last year</p>
                              </div>
                              <div class="d-flex align-items-center">
                                <div class="me-4">
                                  <span style="background-color: rgb(216, 26, 26);" class="round-8  rounded-circle me-2 d-inline-block"></span>
                                  <span class="fs-2">2024</span>
                                </div>
                                <div>
                                  <span style="background-color: rgb(216, 26, 26);" class="round-8  rounded-circle me-2 d-inline-block"></span>
                                  <span class="fs-2">2023</span>
                                </div>
                              </div>
                            </div>
                          <div class="col-4">
                            <div class="d-flex justify-content-center">
                              <div id="breakup"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <!-- Monthly Earnings -->
                    <div class="card">
                      <div class="card-body">
                        <div class="row alig n-items-start">
                        <div class="events-container">
        <h2>Upcoming Events</h2>

        <!-- Example of an upcoming event -->
        <div class="event-card">
            <h3>Blood Donation Camp</h3>
            <p>Date: September 29, 2024</p>
            <p>Location: Community Center, City XYZ</p>
        </div>

        <!-- Example of a "Coming Soon" message -->
        <div class="no-events">
            <p>Stay tuned for more upcoming events!</p>
        </div>
    </div>
                          <div class="col-4">
                            <div class="d-flex justify-content-end">

                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>



        <div class="row">
          <div class="col-lg-4 d-flex align-items-stretch">
            <div class="card w-100">
              <div class="card-body p-4">
                <div class="mb-4">
                  <h5 class="card-title fw-semibold">Recent Hospitals</h5>
                </div>
                @if(count($fhospital) === 0)
                <p>No recent registrations.</p>
            @else
@foreach($fhospital as $hos)
                <ul class="timeline-widget mb-0 position-relative mb-n5">
                  <li class="timeline-item d-flex position-relative overflow-hidden">
                    <div class="timeline-time text-dark flex-shrink-0 text-end">{{ $hos['created_at'] }}</div>
                    <div class="timeline-badge-wrap d-flex flex-column align-items-center">
                      <span class="timeline-badge border-2 border border-primary flex-shrink-0 my-8"></span>
                      <span class="timeline-badge-border d-block flex-shrink-0"></span>
                    </div>
                    <div class="timeline-desc fs-3 text-dark mt-n1">  {{ $hos->hospitalname }} is registered </div>
                  </li>
                  @endforeach
                </ul>
                @endif
              </div>
            </div>
          </div>


          <div class="col-lg-8 d-flex align-items-stretch">
            <div class="card w-100">
                <div class="card-body p-4">
                    <h5 class="card-title fw-semibold mb-4">Recent Registrations</h5>
                    @if(count($child_details) === 0)
                        <p>No recent registrations.</p>
                    @else
                        <ul class="list-group">
                            @foreach($child_details as $registration)
                                <li class="list-group-item d-flex align-items-center">
                                    <i class="fa fa-user-plus me-3 text-primary" style="font-size: 1.5rem;"></i>
                                    <div>
                                        {{ $registration->child_name }} is registered for vaccination <br>
                                        <small class="text-muted">{{ $registration['created_at'] }}</small>
                                    </div>
                                </li>
                            @endforeach
                        </ul>
                    @endif
                </div>
            </div>
        </div>





        <!-- <div class="row">
          <div class="col-sm-6 col-xl-3">
            <div class="card overflow-hidden rounded-2">
              <div class="position-relative">
                <a href="javascript:void(0)"><img src="./admin/images/products/s4.jpg" class="card-img-top rounded-0" alt="..."></a>
                <a href="javascript:void(0)" class="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart"><i class="ti ti-basket fs-4"></i></a>                      </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fw-semibold fs-4">Boat Headphone</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fw-semibold fs-4 mb-0">$50 <span class="ms-2 fw-normal text-muted fs-3"><del>$65</del></span></h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div class="card overflow-hidden rounded-2">
              <div class="position-relative">
                <a href="javascript:void(0)"><img src="./admin/images/products/s5.jpg" class="card-img-top rounded-0" alt="..."></a>
                <a href="javascript:void(0)" class="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart"><i class="ti ti-basket fs-4"></i></a>                      </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fw-semibold fs-4">MacBook Air Pro</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fw-semibold fs-4 mb-0">$650 <span class="ms-2 fw-normal text-muted fs-3"><del>$900</del></span></h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div class="card overflow-hidden rounded-2">
              <div class="position-relative">
                <a href="javascript:void(0)"><img src="./admin/images/products/s7.jpg" class="card-img-top rounded-0" alt="..."></a>
                <a href="javascript:void(0)" class="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart"><i class="ti ti-basket fs-4"></i></a>                      </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fw-semibold fs-4">Red Valvet Dress</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fw-semibold fs-4 mb-0">$150 <span class="ms-2 fw-normal text-muted fs-3"><del>$200</del></span></h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div class="card overflow-hidden rounded-2">
              <div class="position-relative">
                <a href="javascript:void(0)"><img src="./admin/images/products/s11.jpg" class="card-img-top rounded-0" alt="..."></a>
                <a href="javascript:void(0)" class="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart"><i class="ti ti-basket fs-4"></i></a>                      </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fw-semibold fs-4">Cute Soft Teddybear</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fw-semibold fs-4 mb-0">$285 <span class="ms-2 fw-normal text-muted fs-3"><del>$345</del></span></h6>
                  <ul class="list-unstyled d-flex align-items-center mb-0">
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="me-1" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                    <li><a class="" href="javascript:void(0)"><i class="ti ti-star text-warning"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> -->


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
