import {
  Form,
  TextField,
  TextArea,
  Label,
  Input,
  Button,
  FieldError,
} from 'react-aria-components';
import { useActionState } from 'react';
import { actions } from 'astro:actions';

type FormState = {
  success: boolean;
  message: string;
} | null;

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    async (_previousState: FormState, formData: FormData) => {
      try {
        // Call the Astro action to send the email
        const { data, error } = await actions.sendContactEmail(formData);

        if (error) {
          return {
            success: false,
            message: error.message || 'Failed to send message',
          };
        }

        return {
          success: true,
          message:
            data?.message ||
            "Thank you for your message! We'll get back to you soon.",
        };
      } catch (error) {
        console.error('Error submitting contact form:', error);
        return {
          success: false,
          message:
            error instanceof Error
              ? error.message
              : 'There was an error sending your message. Please try again.',
        };
      }
    },
    null
  );

  return (
    <div>
      <Form action={formAction} className="space-y-6" validationErrors={{}}>
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
            isDisabled={isPending}
            className="btn btn-primary w-full sm:w-auto"
          >
            {isPending ? (
              <div className="flex items-center space-x-2">
                <div className="loading loading-spinner loading-sm"></div>
                <span>Sending...</span>
              </div>
            ) : (
              'Send Message'
            )}
          </Button>

          {/* Success/Error Message */}
          {state?.message && (
            <div
              className={`alert ${
                state.success ? 'alert-success' : 'alert-error'
              }`}
            >
              <span>{state.message}</span>
            </div>
          )}
        </div>
      </Form>
    </div>
  );
}
