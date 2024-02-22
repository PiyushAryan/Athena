import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden">
    <h1 className="font-bold text-4xl font-Montserrat text-violet-950 text-transparent mb-4 relative z-50">Contact Us</h1>
    <p className="font-normal text-base text-slate-500 mb-4 relative z-50"></p>
      <img src="/profile.jpg" width={100} height={100} alt="contact"  className='font-Inter  bg-transparent shadow-lg ml-14'/>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <textarea
        name="message"
        placeholder="Your message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit">Send</button>
    </form>
    </div>
  );
};

export default ContactForm;