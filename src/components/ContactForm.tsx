import { Form, TextField, TextArea, Label, Input, Button, FieldError } from "react-aria-components";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitMessage("Thank you for your message! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      setSubmitMessage("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-base-content mb-2">Get In Touch</h2>
        <p className="text-base-content/70">
          Ready to start your real estate journey? Let's discuss your needs.
        </p>
      </div>

      <Form 
        onSubmit={handleSubmit}
        className="space-y-6"
        validationErrors={{}}
      >
        {/* Name Field */}
        <TextField 
          name="name" 
          isRequired
          className="w-full"
        >
          <Label className="block text-sm font-medium text-base-content mb-2">
            Full Name *
          </Label>
          <Input 
            className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-base-100 text-base-content placeholder:text-base-content/50 transition-colors"
            placeholder="Enter your full name"
          />
          <FieldError className="text-error text-sm mt-1" />
        </TextField>

        {/* Email Field */}
        <TextField 
          name="email" 
          type="email"
          isRequired
          className="w-full"
        >
          <Label className="block text-sm font-medium text-base-content mb-2">
            Email Address *
          </Label>
          <Input 
            className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-base-100 text-base-content placeholder:text-base-content/50 transition-colors"
            placeholder="Enter your email address"
          />
          <FieldError className="text-error text-sm mt-1" />
        </TextField>

        {/* Phone Field */}
        <TextField 
          name="phone" 
          type="tel"
          className="w-full"
        >
          <Label className="block text-sm font-medium text-base-content mb-2">
            Phone Number
          </Label>
          <Input 
            className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-base-100 text-base-content placeholder:text-base-content/50 transition-colors"
            placeholder="Enter your phone number"
          />
          <FieldError className="text-error text-sm mt-1" />
        </TextField>

        {/* Subject Field */}
        <TextField 
          name="subject" 
          isRequired
          className="w-full"
        >
          <Label className="block text-sm font-medium text-base-content mb-2">
            Subject *
          </Label>
          <Input 
            className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-base-100 text-base-content placeholder:text-base-content/50 transition-colors"
            placeholder="What can we help you with?"
          />
          <FieldError className="text-error text-sm mt-1" />
        </TextField>

        {/* Message Field */}
        <TextField 
          name="message" 
          isRequired
          className="w-full"
        >
          <Label className="block text-sm font-medium text-base-content mb-2">
            Message *
          </Label>
          <TextArea 
            className="w-full px-4 py-3 border border-base-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-base-100 text-base-content placeholder:text-base-content/50 transition-colors min-h-[120px] resize-y"
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
            className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-content font-medium rounded-lg hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-content border-t-transparent"></div>
                <span>Sending...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </Button>

          {/* Success/Error Message */}
          {submitMessage && (
            <div className={`p-3 rounded-lg ${
              submitMessage.includes("Thank you") 
                ? "bg-success/10 text-success border border-success/20" 
                : "bg-error/10 text-error border border-error/20"
            }`}>
              {submitMessage}
            </div>
          )}
        </div>


      </Form>
    </div>
  );
}