import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

export const server = {
  sendContactEmail: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(1, 'Name is required'),
      email: z.string().email('Invalid email address'),
      phone: z.string().optional(),
      subject: z.string().min(1, 'Subject is required'),
      message: z.string().min(10, 'Message must be at least 10 characters'),
    }),
    handler: async (input) => {
      try {
        const { name, email, phone, subject, message } = input;

        // Initialize Resend inside handler to avoid module-load errors
        const resend = new Resend(import.meta.env.RESEND_API_KEY);
        const contactEmail = import.meta.env.CONTACT_EMAIL;

        if (!contactEmail) {
          throw new Error(
            'CONTACT_EMAIL environment variable is not configured. Please set it in your .env file.'
          );
        }

        const recipients = contactEmail
          .split(',')
          .map((recipient) => recipient.trim())
          .filter(Boolean);

        if (recipients.length === 0) {
          throw new Error(
            'CONTACT_EMAIL must contain at least one email address.'
          );
        }

        // Send email using Resend
        const { data, error } = await resend.emails.send({
          from: 'Contact Form <onboarding@resend.dev>', // Update this with your verified domain
          to: recipients,
          replyTo: email, // User's email for easy reply
          bcc: 'briankimball1982@gmail.com',
          subject: `New Contact Form: ${subject}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #2c4a3e;">New Contact Form Submission</h2>

              <div style="background-color: #f5f7f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
                <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
              </div>

              <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2c4a3e; margin: 20px 0;">
                <h3 style="color: #2c4a3e; margin-top: 0;">Message:</h3>
                <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
              </div>

              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dce8e3; color: #666; font-size: 14px;">
                <p>This email was sent from your website contact form.</p>
                <p>You can reply directly to this email to respond to ${name}.</p>
              </div>
            </div>
          `,
          text: `
            New Contact Form Submission

            Name: ${name}
            Email: ${email}
            ${phone ? `Phone: ${phone}` : ''}
            Subject: ${subject}

            Message:
            ${message}

            ---
            This email was sent from your website contact form.
            You can reply directly to this email to respond to ${name}.
          `,
        });

        if (error) {
          console.error('Resend error:', error);
          throw new Error('Failed to send email');
        }

        return {
          success: true,
          message: "Thank you for your message! We'll get back to you soon.",
          emailId: data?.id,
        };
      } catch (error) {
        console.error('Error sending contact email:', error);
        throw new Error(
          error instanceof Error
            ? error.message
            : 'Failed to send email. Please try again.'
        );
      }
    },
  }),
};
