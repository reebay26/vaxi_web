<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class Child_Vaccine extends Mailable
{
    use Queueable, SerializesModels;
public  $missedVaccines;
public $upcomingVaccines;
    /**
     * Create a new message instance.
     */
    public function __construct($missedVaccines,$upcomingVaccines)
    {
        $this->missedVaccines=$missedVaccines;
        $this->upcomingVaccines=$upcomingVaccines;
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Child Vaccine',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'emails.child_vaccine',
        );
    }

   
}
