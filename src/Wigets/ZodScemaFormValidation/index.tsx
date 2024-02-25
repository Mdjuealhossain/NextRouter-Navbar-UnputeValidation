"use client";
import React from "react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const UserSchema: any = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(3, { message: "password is to short" })
    .max(20, { message: "password is to long" }),
});
// .refine((data) => data.password === data.confirmPassword, {
//   message: "Passwords do not match",
//   path: ["confirmPassword"], // path of error
// });

const ZodScemaFormValidation = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(UserSchema) });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input className="input" placeholder="email" {...register("email")} />
      <input
        className="input"
        placeholder="password"
        {...register("password")}
      />
      {errors.password && <span>{errors.password.message}</span>}
      <button type="submit">submit!</button>
    </form>
  );
};

export default ZodScemaFormValidation;
