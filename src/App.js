// Updated React app: Professional Portfolio Design for Kenneth Cortes

import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans p-6">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-800">Kenneth Cortes</h1>
          <p className="text-lg text-gray-600">Google Sheets Developer • Automation Enthusiast</p>
          <p className="mt-2 text-sm text-gray-500">I build efficient, user-friendly tools using Google Sheets and Apps Script to automate workflows and boost productivity.</p>
        </header>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Featured Projects</h2>
          <ul className="space-y-6">

            <li className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">📅 Calendar Automation</h3>
              <p className="text-sm text-gray-600 mb-2">Automatically creates Google Calendar events from form inputs.</p>
              <a href="https://docs.google.com/spreadsheets/d/1/calendar" target="_blank" className="text-blue-600 underline">View Sheet</a>
            </li>

            <li className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">📝 Data Entry Form</h3>
              <p className="text-sm text-gray-600 mb-2">Clean interface for collecting structured data into Google Sheets.</p>
              <a href="https://docs.google.com/spreadsheets/d/2/dataentry" target="_blank" className="text-blue-600 underline">View Sheet</a>
            </li>

            <li className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">📦 Inventory Tracker</h3>
              <p className="text-sm text-gray-600 mb-2">Monitor stock levels and track inventory with minimal setup.</p>
              <a href="https://docs.google.com/spreadsheets/d/3/inventory" target="_blank" className="text-blue-600 underline">View Sheet</a>
            </li>

          </ul>
        </section>

        {/* Contact Section */}
        <footer className="pt-10 border-t">
          <h2 className="text-xl font-semibold mb-2">📬 Contact Me</h2>
          <p className="text-sm">Email: <a href="mailto:kennethcortes17@gmail.com" className="text-blue-600 underline">kennethcortes17@gmail.com</a></p>
          <p className="text-sm">GitHub: <a href="https://github.com/kennethcortes17" target="_blank" className="text-blue-600 underline">github.com/kennethcortes17</a></p>
        </footer>

      </div>
    </main>
  );
}
