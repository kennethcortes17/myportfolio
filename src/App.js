import React from 'react';

const projects = [
  {
    title: "Calendar Automation",
    description: "Automates Google Calendar events based on form inputs.",
    link: "https://docs.google.com/spreadsheets/d/your-calendar-link",
  },
  {
    title: "Data Entry Form",
    description: "User-friendly Google Sheet for streamlined data collection.",
    link: "https://docs.google.com/spreadsheets/d/your-data-entry-link",
  },
  {
    title: "Inventory Tracker",
    description: "Simple inventory management tool using Google Sheets.",
    link: "https://docs.google.com/spreadsheets/d/your-inventory-link",
  },
];

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Daniel Azurin</h1>
      <p>Google Sheets Developer | Automation Enthusiast</p>
      <h2 style={{ marginTop: "40px" }}>Projects</h2>
      <div style={{ display: "grid", gap: "20px" }}>
        {projects.map((project, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Sheet
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
