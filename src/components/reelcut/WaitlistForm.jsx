import React, { useState } from "react";
import { Button } from "../common/Button";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(
      `You are on the list. We will write to ${email} when your spot opens.`
    );
    setEmail("");
  };

  return (
    <section className="section" id="waitlist">
      <div className="wrap">
        <div className="waitlist">
          <h2>Be first in.</h2>
          <p>
            Early access opens in small batches. Leave your email and we will
            write when your spot is ready.
          </p>
          <form data-form="waitlist" onSubmit={handleSubmit}>
            <label
              htmlFor="w-email"
              style={{ position: "absolute", left: "-9999px" }}
            >
              Email
            </label>
            <input
              id="w-email"
              name="email"
              type="email"
              placeholder="you@studio.com"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit">Join the waitlist</Button>
          </form>
          <p className="done" aria-live="polite">
            {submittedMessage}
          </p>
        </div>
      </div>
    </section>
  );
}
