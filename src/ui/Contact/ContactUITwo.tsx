"use client"

import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt,FaEnvelope } from "react-icons/fa";

const ContactUITwo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Demande d\'expertise',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-right">
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="subject">
                  Sujet
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option>Demande d&apos;expertise</option>
                  <option>Conservation du patrimoine</option>
                  <option>Expertise judiciaire</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="w-6 h-6 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-600">
                      15 Rue de la Culture
                      <br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaPhoneAlt className="w-6 h-6 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaEnvelope className="w-6 h-6 text-indigo-600 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">contact@expertculture.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 mt-8" data-aos="zoom-in">
              <div className="w-full h-full rounded-lg bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">Carte interactive</span>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-gray-100 p-6 rounded-lg" data-aos="fade-up">
              <h3 className="font-semibold mb-4">Horaires d&apos;ouverture</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Lundi - Vendredi : 9h00 - 18h00</li>
                <li>Samedi : Sur rendez-vous</li>
                <li>Dimanche : Fermé</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUITwo;
