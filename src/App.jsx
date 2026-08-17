import { useEffect, useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";
function App() {
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
 const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.currentTarget;

  const sheetURL = "https://script.google.com/macros/s/AKfycbwIIbJWB351O1EprQ6l-pufZdMsbFN4bu5e-zq4OCICzWCXzzlNEIB6uYSEcBcuF8k5/exec";

  setIsSending(true);
  setSubmitStatus("");

  Promise.all([
    emailjs.sendForm(
      "service_wbnccyb",
      "template_p0wn3hi",
      form,
      "yprZO5h-E7pIL77f-"
    ),

    fetch(sheetURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        service: form.service.value,
        message: form.message.value,
      }),
    }),
  ])
    .then(() => {
      setIsSending(false);
      setSubmitStatus("success");
      form.reset();
    })
    .catch((error) => {
      console.error("Submission Error:", error);
      setIsSending(false);
      setSubmitStatus("error");
    });
};
      const [waterVisible, setWaterVisible] = useState(false);

  useEffect(() => {
    const showWater = () => {
      setWaterVisible(true);

      setTimeout(() => {
        setWaterVisible(false);
      }, 8000);
    };

    const interval = setInterval(showWater, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="app">
            {waterVisible && (
        <div className="flowing-water" aria-hidden="true">
          <svg
            viewBox="0 0 1440 500"
            preserveAspectRatio="none"
          >
            <path
              className="water-layer water-layer-back"
              d="M0,300 C180,240 300,360 480,300 C660,240 780,360 960,300 C1140,240 1260,360 1440,300 L1440,500 L0,500 Z"
            />

            <path
              className="water-layer water-layer-middle"
              d="M0,340 C160,280 320,400 500,330 C680,260 820,400 1000,330 C1180,260 1280,390 1440,320 L1440,500 L0,500 Z"
            />

            <path
              className="water-layer water-layer-front"
              d="M0,380 C180,320 330,430 520,370 C700,310 850,430 1030,365 C1210,300 1300,420 1440,350 L1440,500 L0,500 Z"
            />
          </svg>
        </div>
      )}
        
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">SAMADHAN</div>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      {/* Hero */}
      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              <span></span>
              Digital solutions for modern businesses
            </div>

            <h1>
              You bring the
              <br />
              <span>problem.</span>
              <br />
              We build the solution.
            </h1>

            <p className="hero-description">
              We build high-quality websites and intelligent automations
              that help businesses work smarter, move faster, and grow.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-button">
                Start a Project
                <span>↗</span>
              </a>

              <a href="#work" className="secondary-button">
                See Our Work
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card">
              <div className="card-top">
                <span>01</span>
                <span>SOLUTION</span>
              </div>

              <div className="card-symbol">S</div>

              <div className="card-bottom">
                <span>Think.</span>
                <span>Build.</span>
                <span>Solve.</span>
              </div>
            </div>
          </div>
        </section>
              {/* How We Solve */}
      <section className="process-section">
        <div className="process-heading">
          <p>HOW WE SOLVE</p>

          <h2>
            From problem
            <br />
            to <span>solution.</span>
          </h2>
        </div>

        <div className="process-grid">
          <div className="process-item">
            <span className="process-number">01</span>
            <div>
              <h3>Understand</h3>
              <p>
                We first understand your business, your challenges, and what
                is actually slowing you down.
              </p>
            </div>
          </div>

          <div className="process-item">
            <span className="process-number">02</span>
            <div>
              <h3>Build</h3>
              <p>
                We design and develop a practical digital solution around
                your specific needs.
              </p>
            </div>
          </div>

          <div className="process-item">
            <span className="process-number">03</span>
            <div>
              <h3>Automate</h3>
              <p>
                We eliminate repetitive work using intelligent workflows and
                automation.
              </p>
            </div>
          </div>

          <div className="process-item">
            <span className="process-number">04</span>
            <div>
              <h3>Grow</h3>
              <p>
                The result is a system that saves time, improves operations,
                and helps your business move forward.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Work */}
<section className="work-section" id="work">
  <div className="work-header">
    <p>OUR WORK</p>

    <div>
      <h2>
        Things we've built
        <br />
        to solve <span>real problems.</span>
      </h2>

      <p className="work-description">
        A look at some of the digital systems and solutions we've
        built to make businesses work better.
      </p>
    </div>
  </div>

  <div className="project-card">
    <div className="project-info">
      <div className="project-meta">
        <span>01</span>
        <span>DEMO PROJECT</span>
      </div>

      <div>
        <h3>Gym Automation System</h3>

        <p>
          A centralized system designed to simplify membership
          management, attendance tracking, payment records, and
          automated membership reminders.
        </p>

        <div className="project-tags">
          <span>Automation</span>
          <span>n8n</span>
          <span>Google Sheets</span>
          <span>WhatsApp</span>
        </div>
      </div>

      <a href="#contact" className="project-button">
        Discuss a Similar Project
        <span>↗</span>
      </a>
    </div>

    <div className="project-visual">
      <div className="dashboard-preview">
        <div className="dashboard-top">
          <span>SAMADHAN</span>
          <span>GYM SYSTEM</span>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-stat">
            <span>ACTIVE MEMBERS</span>
            <strong>128</strong>
          </div>

          <div className="dashboard-stat">
            <span>EXPIRING SOON</span>
            <strong>07</strong>
          </div>

          <div className="dashboard-stat">
            <span>ATTENDANCE</span>
            <strong>94%</strong>
          </div>
        </div>

        <div className="dashboard-line"></div>
      </div>
    </div>
  </div>
</section>

        {/* Services preview */}
        {/* Services */}
<section className="services-section" id="services">
  <div className="services-heading">
    <div>
      <p>WHAT WE DO</p>
    </div>

    <div>
      <h2>
        Technology that
        <br />
        <span>solves problems.</span>
      </h2>

      <p className="services-intro">
        We combine development, automation, and technology to
        create practical solutions for businesses.
      </p>
    </div>
  </div>

  <div className="services-list">

    {/* Service 01 */}
    <div className="service-row">
      <div className="service-number">01</div>

      <div className="service-main">
        <h3>Web Development</h3>

        <p>
          From landing pages to complete web applications, we
          build fast, responsive, and modern digital experiences
          designed around your business.
        </p>
      </div>

      <div className="service-features">
        <span>Business Websites</span>
        <span>Landing Pages</span>
        <span>Web Applications</span>
        <span>Responsive Design</span>
      </div>

      <div className="service-arrow">↗</div>
    </div>

    {/* Service 02 */}
    <div className="service-row">
      <div className="service-number">02</div>

      <div className="service-main">
        <h3>AI & Automation</h3>

        <p>
          We connect your tools and automate repetitive processes
          so your business can spend less time on manual work.
        </p>
      </div>

      <div className="service-features">
        <span>Workflow Automation</span>
        <span>Lead Management</span>
        <span>Email & WhatsApp</span>
        <span>AI Workflows</span>
      </div>

      <div className="service-arrow">↗</div>
    </div>

    {/* Service 03 */}
    <div className="service-row">
      <div className="service-number">03</div>

      <div className="service-main">
        <h3>Custom Solutions</h3>

        <p>
          Have a problem that doesn't fit into a standard service?
          We'll design and build a solution specifically for it.
        </p>
      </div>

      <div className="service-features">
        <span>Dashboards</span>
        <span>Internal Tools</span>
        <span>API Integrations</span>
        <span>Custom Software</span>
      </div>

      <div className="service-arrow">↗</div>
    </div>

  </div>
</section>
{/* About */}
<section className="about-section" id="about">
  <div className="about-label">
    <p>ABOUT SAMADHAN</p>
  </div>

  <div className="about-content">
    <h2>
      We don't start with
      <br />
      technology.
      <br />
      <span>We start with the problem.</span>
    </h2>

    <div className="about-text">
      <p>
        SAMADHAN was built around a simple idea: technology should
        solve real problems, not create more complexity.
      </p>

      <p>
        We work with businesses to understand what's slowing them
        down, then design and build digital solutions that make
        their work simpler, faster, and more effective.
      </p>
    </div>

    <div className="founders">
      <div className="founder">
        <div className="founder-number">01</div>

        <div>
          <h3>Abhi</h3>
          <p>Co-Founder</p>
        </div>
      </div>

      <div className="founder">
        <div className="founder-number">02</div>

        <div>
          <h3>Varun</h3>
          <p>Co-Founder</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* Contact */}
<section className="contact-section" id="contact">
  <div className="contact-header">
    <p>CONTACT SAMADHAN</p>

    <div>
      <h2>
        Have a problem?
        <br />
        <span>Let's solve it.</span>
      </h2>

      <p className="contact-intro">
        Tell us what you're trying to build, improve, or automate.
        We'll get back to you and figure out the next step.
      </p>
    </div>
  </div>

  <form className="contact-form"
  onSubmit={handleSubmit}
  >

    <div className="form-row"
    >
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          required
        />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>

      <div className="form-group">
        <label htmlFor="service">What do you need?</label>

        <select id="service" name="service" defaultValue="">
          <option value="" disabled>
            Select a service
          </option>

          <option value="web-development">
            Web Development
          </option>

          <option value="ai-automation">
            AI & Automation
          </option>

          <option value="custom-solution">
            Custom Solution
          </option>

          <option value="not-sure">
            I'm not sure yet
          </option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="message">Tell us about your problem</label>

      <textarea
        id="message"
        name="message"
        rows="6"
        placeholder="What are you trying to build, automate, or improve?"
        required
      ></textarea>
    </div>

    <button
  type="submit"
  className="submit-button"
  disabled={isSending}
>
  {isSending ? "Sending..." : "Send Enquiry"}
  {!isSending && <span>↗</span>}
</button>
{submitStatus === "success" && (
  <p className="form-success">
    ✓ Enquiry sent successfully. We'll get back to you shortly.
  </p>
)}

{submitStatus === "error" && (
  <p className="form-error">
    Something went wrong. Please try again.
  </p>
)}

  </form>
</section>
      </main>
    </div>
  );
}

export default App;