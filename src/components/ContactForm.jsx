import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { personal } from "../data/personal";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/meoayaar", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (res.ok) setStatus("sent");
        else setStatus("error");
      })
      .catch(() => {
        setStatus("error");
        window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(data.get("subject") || "")}&body=${encodeURIComponent(data.get("message") || "")}`;
      });
  }

  if (status === "sent") {
    return (
      <div className="card p-8 text-center space-y-3">
        <CheckCircle size={24} className="mx-auto" style={{ color: "rgb(var(--color-accent))" }} />
        <p className="text-sm font-medium" style={{ color: "rgb(var(--color-accent))" }}>
          Message sent successfully
        </p>
        <p className="text-xs" style={{ color: "rgb(var(--color-text-muted))" }}>
          I&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium mb-1.5"
            style={{ color: "rgb(var(--color-text-muted))" }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 text-sm rounded-lg border bg-transparent transition-colors focus:outline-none focus:ring-1"
            style={{
              borderColor: "rgb(var(--color-border))",
              "--tw-ring-color": "rgb(var(--color-accent))",
              color: "rgb(var(--color-text))",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium mb-1.5"
            style={{ color: "rgb(var(--color-text-muted))" }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 text-sm rounded-lg border bg-transparent transition-colors focus:outline-none focus:ring-1"
            style={{
              borderColor: "rgb(var(--color-border))",
              "--tw-ring-color": "rgb(var(--color-accent))",
              color: "rgb(var(--color-text))",
            }}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-xs font-medium mb-1.5"
          style={{ color: "rgb(var(--color-text-muted))" }}
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-3 py-2 text-sm rounded-lg border bg-transparent transition-colors focus:outline-none focus:ring-1"
          style={{
            borderColor: "rgb(var(--color-border))",
            "--tw-ring-color": "rgb(var(--color-accent))",
            color: "rgb(var(--color-text))",
          }}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium mb-1.5"
          style={{ color: "rgb(var(--color-text-muted))" }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-3 py-2 text-sm rounded-lg border bg-transparent transition-colors focus:outline-none focus:ring-1 resize-y"
          style={{
            borderColor: "rgb(var(--color-border))",
            "--tw-ring-color": "rgb(var(--color-accent))",
            color: "rgb(var(--color-text))",
          }}
        />
      </div>
      {status === "error" && (
        <p className="text-xs" style={{ color: "rgb(var(--color-text-muted))" }}>
          Something went wrong. You can email me directly at {personal.email}.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200"
      >
        <Send size={14} />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
