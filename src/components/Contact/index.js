import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import SendIcon from "@mui/icons-material/Send";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function Contact() {
  const [mailSent, setMailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const { username, email, message } = e.target.elements;
    const serviceID = "service_o5p03wh";
    const templateID = "template_sbkicq7";
    const publicKey = "mWRmgxXmF0YMIkh2o";

    const templateParams = {
      username: username.value,
      email: email.value,
      message: message.value,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (response) => {
          setMailSent(true);
          setLoading(false);
          toast.success("Message sent successfully! I'll get back to you soon.", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (err) => {
          setLoading(false);
          toast.error("Something went wrong. Please try again.", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: "Email",
      value: "gunjan.arora@example.com",
      link: "mailto:gunjan.arora@example.com",
    },
    {
      icon: <LocationOnIcon />,
      label: "Location",
      value: "Delhi, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <GitHubIcon />,
      label: "GitHub",
      link: "https://github.com/gun03-hub",
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/gunjan-arora-4248462a9/",
    },
  ];

  return (
    <section id="contact" className="py-12 xs:py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 xs:px-6">
        <div className="text-center mb-10 xs:mb-12 md:mb-16" data-aos="fade-up">
          <h2 className="section-heading mb-3 xs:mb-4">Get In Touch</h2>
          <p className="section-subheading mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-12 items-start">
          <div data-aos="fade-right">
            <div className="glass-card p-5 xs:p-6 md:p-8">
              <h3 className="text-xl xs:text-2xl font-display font-bold text-white mb-4 xs:mb-6">
                Send Me a Message
              </h3>

              {!mailSent ? (
                <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-6">
                  <div>
                    <label className="block text-dark-300 text-xs xs:text-sm font-medium mb-1.5 xs:mb-2">
                      Your Name
                    </label>
                    <div className="relative">
                      <PersonIcon className="absolute left-3 xs:left-4 top-1/2 -translate-y-1/2 text-dark-500 text-lg xs:text-xl" />
                      <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full pl-10 xs:pl-12 pr-4 py-2.5 xs:py-3 bg-dark-800 border border-dark-600 rounded-lg xs:rounded-xl text-white text-sm xs:text-base placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-dark-300 text-xs xs:text-sm font-medium mb-1.5 xs:mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <EmailIcon className="absolute left-3 xs:left-4 top-1/2 -translate-y-1/2 text-dark-500 text-lg xs:text-xl" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full pl-10 xs:pl-12 pr-4 py-2.5 xs:py-3 bg-dark-800 border border-dark-600 rounded-lg xs:rounded-xl text-white text-sm xs:text-base placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-dark-300 text-xs xs:text-sm font-medium mb-1.5 xs:mb-2">
                      Your Message
                    </label>
                    <div className="relative">
                      <MessageIcon className="absolute left-3 xs:left-4 top-3 xs:top-4 text-dark-500 text-lg xs:text-xl" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        minLength={10}
                        rows="4"
                        placeholder="Tell me about your project..."
                        className="w-full pl-10 xs:pl-12 pr-4 py-2.5 xs:py-3 bg-dark-800 border border-dark-600 rounded-lg xs:rounded-xl text-white text-sm xs:text-base placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 xs:h-5 xs:w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <SendIcon className="text-lg xs:text-xl" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 xs:py-12">
                  <div className="w-16 h-16 xs:w-20 xs:h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4 xs:mb-6">
                    <CheckCircleIcon className="text-4xl xs:text-5xl text-green-500" />
                  </div>
                  <h4 className="text-lg xs:text-xl font-semibold text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-dark-400 text-sm xs:text-base">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4 xs:space-y-6 lg:space-y-8" data-aos="fade-left">
            <div className="glass-card p-5 xs:p-6 md:p-8">
              <h3 className="text-xl xs:text-2xl font-display font-bold text-white mb-4 xs:mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-3 xs:space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 xs:gap-4">
                    <div className="w-10 h-10 xs:w-12 xs:h-12 rounded-lg xs:rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400 flex-shrink-0">
                      <span className="text-lg xs:text-xl">{info.icon}</span>
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs xs:text-sm text-dark-400">{info.label}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm xs:text-base text-white hover:text-primary-400 transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-sm xs:text-base text-white">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-5 xs:p-6 md:p-8">
              <h3 className="text-lg xs:text-xl font-display font-bold text-white mb-4 xs:mb-6">
                Connect With Me
              </h3>
              
              <div className="flex gap-3 xs:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 xs:w-12 xs:h-12 rounded-lg xs:rounded-xl bg-dark-700 border border-dark-600 flex items-center justify-center text-dark-300 hover:bg-primary-500 hover:border-primary-500 hover:text-white transition-all touch-manipulation active:scale-95"
                    title={social.label}
                    aria-label={social.label}
                  >
                    <span className="text-xl xs:text-2xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-5 xs:p-6 md:p-8 bg-gradient-to-br from-primary-600/20 to-accent-purple/20">
              <h3 className="text-lg xs:text-xl font-display font-bold text-white mb-3 xs:mb-4">
                Let's Build Something Amazing
              </h3>
              <p className="text-dark-300 text-sm xs:text-base mb-4 xs:mb-6">
                I'm currently available for freelance work and exciting opportunities. 
                If you have a project that needs expertise, let's discuss it!
              </p>
              <a
                href={require("../../assets/files/Resume.pdf")}
                download="Gunjan_Arora_Resume"
                className="btn-outline inline-flex items-center gap-2"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 xs:mt-12 md:mt-16 pt-6 xs:pt-8 border-t border-dark-800 text-center" data-aos="fade-up">
          <p className="text-dark-400 text-xs xs:text-sm">
            &copy; {new Date().getFullYear()} Gunjan Arora. All rights reserved.
          </p>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
}
