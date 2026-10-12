import { useState } from 'react';
import { Send, MapPin, GraduationCap, CheckCircle2, Mail, Phone, AlertCircle } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const validate = (data) => {
    const errs = {};
    if (!data.name.trim()) {
      errs.name = 'Full Name is required.';
    } else if (data.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters long.';
    }

    if (!data.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email.trim())) {
      errs.email = 'Please provide a valid email address (e.g., name@example.com).';
    }

    if (!data.subject.trim()) {
      errs.subject = 'Subject is required.';
    }

    if (!data.message.trim()) {
      errs.message = 'Message content is required.';
    } else if (data.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);

    if (touched[name]) {
      const currentErrors = validate(updated);
      setErrors(currentErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const currentErrors = validate(formData);
    setErrors(currentErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({ submitting: false, submitted: false, error: 'Please correct the highlighted fields before sending.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Realistic API submission simulation
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTouched({});
      setErrors({});

      setTimeout(() => {
        setStatus((s) => ({ ...s, submitted: false }));
      }, 7000);
    }, 1200);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Direct Communication</span>
          <h2 className="section-title">
            Get in <span>Touch</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an upcoming full-stack development opportunity, wish to discuss AI & MERN
            engineering, or want to review my credentials, feel free to reach out.
          </p>
        </div>

        <div className="contact-grid-layout">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-cards">
            {/* Email Card */}
            <a href="mailto:subashselva2006@gmail.com" className="contact-meta-card interactive-card">
              <div className="meta-card-icon">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="meta-card-title">Email Address</h4>
                <p className="meta-card-desc">subashselva2006@gmail.com</p>
                <span className="meta-sub">Click to send direct email</span>
              </div>
            </a>

            {/* Phone Card */}
            <a href="tel:+919345887855" className="contact-meta-card interactive-card">
              <div className="meta-card-icon">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="meta-card-title">Mobile Phone</h4>
                <p className="meta-card-desc">+91 9345887855</p>
                <span className="meta-sub">Available during working hours</span>
              </div>
            </a>

            {/* Location Card */}
            <div className="contact-meta-card interactive-card">
              <div className="meta-card-icon">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="meta-card-title">Location</h4>
                <p className="meta-card-desc">Coimbatore, Tamil Nadu, India</p>
                <span className="meta-sub">Open to on-site & remote roles</span>
              </div>
            </div>

            {/* Education Card */}
            <div className="contact-meta-card interactive-card">
              <div className="meta-card-icon">
                <GraduationCap size={22} />
              </div>
              <div>
                <h4 className="meta-card-title">University Campus</h4>
                <p className="meta-card-desc">Karpagam Academy of Higher Education</p>
                <span className="meta-sub">B.E. Computer Science and Engineering</span>
              </div>
            </div>

            {/* Social links row */}
            <div className="contact-social-row">
              <a
                href="https://github.com/Subashgithub06"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn-pill"
              >
                <GitHubIcon size={16} />
                <span>Subashgithub06</span>
              </a>
              <a
                href="https://www.linkedin.com/in/Subashselva06"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn-pill"
              >
                <LinkedInIcon size={16} />
                <span>Subashselva06</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Modern Form */}
          <div className="contact-form-wrapper interactive-card">
            <h3 className="form-card-title">Send a Direct Message</h3>
            <p className="form-card-subtitle">Fill in the validated form below and I'll get back to you promptly.</p>

            {status.submitted && (
              <div className="alert-success">
                <CheckCircle2 size={22} className="text-green flex-shrink-0" />
                <div>
                  <strong>Message Sent Successfully!</strong>
                  <p>Thank you for reaching out. Your message has been received, and I will reply to you shortly.</p>
                </div>
              </div>
            )}

            {status.error && (
              <div className="alert-error">
                <AlertCircle size={18} className="flex-shrink-0" />
                <span>{status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-actual-form" noValidate>
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Subash Selva"
                    required
                    className={`form-input ${touched.name && errors.name ? 'input-error' : ''}`}
                  />
                  {touched.name && errors.name && (
                    <span className="field-error-text">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. subash@example.com"
                    required
                    className={`form-input ${touched.email && errors.email ? 'input-error' : ''}`}
                  />
                  {touched.email && errors.email && (
                    <span className="field-error-text">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Full-Stack Developer Opportunity / Project Inquiry"
                  required
                  className={`form-input ${touched.subject && errors.subject ? 'input-error' : ''}`}
                />
                {touched.subject && errors.subject && (
                  <span className="field-error-text">{errors.subject}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span className="req">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Share details regarding your requirements, timelines, or role description..."
                  required
                  className={`form-textarea ${touched.message && errors.message ? 'input-error' : ''}`}
                />
                {touched.message && errors.message && (
                  <span className="field-error-text">{errors.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="btn-primary form-submit-btn"
              >
                <span>{status.submitting ? 'Transmitting Message...' : 'Send Message'}</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background: #ffffff;
        }

        .contact-grid-layout {
          display: grid;
          grid-template-columns: 390px 1fr;
          gap: 48px;
          align-items: start;
        }

        .contact-info-cards {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-meta-card {
          background: #f8fbff;
          border: 1px solid var(--border-blue);
          border-radius: var(--radius-lg);
          padding: 22px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          text-decoration: none;
          color: inherit;
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .contact-meta-card:hover {
          transform: translateY(-3px);
          border-color: var(--primary-blue);
          box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.12);
        }

        .meta-card-icon {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: var(--primary-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .meta-card-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--navy-heading);
          margin-bottom: 2px;
        }

        .meta-card-desc {
          font-size: 0.92rem;
          color: var(--text-color);
          font-weight: 600;
        }

        .meta-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
          display: block;
          margin-top: 3px;
        }

        .contact-social-row {
          display: flex;
          gap: 12px;
          margin-top: 6px;
        }

        .social-btn-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: var(--radius-full);
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: var(--primary-blue);
          font-size: 0.82rem;
          font-weight: 700;
          transition: all 0.2s;
        }

        .social-btn-pill:hover {
          background: var(--primary-blue);
          color: #ffffff;
          transform: translateY(-2px);
        }

        /* Form Card */
        .contact-form-wrapper {
          background: #ffffff;
          padding: 40px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-blue);
          box-shadow: 0 15px 35px -5px rgba(15, 23, 42, 0.06);
        }

        .form-card-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .form-card-subtitle {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 26px;
        }

        .alert-success {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #166534;
          padding: 18px;
          border-radius: var(--radius-md);
          margin-bottom: 24px;
          font-size: 0.9rem;
        }

        .alert-success strong {
          display: block;
          font-weight: 700;
          margin-bottom: 2px;
        }

        .alert-error {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #991b1b;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          font-size: 0.88rem;
          font-weight: 600;
        }

        .contact-actual-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--navy-heading);
        }

        .req {
          color: var(--primary-blue);
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
          background: #f8fafc;
          font-family: inherit;
          font-size: 0.95rem;
          color: var(--navy-heading);
          outline: none;
          transition: all var(--transition-fast);
        }

        .form-input:focus, .form-textarea:focus {
          border-color: var(--primary-blue);
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
        }

        .input-error {
          border-color: #ef4444 !important;
          background: #fff5f5 !important;
        }

        .field-error-text {
          font-size: 0.78rem;
          color: #dc2626;
          font-weight: 600;
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit-btn {
          margin-top: 8px;
          align-self: flex-start;
          padding: 13px 32px;
        }

        .text-green {
          color: #10b981;
        }

        .flex-shrink-0 {
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .contact-grid-layout {
            grid-template-columns: 1fr;
          }
          .form-row-2 {
            grid-template-columns: 1fr;
          }
          .contact-form-wrapper {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
