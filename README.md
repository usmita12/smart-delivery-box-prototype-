Smart Delivery Box Prototype (Simulated IoT System)



A simulated smart-home delivery box prototype designed using a Node.js backend and a React dashboard to demonstrate how automated package detection, temperature monitoring, and door state control can work in a real-world smart delivery system.



This project mirrors the concept behind smart home delivery hardware — similar to DropNest — but uses software-simulated sensors (no physical hardware).



&nbsp;What This System Does

Backend (Node.js API)



Simulates three core IoT sensor behaviours:



1. Package Distance Sensor — detects if a package is present



2\. Temperature Sensor — simulates internal box temperature



3\. Door State — automatically opens/closes based on distance



Distance < 15cm → OPEN



Distance ≥ 15cm → CLOSED



Provides data at:



http://localhost:4000/api/box-status



Frontend (React Dashboard)



Displays live delivery box status:



Temperature (°C)



Package Distance (cm)



Door State (OPEN/CLOSED)



Auto-refresh every 5 seconds



Tech Stack-

Backend



Node.js



Express



CORS



Frontend



React (create-react-app)



JavaScript



Custom UI (no libraries)



Project Structure

smart-delivery-box-prototype

│

├── backend

│   ├── index.js          # Node.js API simulating sensor data

│   ├── package.json

│

├── dashboard

│   ├── src/App.js        # React UI for live monitoring

│   ├── public

│   ├── package.json

│

└── README.md             



How to Run the Project Locally

1\. Run Backend

cd backend

npm install

node index.js





Backend will run at:



http://localhost:4000/api/box-status



2\. Run Frontend

cd dashboard

npm install

npm start





Dashboard opens automatically at:



http://localhost:3000





If backend is off → demo mode will activate.





Features



\- Simulated IoT device logic  

\- Live API-based data updates  

\- Automatic fallback demo mode  

\- Clean, dark-themed UI  

\- Realistic delivery-box sensor behaviour  

\- Fully working frontend + backend 



Why I Built This



This project was created to practice real-world smart home automation concepts and to demonstrate my ability to design sensor-driven systems, build monitoring dashboards, and develop clean REST APIs — skills relevant for IoT, automation, and smart delivery solutions.

