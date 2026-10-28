import React, { useState } from "react";
import { productOptions } from "../../data/productsData";
import { Button } from "../common/Button";

export function DemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: productOptions[0] || "Reelcut",
    use: "",
  });
  const [submittedMessage, setSubmittedMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = formData.email;
    setSubmittedMessage(`Request received. We will reply to ${email} with a time.`);
    setFormData({
      name: "",
      email: "",
      product: productOptions[0] || "Reelcut",
      use: "",
    });
  };

  return (
    <form className="f" data-form="demo" onSubmit={handleSubmit}>
      <label htmlFor="d-name">
        Name
        <input
          id="d-name"
          name="name"
          required
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="d-email">
        Work email
        <input
          id="d-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="d-product">
        Product
        <select
          id="d-product"
          name="product"
          value={formData.product}
          onChange={handleChange}
        >
          {productOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="d-use">
        What would you use it for?
        <textarea
          id="d-use"
          name="use"
          value={formData.use}
          onChange={handleChange}
        />
      </label>
      <div>
        <Button type="submit">Request a demo</Button>
      </div>
      <p className="done" aria-live="polite">
        {submittedMessage}
      </p>
    </form>
  );
}
