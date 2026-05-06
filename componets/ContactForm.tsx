'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e: any) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    });

    if (res.ok) setStatus('Message sent!');
    else setStatus('Error!');
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <input name="name" placeholder="Name" className="border p-2 w-full" />
      <input name="email" placeholder="Email" className="border p-2 w-full" />
      <textarea name="message" placeholder="Message" className="border p-2 w-full" />
      <button className="bg-black text-white px-4 py-2">Send</button>
      <p>{status}</p>
    </form>
  );
}