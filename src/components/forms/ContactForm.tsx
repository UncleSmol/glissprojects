"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./ContactForm.module.scss";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a contact number"),
  company: z.string().optional(),
  service: z.string().min(1, "Select a service area"),
  location: z.string().min(2, "Enter the site or delivery location"),
  message: z.string().min(10, "Tell us what you need"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      company: "",
      name: "",
      email: "",
      location: "",
      message: "",
      phone: "",
      service: "",
    },
  });

  function onSubmit(values: ContactFormValues) {
    console.info("Contact placeholder submitted", values);
  }

  return (
    <form className={styles["contact-form"]} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles["contact-form__field"]}>
        <label className={styles["contact-form__label"]} htmlFor="name">
          Name
        </label>
        <input className={styles["contact-form__input"]} id="name" {...register("name")} />
        {errors.name ? (
          <p className={styles["contact-form__error"]}>{errors.name.message}</p>
        ) : null}
      </div>
      <div className={styles["contact-form__field"]}>
        <label className={styles["contact-form__label"]} htmlFor="company">
          Company
        </label>
        <input className={styles["contact-form__input"]} id="company" {...register("company")} />
      </div>
      <div className={styles["contact-form__field"]}>
        <label className={styles["contact-form__label"]} htmlFor="email">
          Email
        </label>
        <input
          className={styles["contact-form__input"]}
          id="email"
          type="email"
          {...register("email")}
        />
        {errors.email ? (
          <p className={styles["contact-form__error"]}>{errors.email.message}</p>
        ) : null}
      </div>
      <div className={styles["contact-form__field"]}>
        <label className={styles["contact-form__label"]} htmlFor="phone">
          Phone
        </label>
        <input
          className={styles["contact-form__input"]}
          id="phone"
          type="tel"
          {...register("phone")}
        />
        {errors.phone ? (
          <p className={styles["contact-form__error"]}>{errors.phone.message}</p>
        ) : null}
      </div>
      <div className={styles["contact-form__field"]}>
        <label className={styles["contact-form__label"]} htmlFor="service">
          Service area
        </label>
        <select className={styles["contact-form__input"]} id="service" {...register("service")}>
          <option value="">Select a service</option>
          <option value="mining-services">Mining services</option>
          <option value="industrial-supplies">Mine and industrial supplies</option>
          <option value="maintenance">Maintenance and repairs</option>
          <option value="civil-construction">Civil and construction</option>
          <option value="project-solutions">Project solutions</option>
        </select>
        {errors.service ? (
          <p className={styles["contact-form__error"]}>{errors.service.message}</p>
        ) : null}
      </div>
      <div className={styles["contact-form__field"]}>
        <label className={styles["contact-form__label"]} htmlFor="location">
          Site or delivery location
        </label>
        <input className={styles["contact-form__input"]} id="location" {...register("location")} />
        {errors.location ? (
          <p className={styles["contact-form__error"]}>{errors.location.message}</p>
        ) : null}
      </div>
      <div className={styles["contact-form__field"]}>
        <label className={styles["contact-form__label"]} htmlFor="message">
          Requirement
        </label>
        <textarea
          className={styles["contact-form__textarea"]}
          id="message"
          {...register("message")}
        />
        {errors.message ? (
          <p className={styles["contact-form__error"]}>{errors.message.message}</p>
        ) : null}
      </div>
      <button className={styles["contact-form__button"]} type="submit">
        <span>Send request</span>
        <Send aria-hidden="true" size={18} />
      </button>
    </form>
  );
}
