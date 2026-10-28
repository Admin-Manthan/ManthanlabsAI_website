import React, { useState } from "react";
import { Button } from "../common/Button";

export function ProjectProposalForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    problem: "",
  });
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = formData.email;
    setSubmittedMessage(`Proposal received. We will reply to ${email} after we read it.`);
    setFormData({
      name: "",
      email: "",
      problem: "",
    });
  };

  return (
    <form className="f" data-form="collab" onSubmit={handleSubmit}>
      <h2 className="group-title" style={{ marginBottom: "4px" }}>
        Propose a project
      </h2>
      <label htmlFor="c-name">
        Name
        <input
          id="c-name"
          name="name"
          required
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="c-email">
        Email
        <input
          id="c-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="c-problem">
        What is the problem?
        <textarea
          id="c-problem"
          name="problem"
          required
          value={formData.problem}
          onChange={handleChange}
        />
      </label>
      <div>
        <Button type="submit">Send proposal</Button>
      </div>
      <p className="done" aria-live="polite">
        {submittedMessage}
      </p>
    </form>
  );
}
