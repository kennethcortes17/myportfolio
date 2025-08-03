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
  <section class="bg-white py-10">
    <div class="max-w-6xl mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">📌 Featured Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="border rounded-2xl p-5 shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">📅 Calendar Automation</h3>
          <p class="text-gray-700 mb-3">Simple Google Calendar with minimal data validation.</p>
          <a href="#" class="text-blue-600 font-medium hover:underline">View Sheet</a>
        </div>
        <div class="border rounded-2xl p-5 shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">📝 Data Entry Form</h3>
          <p class="text-gray-700 mb-3">Collect, organize, and input structured information.</p>
          <a href="#" class="text-blue-600 font-medium hover:underline">View Sheet</a>
        </div>
        <div class="border rounded-2xl p-5 shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">📦 Inventory Tracker</h3>
          <p class="text-gray-700 mb-3">Track stock levels with minimal setup.</p>
          <a href="#" class="text-blue-600 font-medium hover:underline">View Sheet</a>
        </div>
        <div class="border rounded-2xl p-5 shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">📋 Attendance Tracker</h3>
          <p class="text-gray-700 mb-3">Track attendance with structured input fields.</p>
          <a href="#" class="text-blue-600 font-medium hover:underline">View Sheet</a>
        </div>
        <div class="border rounded-2xl p-5 shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">🏡 Property Listings</h3>
          <p class="text-gray-700 mb-3">Detailed information management for real estate.</p>
          <a href="#" class="text-blue-600 font-medium hover:underline">View Sheet</a>
        </div>
        <div class="border rounded-2xl p-5 shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">📊 Project Progress Bar</h3>
          <p class="text-gray-700 mb-3">Visualize project progress using checkboxes.</p>
          <a href="#" class="text-blue-600 font-medium hover:underline">View Sheet</a>
        </div>
        <div class="border rounded-2xl p-5 shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">🔎 Dynamic Searchbox</h3>
          <p class="text-gray-700 mb-3">Real-time filtering of data from a search input.</p>
          <a href="#" class="text-blue-600 font-medium hover:underline">View Sheet</a>
        </div>
        <div class="border rounded-2xl p-5 shadow hover:shadow-lg transition">
          <h3 class="text-xl font-semibold mb-2">🔳 Barcode Generator</h3>
          <p class="text-gray-700 mb-3">Create your own unique barcode using formulas.</p>
          <a href="#" class="text-blue-600 font-medium hover:underline">View Sheet</a>
        </div>
      </div>
    </div>
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
