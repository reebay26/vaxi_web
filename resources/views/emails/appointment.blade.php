<!DOCTYPE html>
<html>
<head>
    <title>Appointment Confirmation</title>

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
    <p>Dear {{ $appointment->parent_name }},</p>
    <p>Your child  appointment has been booked successfully. Details are as follows:</p>
    <ul>
        <li>Date: {{ $appointment->date }}</li>
        <li>Time: {{ $appointment->time }}</li>
        <li>Hospital: {{ $appointment->hospital_name }}</li>
        <!-- Add more details as needed -->
    </ul>
    <p>Thank you for booking with us!</p>
    <div class="footer">
        <p>&copy; {{ date('Y') }} Vaxi. All rights reserved.</p>
        <p>1234 Any Street, karachi, Pakistan</p>
        <p><a href="mailto:vaxiservice@gmail.com"></a>Contact us:vaxiservice@gmail.com</p>

    </div>
</body>
</html>
