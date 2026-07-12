"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  date: string;
  message: string;
};

const initialValues: FormValues = { name: "", email: "", phone: "", date: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [notice, setNotice] = useState("");

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setNotice("");
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Form verilerini güvenli biçimde iletecek bir backend/API bağlantısı eklenmelidir.
    setNotice("Bu form henüz çevrim içi gönderim yapmıyor. Lütfen telefon veya WhatsApp ile iletişime geçin.");
  };

  return (
    <form id="randevu-formu" onSubmit={submit} noValidate>
      <div className="w-layout-grid grid">
        <label className="sr-only" htmlFor="ad-soyad">Ad soyad</label>
        <input id="ad-soyad" className="input w-input" value={values.name} onChange={(e) => update("name", e.target.value)} placeholder="Ad Soyad" autoComplete="name" required />
        <label className="sr-only" htmlFor="eposta">E-posta adresi</label>
        <input id="eposta" className="input w-input" type="email" value={values.email} onChange={(e) => update("email", e.target.value)} placeholder="E-posta Adresi" autoComplete="email" required />
        <label className="sr-only" htmlFor="telefon">Telefon numarası</label>
        <input id="telefon" className="input w-input" type="tel" value={values.phone} onChange={(e) => update("phone", e.target.value)} placeholder="Telefon Numarası" autoComplete="tel" required />
        <label className="sr-only" htmlFor="tarih">Tercih edilen tarih</label>
        <input id="tarih" className="input date-picker" type="date" value={values.date} onChange={(e) => update("date", e.target.value)} />
      </div>
      <label className="sr-only" htmlFor="mesaj">Mesajınız</label>
      <textarea id="mesaj" className="input textarea w-input" value={values.message} onChange={(e) => update("message", e.target.value)} placeholder="Mesajınız" maxLength={2000} />
      <button type="submit" className="common-button button-color w-button">Bilgi ve Randevu İste</button>
      {notice ? <p className="form-notice" role="status">{notice}</p> : null}
    </form>
  );
}
