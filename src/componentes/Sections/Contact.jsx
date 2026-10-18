const contactDetails = {
  phone: "+911234567890",
  email: "your-email@example.com",
};

export default function Contact() {
  return (
    
<section className="section" id="contact">
  <div className="section-heading">
    <span className="eyebrow">Get in touch</span>

    <h2>
      Let's connect and create something{" "}
      <span className="accent-text">great.</span>
    </h2>

    <p>
      Have a project in mind or want to collaborate? Reach out
      using either of the options below.
    </p>
  </div>

  <div className="contact-options">
    {/* Phone Contact */}
    <a
      className="contact-option"
      href="tel:6367995091"
    >
      <span className="contact-option-icon" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      </span>

      <span className="contact-option-content">
        <span className="contact-option-label">Call Me</span>
        <span className="contact-option-value">
          6367995091
        </span>
      </span>

      <span className="contact-option-arrow" aria-hidden="true">
        ↗
      </span>
    </a>

    {/* Email Contact */}
    <a
      className="contact-option"
      href="mailto:rajveershekhawat.0501@gmail.com"
    >
      <span className="contact-option-icon" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </span>

      <span className="contact-option-content">
        <span className="contact-option-label">Email Me</span>
        <span className="contact-option-value">
          rajveershekhawat.0501@gmail.com
        </span>
      </span>

      <span className="contact-option-arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  </div>
</section>

  );
}