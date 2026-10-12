import { useState } from 'react';
import {
  X,
  CheckCircle2,
  Sparkles,
  Bot,
  Sliders,
  Play,
  RotateCcw,
  Copy,
  Check,
  Zap,
  Users,
  GraduationCap
} from 'lucide-react';
import { GitHubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  // AI SaaS Demo State
  const [aiTab, setAiTab] = useState('text');
  const [promptText, setPromptText] = useState('Generate a scalable RESTful API schema with JWT authentication for a MERN application.');
  const [isGenerating, setIsGenerating] = useState(false);
  const [aiOutput, setAiOutput] = useState(
    '// Express.js + Mongoose Architecture Schema\nconst authRoutes = require("./routes/auth");\nconst userRoutes = require("./routes/user");\n\n// JWT Protected Middleware\napp.use("/api/v1/auth", authRoutes);\napp.use("/api/v1/saas", verifyToken, saasRoutes);'
  );
  const [copied, setCopied] = useState(false);
  const [imageFilters, setImageFilters] = useState({ brightness: 100, contrast: 100, grayscale: 0, sepia: 0 });

  // Student Performance Predictor Demo State
  const [attendance, setAttendance] = useState(88);
  const [internalMarks, setInternalMarks] = useState(82);
  const [studyHours, setStudyHours] = useState(14);
  const [predictedResult, setPredictedResult] = useState({
    grade: 'A (Distinction)',
    risk: 'Low Risk',
    riskColor: '#10b981',
    recommendation: 'Maintain current cadence. Recommended for advanced elective seminars and peer mentoring programs.'
  });
  const [dashboardRole, setDashboardRole] = useState('Student');

  // Greenhouse IoT Demo State
  const [temperature, setTemperature] = useState(26);
  const [humidity, setHumidity] = useState(65);
  const [soilMoisture, setSoilMoisture] = useState(72);
  const [pumpActive, setPumpActive] = useState(false);
  const [fanActive, setFanActive] = useState(true);

  if (!project) return null;

  // Handle AI Text Generation Simulation
  const handleGenerateAI = () => {
    setIsGenerating(true);
    setAiOutput('');
    const fullText = `[AI SaaS Generator Response]\nStatus: 200 OK | Latency: 142ms | Tokens: 48\n\nResult for prompt: "${promptText}"\n\n✓ Secure Multi-tenant Architecture verified\n✓ Role-Based Access Control configured (Free & Premium tiers)\n✓ Database indices optimized on MongoDB Atlas cluster\n✓ Cloud endpoint synchronized successfully!`;

    let currentIdx = 0;
    const interval = setInterval(() => {
      currentIdx += 4;
      setAiOutput(fullText.substring(0, currentIdx));
      if (currentIdx >= fullText.length) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 25);
  };

  const handleCopyOutput = () => {
    navigator.clipboard.writeText(aiOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle Student Prediction Calculation
  const handleCalculatePrediction = () => {
    let score = attendance * 0.4 + internalMarks * 0.4 + Math.min(studyHours * 2.5, 20);
    let grade = 'B';
    let risk = 'Moderate Risk';
    let riskColor = '#f59e0b';
    let recommendation = 'Schedule bi-weekly revision sessions and focus on internal mock tests.';

    if (score >= 82) {
      grade = 'A+ (Exemplary)';
      risk = 'Very Low Risk (Top 5%)';
      riskColor = '#10b981';
      recommendation = 'Excellent academic standing. Eligible for honors projects, research assistance, and capstone leadership.';
    } else if (score >= 70) {
      grade = 'A (Distinction)';
      risk = 'Low Risk';
      riskColor = '#10b981';
      recommendation = 'Consistent progress. Maintain minimum 80% attendance to secure first-class ranking.';
    } else if (score < 55) {
      grade = 'C / Needs Attention';
      risk = 'High Risk of Dropout / Arrears';
      riskColor = '#ef4444';
      recommendation = 'Immediate faculty intervention recommended. Increase supervised study hours to 15+ hrs/week.';
    }

    setPredictedResult({ grade, risk, riskColor, recommendation });
  };

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        {/* Modal Top Banner / Image */}
        <div className="modal-banner-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="modal-banner-img"
          />
          <div className="modal-banner-overlay">
            <span className="modal-category-tag">{project.category}</span>
            <span className="modal-badge-tag">{project.badge}</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-content-body">
          <div className="modal-header-row">
            <div>
              <h2 id="modal-project-title" className="modal-title">{project.title}</h2>
              <p className="modal-subtitle">{project.subtitle || project.desc}</p>
            </div>
            <div className="modal-actions-top">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary modal-action-btn"
                  title="View Source on GitHub"
                >
                  <GitHubIcon size={16} />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>

          {/* Tech Stack Row */}
          <div className="modal-tech-stack-row">
            <span className="tech-stack-label">Technology Stack:</span>
            <div className="modal-tech-chips">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ================= INTERACTIVE WORKING DEMO SECTION ================= */}
          <div className="interactive-demo-container">
            <div className="demo-header-bar">
              <div className="demo-title-group">
                <Sparkles size={18} className="text-blue" />
                <h3 className="demo-heading">Interactive Live Simulation</h3>
              </div>
              <span className="demo-live-badge">
                <span className="live-indicator-dot" />
                Real-Time Sandbox
              </span>
            </div>

            {/* DEMO 1: AI SaaS Platform Simulation */}
            {project.id === 'ai-saas' && (
              <div className="ai-saas-sandbox">
                <div className="saas-demo-tabs">
                  <button
                    type="button"
                    className={`saas-tab ${aiTab === 'text' ? 'active' : ''}`}
                    onClick={() => setAiTab('text')}
                  >
                    <Bot size={15} />
                    <span>AI Text & Prompt Generation</span>
                  </button>
                  <button
                    type="button"
                    className={`saas-tab ${aiTab === 'image' ? 'active' : ''}`}
                    onClick={() => setAiTab('image')}
                  >
                    <Sliders size={15} />
                    <span>AI Image Enhancement Studio</span>
                  </button>
                </div>

                {aiTab === 'text' ? (
                  <div className="saas-text-studio">
                    <label className="studio-label">Input Prompt / Specification:</label>
                    <div className="studio-input-row">
                      <input
                        type="text"
                        value={promptText}
                        onChange={(e) => setPromptText(e.target.value)}
                        placeholder="Ask the AI model anything..."
                        className="studio-input"
                      />
                      <button
                        type="button"
                        className="btn-primary studio-gen-btn"
                        onClick={handleGenerateAI}
                        disabled={isGenerating}
                      >
                        {isGenerating ? <Zap size={14} className="spin" /> : <Play size={14} />}
                        <span>{isGenerating ? 'Processing...' : 'Run AI Model'}</span>
                      </button>
                    </div>

                    <div className="studio-output-box">
                      <div className="output-topbar">
                        <span className="output-model-badge">Model: MERN-AI-LLM v2.4</span>
                        <button
                          type="button"
                          className="copy-btn"
                          onClick={handleCopyOutput}
                        >
                          {copied ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                          <span>{copied ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                      <pre className="output-code-area">{aiOutput}</pre>
                    </div>
                  </div>
                ) : (
                  <div className="saas-image-studio">
                    <p className="studio-hint">Adjust image editing parameters processed in real-time:</p>
                    <div className="image-studio-grid">
                      <div className="filter-controls-col">
                        <div className="filter-slider-item">
                          <label>Brightness ({imageFilters.brightness}%)</label>
                          <input
                            type="range"
                            min="50"
                            max="180"
                            value={imageFilters.brightness}
                            onChange={(e) => setImageFilters({ ...imageFilters, brightness: Number(e.target.value) })}
                          />
                        </div>
                        <div className="filter-slider-item">
                          <label>Contrast ({imageFilters.contrast}%)</label>
                          <input
                            type="range"
                            min="50"
                            max="180"
                            value={imageFilters.contrast}
                            onChange={(e) => setImageFilters({ ...imageFilters, contrast: Number(e.target.value) })}
                          />
                        </div>
                        <div className="filter-slider-item">
                          <label>Grayscale ({imageFilters.grayscale}%)</label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={imageFilters.grayscale}
                            onChange={(e) => setImageFilters({ ...imageFilters, grayscale: Number(e.target.value) })}
                          />
                        </div>
                        <button
                          type="button"
                          className="btn-secondary filter-reset-btn"
                          onClick={() => setImageFilters({ brightness: 100, contrast: 100, grayscale: 0, sepia: 0 })}
                        >
                          <RotateCcw size={14} />
                          <span>Reset Filters</span>
                        </button>
                      </div>

                      <div className="image-preview-col">
                        <img
                          src={project.image}
                          alt="AI processed preview"
                          className="filtered-preview-img"
                          style={{
                            filter: `brightness(${imageFilters.brightness}%) contrast(${imageFilters.contrast}%) grayscale(${imageFilters.grayscale}%)`,
                          }}
                        />
                        <span className="live-filter-tag">Real-Time Canvas Shader</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* DEMO 2: AI-Powered Student Performance Predictor */}
            {project.id === 'student-prediction' && (
              <div className="student-predictor-sandbox">
                {/* Role Switcher */}
                <div className="role-switch-bar">
                  <span className="role-label">Dashboard View:</span>
                  {['Student', 'Faculty', 'Administrator'].map((role) => (
                    <button
                      key={role}
                      type="button"
                      className={`role-tab-btn ${dashboardRole === role ? 'active' : ''}`}
                      onClick={() => setDashboardRole(role)}
                    >
                      <Users size={14} />
                      <span>{role} Dashboard</span>
                    </button>
                  ))}
                </div>

                <div className="predictor-grid">
                  <div className="predictor-controls">
                    <div className="slider-group">
                      <div className="slider-meta">
                        <span>Attendance Rate:</span>
                        <strong>{attendance}%</strong>
                      </div>
                      <input
                        type="range"
                        min="40"
                        max="100"
                        value={attendance}
                        onChange={(e) => setAttendance(Number(e.target.value))}
                      />
                    </div>

                    <div className="slider-group">
                      <div className="slider-meta">
                        <span>Internal Exam Marks:</span>
                        <strong>{internalMarks} / 100</strong>
                      </div>
                      <input
                        type="range"
                        min="30"
                        max="100"
                        value={internalMarks}
                        onChange={(e) => setInternalMarks(Number(e.target.value))}
                      />
                    </div>

                    <div className="slider-group">
                      <div className="slider-meta">
                        <span>Weekly Self-Study:</span>
                        <strong>{studyHours} Hours / Week</strong>
                      </div>
                      <input
                        type="range"
                        min="2"
                        max="35"
                        value={studyHours}
                        onChange={(e) => setStudyHours(Number(e.target.value))}
                      />
                    </div>

                    <button
                      type="button"
                      className="btn-primary run-predict-btn"
                      onClick={handleCalculatePrediction}
                    >
                      <Zap size={15} />
                      <span>Compute AI Prediction & Risk</span>
                    </button>
                  </div>

                  <div className="predictor-results-card">
                    <div className="result-header">
                      <GraduationCap size={20} className="text-blue" />
                      <h4>AI Predictive Academic Assessment</h4>
                    </div>

                    <div className="result-metric-row">
                      <span className="res-lbl">Predicted Grade:</span>
                      <strong className="res-val-grade">{predictedResult.grade}</strong>
                    </div>

                    <div className="result-metric-row">
                      <span className="res-lbl">Dropout / Academic Risk:</span>
                      <span
                        className="res-risk-badge"
                        style={{ backgroundColor: `${predictedResult.riskColor}20`, color: predictedResult.riskColor, borderColor: predictedResult.riskColor }}
                      >
                        {predictedResult.risk}
                      </span>
                    </div>

                    <div className="result-recommendation-box">
                      <strong>AI Personalized Study Recommendation:</strong>
                      <p>{predictedResult.recommendation}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 3: Smart Greenhouse Automation */}
            {project.id === 'greenhouse' && (
              <div className="greenhouse-sandbox">
                <div className="gauges-grid">
                  <div className="gauge-card">
                    <span className="gauge-title">Ambient Temperature</span>
                    <strong className="gauge-val">{temperature}°C</strong>
                    <input
                      type="range"
                      min="15"
                      max="45"
                      value={temperature}
                      onChange={(e) => setTemperature(Number(e.target.value))}
                    />
                  </div>

                  <div className="gauge-card">
                    <span className="gauge-title">Relative Humidity</span>
                    <strong className="gauge-val">{humidity}%</strong>
                    <input
                      type="range"
                      min="20"
                      max="95"
                      value={humidity}
                      onChange={(e) => setHumidity(Number(e.target.value))}
                    />
                  </div>

                  <div className="gauge-card">
                    <span className="gauge-title">Soil Moisture</span>
                    <strong className="gauge-val">{soilMoisture}%</strong>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={soilMoisture}
                      onChange={(e) => setSoilMoisture(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="relays-control-bar">
                  <div className="relay-item">
                    <span>Irrigation Water Pump:</span>
                    <button
                      type="button"
                      className={`relay-toggle-btn ${pumpActive ? 'active' : ''}`}
                      onClick={() => setPumpActive(!pumpActive)}
                    >
                      {pumpActive ? 'PUMP RUNNING' : 'PUMP OFF'}
                    </button>
                  </div>
                  <div className="relay-item">
                    <span>Ventilation Exhaust Fan:</span>
                    <button
                      type="button"
                      className={`relay-toggle-btn ${fanActive ? 'active' : ''}`}
                      onClick={() => setFanActive(!fanActive)}
                    >
                      {fanActive ? 'FAN ACTIVE' : 'FAN OFF'}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Details Grid */}
          <div className="modal-grid-details">
            <div className="modal-details-left">
              <h4 className="details-section-title">Comprehensive Project Overview</h4>
              <p className="details-p">{project.detailedDesc || project.desc}</p>

              <h4 className="details-section-title">Key Architectural Highlights</h4>
              <ul className="details-bullet-list">
                {project.highlights.map((hl, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="text-blue flex-shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-details-right">
              <div className="modal-meta-box">
                <h4 className="meta-box-title">System Metrics & Architecture</h4>
                <div className="meta-metric-item">
                  <span className="metric-lbl">Role</span>
                  <span className="metric-val">Lead Full-Stack Developer</span>
                </div>
                <div className="meta-metric-item">
                  <span className="metric-lbl">Architecture</span>
                  <span className="metric-val">{project.architecture}</span>
                </div>
                {project.metrics && Object.entries(project.metrics).map(([k, v], idx) => (
                  <div key={idx} className="meta-metric-item">
                    <span className="metric-lbl">{k}</span>
                    <span className="metric-val text-blue font-bold">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .project-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: modalFadeIn 0.25s ease-out;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .project-modal-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 900px;
          max-height: 92vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 60px -10px rgba(15, 23, 42, 0.3);
          border: 1px solid rgba(191, 219, 254, 0.8);
          animation: modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalSlideUp {
          from { transform: translateY(30px) scale(0.96); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        .modal-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--navy-heading);
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          transition: background 0.2s, transform 0.2s;
        }

        .modal-close-btn:hover {
          background: #ffffff;
          transform: scale(1.08);
          color: var(--primary-blue);
        }

        .modal-banner-wrap {
          position: relative;
          height: 300px;
          width: 100%;
          background: #eff6ff;
          overflow: hidden;
        }

        .modal-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-banner-overlay {
          position: absolute;
          bottom: 16px;
          left: 20px;
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .modal-category-tag {
          background: var(--primary-blue);
          color: #ffffff;
          padding: 6px 16px;
          border-radius: 99px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .modal-badge-tag {
          background: rgba(15, 23, 42, 0.85);
          color: #ffffff;
          padding: 6px 14px;
          border-radius: 99px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .modal-content-body {
          padding: 32px;
        }

        .modal-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 20px;
        }

        .modal-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .modal-subtitle {
          font-size: 0.98rem;
          color: var(--text-muted);
        }

        .modal-actions-top {
          display: flex;
          gap: 10px;
        }

        .modal-action-btn {
          padding: 10px 18px;
          font-size: 0.88rem;
          white-space: nowrap;
        }

        .modal-tech-stack-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: #f8fbff;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-blue);
          margin-bottom: 28px;
        }

        .tech-stack-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--navy-heading);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .modal-tech-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-chip {
          background: #ffffff;
          color: var(--primary-blue);
          border: 1px solid #bfdbfe;
          padding: 4px 12px;
          border-radius: 99px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        /* Interactive Simulation Container */
        .interactive-demo-container {
          background: #f8fbff;
          border: 1.5px solid var(--primary-blue);
          border-radius: var(--radius-xl);
          padding: 24px;
          margin-bottom: 32px;
          box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.1);
        }

        .demo-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 14px;
          margin-bottom: 18px;
          border-bottom: 1px solid #dbeafe;
        }

        .demo-title-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .demo-heading {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--navy-heading);
        }

        .demo-live-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #059669;
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          padding: 3px 10px;
          border-radius: 99px;
        }

        .live-indicator-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.3);
        }

        /* AI SaaS Sandbox */
        .saas-demo-tabs {
          display: flex;
          gap: 10px;
          margin-bottom: 18px;
        }

        .saas-tab {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
          background: #ffffff;
          border: 1px solid var(--border-blue);
          color: var(--text-color);
          transition: all 0.2s;
        }

        .saas-tab.active {
          background: var(--primary-blue);
          color: #ffffff;
          border-color: var(--primary-blue);
        }

        .studio-label {
          display: block;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--navy-heading);
          margin-bottom: 6px;
        }

        .studio-input-row {
          display: flex;
          gap: 10px;
          margin-bottom: 16px;
        }

        .studio-input {
          flex-grow: 1;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-blue);
          background: #ffffff;
          font-family: inherit;
          font-size: 0.9rem;
          color: var(--navy-heading);
          outline: none;
        }

        .studio-gen-btn {
          padding: 10px 20px;
          font-size: 0.85rem;
          white-space: nowrap;
        }

        .studio-output-box {
          background: #0f172a;
          border-radius: var(--radius-md);
          padding: 16px;
          color: #e2e8f0;
        }

        .output-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
          padding-bottom: 8px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .output-model-badge {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: #38bdf8;
        }

        .copy-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          color: #94a3b8;
          transition: color 0.2s;
        }

        .copy-btn:hover {
          color: #ffffff;
        }

        .output-code-area {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          line-height: 1.5;
          white-space: pre-wrap;
          max-height: 180px;
          overflow-y: auto;
        }

        /* Image Studio */
        .image-studio-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: center;
        }

        .filter-slider-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 12px;
        }

        .filter-slider-item label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--navy-heading);
        }

        .filter-slider-item input {
          accent-color: var(--primary-blue);
        }

        .filter-reset-btn {
          margin-top: 8px;
          padding: 8px 16px;
          font-size: 0.82rem;
        }

        .image-preview-col {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #ffffff;
          border: 1px solid var(--border-blue);
        }

        .filtered-preview-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          transition: filter 0.1s linear;
        }

        .live-filter-tag {
          position: absolute;
          bottom: 8px;
          right: 8px;
          background: rgba(15, 23, 42, 0.8);
          color: #ffffff;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.7rem;
        }

        /* Student Predictor Sandbox */
        .role-switch-bar {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }

        .role-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--navy-heading);
        }

        .role-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
          background: #ffffff;
          border: 1px solid var(--border-blue);
          color: var(--text-color);
        }

        .role-tab-btn.active {
          background: var(--primary-blue);
          color: #ffffff;
          border-color: var(--primary-blue);
        }

        .predictor-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .slider-group {
          margin-bottom: 14px;
        }

        .slider-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          margin-bottom: 4px;
        }

        .slider-meta span {
          color: var(--text-color);
        }

        .slider-meta strong {
          color: var(--primary-blue);
        }

        .slider-group input {
          width: 100%;
          accent-color: var(--primary-blue);
        }

        .run-predict-btn {
          width: 100%;
          padding: 10px 18px;
          font-size: 0.85rem;
          margin-top: 8px;
        }

        .predictor-results-card {
          background: #ffffff;
          border: 1px solid var(--border-blue);
          border-radius: var(--radius-lg);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .result-header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-bottom: 8px;
          border-bottom: 1px solid #f1f5f9;
        }

        .result-header h4 {
          font-size: 0.95rem;
          font-weight: 700;
        }

        .result-metric-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .res-lbl {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .res-val-grade {
          font-size: 1.1rem;
          color: var(--primary-blue);
          font-weight: 800;
        }

        .res-risk-badge {
          font-size: 0.78rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 99px;
          border: 1px solid;
        }

        .result-recommendation-box {
          background: #f8fbff;
          border: 1px dashed var(--border-blue);
          border-radius: var(--radius-md);
          padding: 12px;
          font-size: 0.82rem;
        }

        .result-recommendation-box strong {
          display: block;
          color: var(--navy-heading);
          margin-bottom: 4px;
        }

        .result-recommendation-box p {
          color: var(--text-color);
          line-height: 1.45;
          font-size: 0.82rem;
        }

        /* Greenhouse Sandbox */
        .gauges-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 18px;
        }

        .gauge-card {
          background: #ffffff;
          border: 1px solid var(--border-blue);
          border-radius: var(--radius-md);
          padding: 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .gauge-title {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--navy-heading);
          text-transform: uppercase;
        }

        .gauge-val {
          font-size: 1.5rem;
          color: var(--primary-blue);
          font-weight: 800;
        }

        .gauge-card input {
          accent-color: var(--primary-blue);
        }

        .relays-control-bar {
          display: flex;
          justify-content: space-around;
          background: #ffffff;
          padding: 16px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-blue);
        }

        .relay-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.88rem;
          font-weight: 600;
        }

        .relay-toggle-btn {
          padding: 6px 16px;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 800;
          background: #f1f5f9;
          color: #64748b;
          border: 1px solid #cbd5e1;
          transition: all 0.2s;
        }

        .relay-toggle-btn.active {
          background: #ecfdf5;
          color: #059669;
          border-color: #34d399;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.2);
        }

        /* Details Section */
        .modal-grid-details {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 32px;
        }

        .details-section-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--navy-heading);
          margin-bottom: 12px;
          margin-top: 18px;
        }

        .details-section-title:first-child {
          margin-top: 0;
        }

        .details-p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-color);
        }

        .details-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .details-bullet-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--text-color);
        }

        .modal-meta-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-md);
          padding: 20px;
        }

        .meta-box-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--navy-heading);
          margin-bottom: 14px;
          padding-bottom: 8px;
          border-bottom: 1px solid #e2e8f0;
        }

        .meta-metric-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          font-size: 0.85rem;
          border-bottom: 1px dashed #e2e8f0;
        }

        .meta-metric-item:last-child {
          border-bottom: none;
        }

        .metric-lbl {
          color: var(--text-muted);
          font-weight: 500;
        }

        .metric-val {
          color: var(--navy-heading);
          font-weight: 600;
        }

        .text-blue {
          color: var(--primary-blue);
        }

        .text-green {
          color: #10b981;
        }

        .flex-shrink-0 {
          flex-shrink: 0;
          margin-top: 2px;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        @media (max-width: 820px) {
          .modal-grid-details {
            grid-template-columns: 1fr;
          }
          .predictor-grid {
            grid-template-columns: 1fr;
          }
          .image-studio-grid {
            grid-template-columns: 1fr;
          }
          .gauges-grid {
            grid-template-columns: 1fr;
          }
          .relays-control-bar {
            flex-direction: column;
            gap: 12px;
          }
          .modal-header-row {
            flex-direction: column;
          }
          .modal-banner-wrap {
            height: 200px;
          }
          .modal-content-body {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
