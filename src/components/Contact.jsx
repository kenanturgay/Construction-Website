import React from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange", // Form her değiştiğinde doğrulama yapılacak
  });

  const onSubmit = (data) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    emailjs
      .send(
        "service_769wd9o", // EmailJS'den aldığınız hizmet ID'si (Service ID)
        "template_6jp40xc", // EmailJS'den aldığınız şablon ID'si (Template ID)
        templateParams,
        "zS6A5p9R2voSkXfxr" // EmailJS hesabınızla ilişkilendirilen kullanıcı ID'si (User ID)
      )
      .then((response) => {
        alert("Message sent successfully!");
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert(`Failed to send message: ${error.text || error}`);
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <section id="contact">
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            gap: "25px",
          }}
        >
          {/* Name input alanı, en az 5 karakter gerektirir */}
          <input
            type="text"
            placeholder="Your Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 5,
                message: "Name must be at least 5 characters long",
              },
            })}
            style={{ height: "40px", fontSize: "20px", borderRadius: "5px" }}
          />
          {errors.name && (
            <span style={{ color: "red" }}>{errors.name.message}</span>
          )}

          {/* Email input alanı, geçerli bir email formatı gerektirir */}
          <input
            type="email"
            placeholder="Your Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Please enter a valid email address",
              },
            })}
            style={{ height: "40px", fontSize: "20px", borderRadius: "5px" }}
          />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email.message}</span>
          )}

          {/* Message textarea, en az 100 karakter gerektirir */}
          <textarea
            placeholder="Your Message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 1,
                message: "Message must be at least 100 characters long",
              },
            })}
            style={{ height: "200px", fontSize: "20px", borderRadius: "5px" }}
            maxLength={250}
          />
          {errors.message && (
            <span style={{ color: "red" }}>{errors.message.message}</span>
          )}

          {/* Submit butonu, form geçerli olmadığında devre dışı kalır */}
          <button
            type="submit"
            style={{
              height: "40px",
              borderRadius: "20px",
              backgroundColor: isValid ? "lightblue" : "gray",
              fontSize: "20px",
              cursor: isValid ? "pointer" : "not-allowed",
            }}
            disabled={!isValid} // Form geçersizse butonu devre dışı bırak
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
