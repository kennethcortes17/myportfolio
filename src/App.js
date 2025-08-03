// Updated React app: Professional Portfolio Design for Kenneth Cortes

import React from "react";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans p-6">
     <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-blue-800">Kenneth's Portfolio</h1>
          <p className="text-lg text-gray-600">Content Moderator • Coach (Quality Analyst, Team Leader, Client Rapport) • Lead Qualification Specialist • Workforce Scheduler • Administrative Assistant</p>
          <p className="mt-2 text-sm text-gray-500">Experienced Content Moderator with 3 years in remote setup and 8 years in the BPO industry, adept at managing non-voice accounts, client relations, coaching,</p>
          <p className="mt-3 text-sm text-gray-500">quality analysis, and workforce planning, with strong skills in data management and proficiency in Microsoft Word, Excel, and Google Sheets.</p>
        </header>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">Featured Projects</h2>
          <ul className="space-y-6">

            <li className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">📅 Calendar Automation</h3>
              <p className="text-sm text-gray-600 mb-2">Simple Google Calendar that you can play around with minimal data validation.</p>
              <a href="https://docs.google.com/spreadsheets/d/1NCf-FFQNGgNLBMSgXgWa6YnYKvFLU0bypUiEJ6ptkQs/edit?usp=sharing" target="_blank" title="Calendar Automation" className="text-blue-600 underline">View Sheet</a>
            </li>

            <li className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">📝 Data Entry Form</h3>
              <p className="text-sm text-gray-600 mb-2">Designed to collect, organize, and input structured information.</p>
              <a href="https://docs.google.com/spreadsheets/d/1y137mrUz-8kmLMNUyEjFYYEJzNiFLIdHDDpGQyXstHs/edit?usp=sharing" target="_blank" title="Data Entry Form" className="text-blue-600 underline">View Sheet</a>
            </li>

            <li className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">📦 Inventory Tracker</h3>
              <p className="text-sm text-gray-600 mb-2">Monitor stock levels and track inventory with minimal setup.</p>
              <a href="https://docs.google.com/spreadsheets/d/117Yc1rnEYoF7XuSSLf2t0tofCzH6rKoVRHDUsuXTtmc/edit?usp=sharing" target="_blank" title="Inventory Tracker" className="text-blue-600 underline">View Sheet</a>
            </li>

          <li className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">📋 Attendance Tracker</h3>
              <p className="text-sm text-gray-600 mb-2">Designed to collect detailed information about real estate properties.</p>
              <a href="https://docs.google.com/spreadsheets/d/1QfwH5IgMU_KX2JVYs_UR4ab5wZglMCOvxqdHOcYQ6V8/edit?usp=sharing" target="_blank" title="Attendance Tracker" className="text-blue-600 underline">View Sheet</a>
            </li>
          
            <li className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">🏠 Property Listings</h3>
              <p className="text-sm text-gray-600 mb-2">Designed to collect detailed information about real estate properties.</p>
              <a href="https://docs.google.com/spreadsheets/d/1UWQPHa3dncuaiYtacQA0sGnKIorsajpITqguPsAU8fk/edit?usp=sharing" target="_blank" title="Property Listings" className="text-blue-600 underline">View Sheet</a>
            </li>
          </ul>

            <li className="bg-white p-5 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">🏠 ProjectProgress bar</h3>
              <p className="text-sm text-gray-600 mb-2">Designed to view progress of a specific project base on their completed task/milestone using checkbox.</p>
              <a href="https://docs.google.com/spreadsheets/d/1538r--mNu0hXfYP7XrFD6dbUTRYQiwHcyYrpKjOYv4Q/edit?usp=sharing" target="_blank" title="Project Progress bar" className="text-blue-600 underline">View Sheet</a>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <footer className="pt-10 border-t">
          <h2 className="text-xl font-semibold mb-2">📬 Contact Me</h2>
          <p className="text-sm">Email: <a href="mailto:kennethcortes17@gmail.com" className="text-blue-600 underline">kennethcortes17@gmail.com</a></p>
          <p className="text-sm">LinkedIn: <a href="https://www.linkedin.com/in/kenneth-brian-d-cortes-514078189/" target="_blank" className="text-blue-600 underline">https://www.linkedin.com/in/kenneth-brian-d-cortes-514078189/</a></p>
        </footer>

      </div>
    </main>
  );
}
