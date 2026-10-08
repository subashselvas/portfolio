import re

file_path = r"c:\Users\Subash S\OneDrive\Desktop\portfolio\portfolio\src\components\Hero.jsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Chunk 1: State and useEffect
state_target = """  const [roleText, setRoleText] = useState('Software Developer');
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);"""

state_replacement = """  const [roleText, setRoleText] = useState('Software Developer');
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(0);
  const heroRef = useRef(null);

  // Carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % 5);
    }, 3500);
    return () => clearInterval(interval);
  }, []);"""

content = content.replace(state_target, state_replacement)

# Chunk 2: Markup
markup_pattern = re.compile(r"\{\/\* ================= RIGHT: Floating 3D Portfolio Cards ================= \*\/\}.*?(?=\<\/div\>\n\s*\<\/div\>\n\n\s*\<style\>)", re.DOTALL)

markup_replacement = """{/* ================= RIGHT: Floating 3D Portfolio Carousel ================= */}
        <div
          className="hero-cards-column"
          style={{
            transform: `perspective(1200px) rotateY(${ -10 + mouseOffset.x * 12}deg) rotateX(${ 5 - mouseOffset.y * 12}deg) translateZ(0)`,
          }}
        >
          <div className="carousel-3d-container">
            {[
              { id: 'home', title: 'Home', subtitle: 'Software Developer' },
              { id: 'about', title: 'About Me', subtitle: '4th Yr CS & Cyber Sec' },
              { id: 'skills', title: 'Skills', subtitle: 'React, Java, Python' },
              { id: 'portfolio', title: 'Portfolio', subtitle: '3D UI, Web, IoT' },
              { id: 'contact', title: 'Contact', subtitle: 'Available for Hire' }
            ].map((card, idx) => {
              let offset = (idx - activeCard) % 5;
              if (offset < -2) offset += 5;
              if (offset > 2) offset -= 5;
              
              const isFront = offset === 0;
              const opacity = 1 - Math.abs(offset) * 0.25;
              const scale = 1 - Math.abs(offset) * 0.1;
              const translateX = offset * 55;
              const translateZ = Math.abs(offset) * -80;
              const rotateY = offset * -15;

              return (
                <div 
                  key={card.id}
                  className={`carousel-card ${isFront ? 'active-card' : ''}`}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity: opacity,
                    zIndex: 10 - Math.abs(offset)
                  }}
                  onClick={() => setActiveCard(idx)}
                >
                  <div className="carousel-card-inner">
                     <div className="carousel-card-header">
                       <span className="card-brand">Port<strong>folio</strong></span>
                       <span className="card-badge">{card.title}</span>
                     </div>
                     <div className="carousel-card-body">
                        <div className="card-avatar-wrap">
                          <img src={subashPortrait} alt="Subash" className="card-avatar" />
                        </div>
                        <div className="card-text">
                           <h4>Subash S</h4>
                           <p>{card.subtitle}</p>
                        </div>
                     </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>"""

content = re.sub(markup_pattern, markup_replacement, content)

# Chunk 3: CSS
css_pattern = re.compile(r"\/\* ================= RIGHT 3D FLOATING CARDS ================= \*\/\n.*?(?=\/\* Responsive Breakpoints \*\/)", re.DOTALL)

css_replacement = """/* ================= RIGHT 3D FLOATING CAROUSEL ================= */
        .hero-cards-column {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out;
          will-change: transform;
        }

        .carousel-3d-container {
          position: relative;
          width: 320px;
          height: 380px;
          transform-style: preserve-3d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-card {
          position: absolute;
          width: 290px;
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          overflow: hidden;
          cursor: pointer;
          user-select: none;
        }

        .carousel-card.active-card {
          border: 1px solid rgba(191, 219, 254, 0.8);
          box-shadow: -18px 30px 50px rgba(15, 23, 42, 0.12), 0 10px 25px rgba(37, 99, 235, 0.08);
        }

        .carousel-card-inner {
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .carousel-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid #f1f5f9;
        }

        .card-brand {
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--navy-heading);
        }

        .card-brand strong {
          color: var(--primary-blue);
        }

        .card-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          background: #eff6ff;
          color: var(--primary-blue);
          border-radius: 99px;
          border: 1px solid #dbeafe;
        }

        .carousel-card-body {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .card-avatar-wrap {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          background: linear-gradient(135deg, #dbeafe, #93c5fd);
          border: 2px solid #ffffff;
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.15);
          flex-shrink: 0;
        }

        .card-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
        }

        .card-text h4 {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 4px;
        }

        .card-text p {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        /* Hover enhancement for active card */
        .carousel-card.active-card:hover {
          transform: scale(1.05) translateZ(20px) !important;
          box-shadow: -22px 35px 60px rgba(15, 23, 42, 0.16);
        }

        """

content = re.sub(css_pattern, css_replacement, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Update successful!")
