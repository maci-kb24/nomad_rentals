import  ContactForm from '@/components/contact-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          If you have any questions or inquiries, feel free to reach out to us!
        </p>
        <ContactForm />
      </div>
    </div>
  )
}
