import { useState } from "react";
import { personal } from "../data/personal";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

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
      <div className="card p-6 text-center">
        <p className="font-mono text-sm" style={{ color: "rgb(var(--color-accent))" }}>
          $ message sent successfully
        </p>
        <p className="text-xs opacity-50 mt-2">I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-mono text-xs opacity-60 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 text-sm rounded-md border bg-transparent transition-colors focus:outline-none focus:ring-1"
            style={{ borderColor: "rgb(var(--color-border))", "--tw-ring-color": "rgb(var(--color-accent))" }}
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-xs opacity-60 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 text-sm rounded-md border bg-transparent transition-colors focus:outline-none focus:ring-1"
            style={{ borderColor: "rgb(var(--color-border))", "--tw-ring-color": "rgb(var(--color-accent))" }}
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block font-mono text-xs opacity-60 mb-1">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-3 py-2 text-sm rounded-md border bg-transparent transition-colors focus:outline-none focus:ring-1"
          style={{ borderColor: "rgb(var(--color-border))", "--tw-ring-color": "rgb(var(--color-accent))" }}
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-mono text-xs opacity-60 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-3 py-2 text-sm rounded-md border bg-transparent transition-colors focus:outline-none focus:ring-1 resize-y"
          style={{ borderColor: "rgb(var(--color-border))", "--tw-ring-color": "rgb(var(--color-accent))" }}
        />
      </div>
      {status === "error" && (
        <p className="font-mono text-xs" style={{ color: "rgb(var(--color-accent))" }}>
          Something went wrong. You can also email me directly at {personal.email}.
        </p>
      )}
      <button type="submit" disabled={status === "sending"} className="btn btn-primary text-sm">
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
