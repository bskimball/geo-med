import {
  Form,
  TextField,
  TextArea,
  Label,
  Input,
  Button,
  FieldError,
} from 'react-aria-components';
import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Collect form data (currently used for logging / future API integration)
    const formData = new FormData(e.currentTarget);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitMessage(
        "Thank you for your message! We'll get back to you soon."
      );
      (e.target as HTMLFormElement).reset();
      console.log('Contact form submitted', {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      });
    } catch (error) {
      console.error('Error submitting contact form', error);
      setSubmitMessage(
        'There was an error sending your message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} className="space-y-6" validationErrors={{}}>
        {/* Name Field */}
        <TextField name="name" isRequired className="w-full">
          <Label className="label">
            <span className="label-text font-medium">Full Name *</span>
          </Label>
          <Input
            className="input input-bordered rounded-lg w-full"
            placeholder="Enter your full name"
          />
          <FieldError className="text-error text-sm mt-1" />
        </TextField>

        {/* Email Field */}
        <TextField name="email" type="email" isRequired className="w-full">
          <Label className="label">
            <span className="label-text font-medium">Email Address *</span>
          </Label>
          <Input
            className="input input-bordered rounded-lg w-full"
            placeholder="Enter your email address"
          />
          <FieldError className="text-error text-sm mt-1" />
        </TextField>

        {/* Phone Field */}
        <TextField name="phone" type="tel" className="w-full">
          <Label className="label">
            <span className="label-text font-medium">Phone Number</span>
          </Label>
          <Input
            className="input input-bordered rounded-lg w-full"
            placeholder="Enter your phone number"
          />
          <FieldError className="text-error text-sm mt-1" />
        </TextField>

        {/* Subject Field */}
        <TextField name="subject" isRequired className="w-full">
          <Label className="label">
            <span className="label-text font-medium">Subject *</span>
          </Label>
          <Input
            className="input input-bordered rounded-lg w-full"
            placeholder="What can we help you with?"
          />
          <FieldError className="text-error text-sm mt-1" />
        </TextField>

        {/* Message Field */}
        <TextField name="message" isRequired className="w-full">
          <Label className="label">
            <span className="label-text font-medium">Message *</span>
          </Label>
          <TextArea
            className="textarea textarea-bordered rounded-lg w-full min-h-[120px] resize-y"
            placeholder="Tell us about your real estate needs..."
            rows={5}
          />
          <FieldError className="text-error text-sm mt-1" />
        </TextField>

        {/* Submit Button */}
        <div className="flex flex-col space-y-4">
          <Button
            type="submit"
            isDisabled={isSubmitting}
            className="btn btn-primary w-full sm:w-auto"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="loading loading-spinner loading-sm"></div>
                <span>Sending...</span>
              </div>
            ) : (
              'Send Message'
            )}
          </Button>

          {/* Success/Error Message */}
          {submitMessage && (
            <div
              className={`alert ${
                submitMessage.includes('Thank you')
                  ? 'alert-success'
                  : 'alert-error'
              }`}
            >
              <span>{submitMessage}</span>
            </div>
          )}
        </div>
      </Form>
    </div>
  );
}
