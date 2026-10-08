import { useState } from 'react';
import { Send, MapPin, GraduationCap, Clock, CheckCircle2, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ submitting: false, submitted: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate sending message
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setStatus((s) => ({ ...s, submitted: false }));
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">
            Let's Start a <span>Conversation</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an upcoming project, an internship or full-time opportunity, or
            simply want to talk software engineering and security, feel free to reach out.
          </p>
        </div>

        <div className="contact-grid-layout">
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-cards">
            <div className="contact-meta-card">
              <div className="meta-card-icon">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="meta-card-title">Location</h4>
                <p className="meta-card-desc">Coimbatore, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="contact-meta-card">
              <div className="meta-card-icon">
                <GraduationCap size={22} />
              </div>
              <div>
                <h4 className="meta-card-title">Education & Campus</h4>
                <p className="meta-card-desc">Karpagam Academy of Higher Education</p>
                <span className="meta-sub">4th Year B.E. CS & Cyber Security</span>
              </div>
            </div>

            <div className="contact-meta-card">
              <div className="meta-card-icon">
                <Clock size={22} />
              </div>
              <div>
                <h4 className="meta-card-title">Response Time</h4>
                <p className="meta-card-desc">Typically within 24 hours</p>
                <span className="meta-sub">Open to software developer roles</span>
              </div>
            </div>

            {/* Note banner */}
            <div className="contact-notice-box">
              <div className="notice-icon">💬</div>
              <p>
                I actively review messages submitted through this portal. Looking forward to
                connecting!
              </p>
            </div>
          </div>

          {/* Right Column: Clean Modern Form */}
          <div className="contact-form-wrapper interactive-card">
            <h3 className="form-card-title">Send a Direct Message</h3>
            <p className="form-card-subtitle">Fill in the form below and I'll get back to you promptly.</p>

            {status.submitted && (
              <div className="alert-success">
                <CheckCircle2 size={20} className="text-green flex-shrink-0" />
                <div>
                  <strong>Thank you for reaching out!</strong>
                  <p>Your message has been recorded successfully. I will get back to you soon.</p>
                </div>
              </div>
            )}

            {status.error && (
              <div className="alert-error">
                <span>{status.error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-actual-form">
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
                    placeholder="e.g. Alex Henderson"
                    required
                    className="form-input"
                  />
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
                    placeholder="e.g. alex@example.com"
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Opportunity Discussion / Project Collaboration"
                  className="form-input"
                />
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
                  placeholder="Share details about your query or opportunity..."
                  required
                  className="form-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="btn-primary form-submit-btn"
              >
                <span>{status.submitting ? 'Sending Message...' : 'Send Message'}</span>
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
          grid-template-columns: 380px 1fr;
          gap: 48px;
          align-items: start;
        }

        .contact-info-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-meta-card {
          background: #f8fbff;
          border: 1px solid var(--border-blue);
          border-radius: var(--radius-md);
          padding: 22px;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          transition: transform 0.25s ease, border-color 0.25s ease;
        }

        .contact-meta-card:hover {
          transform: translateX(4px);
          border-color: var(--primary-blue);
        }

        .meta-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
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
          font-size: 0.9rem;
          color: var(--text-color);
          font-weight: 500;
        }

        .meta-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
          display: block;
          margin-top: 2px;
        }

        .contact-notice-box {
          background: #eff6ff;
          border: 1px dashed var(--primary-border);
          border-radius: var(--radius-md);
          padding: 18px;
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .notice-icon {
          font-size: 1.4rem;
        }

        .contact-notice-box p {
          font-size: 0.85rem;
          color: var(--text-color);
          line-height: 1.5;
        }

        /* Form Card */
        .contact-form-wrapper {
          background: #ffffff;
          padding: 38px;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-md);
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
          padding: 16px;
          border-radius: var(--radius-md);
          margin-bottom: 24px;
          font-size: 0.9rem;
        }

        .alert-success strong {
          display: block;
          font-weight: 700;
        }

        .alert-error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #991b1b;
          padding: 12px 16px;
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          font-size: 0.88rem;
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

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-submit-btn {
          margin-top: 8px;
          align-self: flex-start;
          padding: 13px 32px;
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
