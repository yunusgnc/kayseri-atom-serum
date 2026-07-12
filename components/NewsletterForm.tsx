"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: E-posta formu için izin kayıtlarını yöneten bir backend/API eklenmelidir.
    setNotice("E-posta kaydı henüz etkin değil. Bilgi için telefon veya WhatsApp bağlantısını kullanın.");
  };

  return (
    <form onSubmit={submit} noValidate>
      <label className="sr-only" htmlFor="bilgilendirme-eposta">E-posta adresi</label>
      <input
        id="bilgilendirme-eposta"
        className="input footer-input w-input"
        type="email"
        value={email}
        onChange={(event) => { setEmail(event.target.value); setNotice(""); }}
        placeholder="E-posta adresiniz"
        autoComplete="email"
        required
      />
      <button type="submit" className="common-button w-button">Bilgi İste</button>
      {notice ? <p className="footer-form-notice" role="status">{notice}</p> : null}
    </form>
  );
}
