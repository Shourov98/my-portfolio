import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="flex items-start justify-center px-4 py-16 md:min-h-screen md:items-center md:py-20"
    >
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-xl">
          <h2 className="mb-8 text-center text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent md:text-4xl">
            Get In Touch
          </h2>
          <form
            className="w-full space-y-5 rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm sm:p-6 md:p-8"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition placeholder:text-gray-500 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition placeholder:text-gray-500 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full resize-none rounded border border-white/10 bg-white/5 px-4 py-3 text-white transition placeholder:text-gray-500 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="relative w-full overflow-hidden rounded bg-blue-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
