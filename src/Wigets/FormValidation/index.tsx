"use client";
import React, { useEffect, useState } from "react";
import { z, ZodType } from "zod"; // Add new import

const FormValidation = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState({});
  const handleChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    setError(handleError(input));
  };
  const finishSubmit = () => {
    console.log(input);
  };
  useEffect(() => {
    if (submitting && Object.keys(error).length === 0) {
      finishSubmit();
    }
  }, [submitting]);

  const handleError = (input: string) => {
    let errors = {};
    if (input.email < 12) {
      errors.email = "email less than 12 charactares";
    }
    if (input.password < 8) {
      errors.password = "email less than 12 charactares";
    }
    return errors;
  };

  return (
    <div className="App">
      <h1>{error.email}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        ></input>

        <button type="submit">Submit Information</button>
      </form>
    </div>
  );
};

export default FormValidation;
