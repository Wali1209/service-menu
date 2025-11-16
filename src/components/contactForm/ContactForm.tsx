import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormData {
  name: string;
  email: string;
  businessType: string;
  message: string;
}

// Initialize EmailJS with your public key
// You can get these from https://www.emailjs.com/
emailjs.init("ZvVyO1di592k8LbZd");

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    businessType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showMessage = (message: string) => {
    setSnackbarMessage(message);
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        "service_99u5lgv", // Get from EmailJS dashboard
        "template_kx3zgga", // Get from EmailJS dashboard
        {
          from_name: formData.name,
          from_email: formData.email,
          business_type: formData.businessType,
          message: formData.message,
          to_email: "Walibilal1209@gmail.com", // Your email
        }
      );

      if (result.status === 200) {
        showMessage(
          "🎉 Your message has been sent! We'll contact you within 24 hours."
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          businessType: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      showMessage(
        "❌ Sorry, there was an error sending your message. Please try again or email us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form" id="contact-form">
      <h2 className="section-title">Get Started Today</h2>
      <form onSubmit={handleSubmit} className="contact-form-container">
        <div className="form-group">
          <label htmlFor="name">Your Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="businessType">Business Type *</label>
          <select
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          >
            <option value="">Select your business type</option>
            <option value="restaurant">Restaurant</option>
            <option value="service">Service Business</option>
            <option value="gym">Gym & Fitness</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell me about your business and what you'd like to achieve with a mobile app..."
            required
            disabled={isSubmitting}
          />
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message & Get Quote"}
        </button>
      </form>

      {/* Snackbar Notification */}
      {showSnackbar && <div className="snackbar">{snackbarMessage}</div>}
    </section>
  );
};

export default ContactForm;
