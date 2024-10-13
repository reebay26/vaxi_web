<!DOCTYPE html>
<html>
<head>
    <title>Vaccine Status</title>

     <style>
        .footer {
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid #dcdcdc;
            font-size: 12px;
            color: #777;
        }
        .footer a {
            color: #a9c6e5;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <p>Dear Parent,</p>
    <p>We would  like to inform you that the following vaccines have been missed:</p>
@if(!empty($missedVaccines))
    <ul>
        @foreach($missedVaccines as $vaccine)
            <li>{{ $vaccine }}</li>
        @endforeach
    </ul>
@else
    <p>No vaccines are missed. Great job!</p>
@endif

<p>Additionally, please be aware of the upcoming vaccines that are recommended for your child:</p>
@if(!empty($upcomingVaccines))
    <ul>
        @foreach($upcomingVaccines as $vaccine)
            <li>{{ $vaccine }}</li>
        @endforeach
    </ul>
@else
    <p>All vaccinations are up to date!</p>
@endif

<p>Thank you for booking with us!</p>
    <div class="footer">
        <p>&copy; {{ date('Y') }} Vaxi. All rights reserved.</p>
        <p>1234 Any Street, karachi, Pakistan</p>
        <p><a href="mailto:vaxiservice@gmail.com"></a>Contact us:vaxiservice@gmail.com</p>

    </div>
</body>
</html>
