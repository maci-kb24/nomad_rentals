import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

/**
 * A contact form component using shadcn/ui components.
 * This form includes fields for name, email, and a message.
 */
const ContactForm: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  // State to manage the form data for a controlled component.
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });

  // Handler to update the form data state whenever an input changes.
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handler for form submission.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Contact form submitted with data:", formData);
    // In a real application, you would send this data to an API endpoint.
    // For example:
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData),
    //   });
    //   if (response.ok) {
    //     alert('Message sent successfully!');
    //     setFormData({ name: '', email: '', message: '' });
    //   } else {
    //     alert('Failed to send message.');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   alert('An error occurred. Please try again.');
    // }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Contact Us</CardTitle>
          <CardDescription>
            We would love to hear from you. Please fill out the form below.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default  ContactForm 