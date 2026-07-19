/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { MdOutlineContactMail } from 'react-icons/md';
import PhoneInput, { isValidPhoneNumber, parsePhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './phone-input.css';
import profile from '../images/f4.jpg';

// ============================================================
// CONFIGURATION
// URL du webhook Make -> variable REACT_APP_MAKE_WEBHOOK_URL
// ============================================================
const MAKE_WEBHOOK_URL = process.env.REACT_APP_MAKE_WEBHOOK_URL;
const WEB3FORMS_KEY = '84097c34-6a5c-4a10-bd56-84b5e4833570';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

// Pays par defaut devine depuis la langue du navigateur (ex. "fr-FR" -> FR)
const guessCountry = () => {
  try {
    const region = ((typeof navigator !== 'undefined' && navigator.language) || '').split('-')[1];
    return region && /^[A-Za-z]{2}$/.test(region) ? region.toUpperCase() : 'FR';
  } catch (err) {
    return 'FR';
  }
};

const validate = (v) => {
  const e = {};

  if (!v.nom) e.nom = 'Name is required.';
  else if (v.nom.length < 2) e.nom = 'Name is too short.';
  else if (v.nom.length > 80) e.nom = 'Name is too long.';

  if (!v.email) e.email = 'Email is required.';
  else if (!EMAIL_RE.test(v.email)) e.email = 'Please enter a valid email address.';

  // Validation reelle par pays via libphonenumber
  if (!v.phone) e.telephone = 'Phone number is required.';
  else if (!isValidPhoneNumber(v.phone)) e.telephone = 'This number is not valid for the selected country.';

  if (!v.message) e.message = 'Message is required.';
  else if (v.message.length < 10) e.message = 'Please describe your request (at least 10 characters).';
  else if (v.message.length > 2000) e.message = 'Message is too long (2000 characters max).';

  if (!v.consentement) e.consentement = 'You must accept to be contacted.';

  return e;
};

const baseField = 'w-full p-3 rounded-lg bg-white text-black placeholder-gray-400 border border-transparent focus:border-[#52eeca] focus:outline-none focus:ring-2 focus:ring-[#52eeca]/40 transition';
const errField = 'border-red-400 focus:border-red-400 focus:ring-red-400/40';

const Contact = () => {
  const [result, setResult] = useState('');
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [phone, setPhone] = useState();
  const [defaultCountry] = useState(guessCountry);

  const cls = (hasError) => `${baseField} ${hasError ? errField : ''}`;

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const raw = new FormData(form);

    const values = {
      nom: (raw.get('name') || '').trim(),
      email: (raw.get('email') || '').trim().toLowerCase(),
      phone,
      message: (raw.get('message') || '').trim(),
      consentement: !!(form.consentement && form.consentement.checked),
    };

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setResult('Please correct the highlighted fields.');
      return;
    }

    // phone est deja au format international E.164 (ex. +33612345678)
    const parsed = parsePhoneNumber(phone);
    const pays = (parsed && parsed.country) || '';

    setSending(true);
    setResult('Sending....');

    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', 'Nouveau message depuis ton portfolio');
    formData.append('botcheck', raw.get('botcheck') || '');
    formData.append('name', values.nom);
    formData.append('email', values.email);
    formData.append('telephone', phone);
    formData.append('country', pays);
    formData.append('message', values.message);

    const lead = new URLSearchParams({
      nom: values.nom,
      email: values.email,
      telephone: phone,
      pays,
      canal: 'Site web',
      message: values.message,
      consentement: values.consentement ? 'true' : 'false',
    });

    if (!MAKE_WEBHOOK_URL) {
      console.log('REACT_APP_MAKE_WEBHOOK_URL manquante : le lead ne partira pas vers Make.');
    }

    const [web3, make] = await Promise.allSettled([
      fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData }),
      fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: lead,
      }),
    ]);

    if (make.status === 'rejected') console.log('Erreur webhook Make :', make.reason);

    let web3Ok = false;
    if (web3.status === 'fulfilled') {
      try {
        const data = await web3.value.json();
        web3Ok = data.success;
        if (!web3Ok) console.log('Erreur Web3Forms :', data);
      } catch (err) {
        console.log('Reponse Web3Forms illisible :', err);
      }
    }

    setSending(false);

    if (web3Ok || make.status === 'fulfilled') {
      setResult('Message sent successfully');
      setErrors({});
      form.reset();
      setPhone(undefined);
    } else {
      setResult('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="w-full py-12" id="contact">
      <div className="container mx-auto px-12 bg-[#112240] pt-9 rounded-xl">
        <div className="flex justify-center items-center gap-2 border px-4 py-2 rounded-full w-[150px]">
          <MdOutlineContactMail className="text-[#52eeca]" />
          <span>Contact</span>
        </div>

        <div className="flex flex-col gap-4 py-7">
          <div className="flex flex-col justify-center items-center gap-2 px-8 py-8">
            <img src={profile} alt="profile" className="w-[150px] h-[150px] outline outline-2 outline-[#52eeca] rounded-full" />
            <h4 className="text-2xl xl:text-3xl md:w-[50%] text-center">Let’s talk about a project, collaboration or an idea you may have</h4>
          </div>

          <form className="py-8 flex flex-col gap-5 md:w-[60%] mx-auto xl:px-8" onSubmit={onSubmit} noValidate>
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} />

            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <label htmlFor="name" className="block mb-2 text-sm text-gray-300">Name *</label>
                <input id="name" className={cls(errors.nom)} type="text" name="name" placeholder="Your name" maxLength={80} />
                {errors.nom && <span className="block mt-1 text-sm text-red-400">{errors.nom}</span>}
              </div>

              <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm text-gray-300">Email *</label>
                <input id="email" className={cls(errors.email)} type="email" name="email" placeholder="you@company.com" />
                {errors.email && <span className="block mt-1 text-sm text-red-400">{errors.email}</span>}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 text-sm text-gray-300">Phone *</label>
              <div className={`phone-field ${errors.telephone ? 'phone-field--error' : ''}`}>
                <PhoneInput
                  id="phone"
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry={defaultCountry}
                  value={phone}
                  onChange={setPhone}
                  placeholder="Enter phone number"
                />
              </div>
              {errors.telephone && <span className="block mt-1 text-sm text-red-400">{errors.telephone}</span>}
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm text-gray-300">Message *</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project, your budget and your timeline."
                className={cls(errors.message)}
                rows={5}
                maxLength={2000}
              />
              {errors.message && <span className="block mt-1 text-sm text-red-400">{errors.message}</span>}
            </div>

            <div>
              <label htmlFor="consentement" className="flex items-start gap-3 text-sm text-gray-300 cursor-pointer">
                <input id="consentement" type="checkbox" name="consentement" className="mt-1 accent-[#52eeca] w-4 h-4" />
                <span>I agree to be contacted about my request. *</span>
              </label>
              {errors.consentement && <span className="block mt-1 text-sm text-red-400">{errors.consentement}</span>}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="px-6 py-3 font-medium text-[#000300] bg-[#52eeca] rounded-lg w-full md:w-auto md:self-start hover:brightness-110 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition"
            >
              {sending ? 'Sending...' : 'Send'}
            </button>

            {result && <span className="text-[#52eeca]">{result}</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
