
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { company, name, email, plan, location, timing, environment, notes } = body;

        // Basic validation
        if (!name || !email || !plan || !location) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const subject = `[NINUVA] New Inquiry from ${name}`;

        // Email content
        const emailContent = `
New Inquiry Received

Name: ${name}
Company: ${company || 'N/A'}
Email: ${email}
Service Plan: ${plan}
Location: ${location}
Timing: ${timing || 'N/A'}
Environment: ${environment}

Notes:
${notes || 'None'}
        `;

        const data = await resend.emails.send({
            from: 'NINUVA Contact <onboarding@resend.dev>', // Should be updated to a verified domain later
            to: ['masahito@ninuva.com'],
            subject: subject,
            text: emailContent,
            replyTo: email,
        });

        if (data.error) {
            return NextResponse.json({ error: data.error }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
