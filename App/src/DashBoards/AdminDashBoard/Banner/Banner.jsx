import React from 'react';
import './Banner.css';
import {
  PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend
} from 'recharts';

const Banner = () => {
  // Sample Pie Data: Match Success Rate
  const pieData = [
    { name: 'ShaadiMitra Matches', value: 65 },
    { name: 'Others', value: 35 },
  ];

  // Sample Bar Data: Users by Age Group
  const barData = [
    { ageGroup: '18-25', users: 120 },
    { ageGroup: '26-30', users: 200 },
    { ageGroup: '31-35', users: 150 },
    { ageGroup: '36-40', users: 80 },
  ];

  const COLORS = ['#0088FE', '#FF8042'];

  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Welcome to ShaadiMitra</h1>
        <p>Your Trusted Partner in Finding the Perfect Match</p>
        <p>
          We provide reliable matchmaking services, detailed astrology compatibility, 
          secure communication, and complete privacy to help you find your life partner with ease.
        </p>

        <div className="services-graphics">
          {/* Cards */}
          <div className="service-card">
            <img src="https://cdn-icons-png.flaticon.com/512/4202/4202844.png" alt="Matchmaking" />
            <h3>Matchmaking</h3>
            <p>Find the most compatible profiles from our trusted database.</p>
          </div>
          <div className="service-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2637/2637133.png" alt="Astrology Match" />
            <h3>Horoscope Match</h3>
            <p>Advanced kundli matching to ensure a harmonious life.</p>
          </div>
          <div className="service-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2889/2889676.png" alt="Security" />
            <h3>Privacy & Security</h3>
            <p>We keep your data protected and your identity confidential.</p>
          </div>
          <div className="service-card">
            <img src="https://cdn-icons-png.flaticon.com/512/4712/4712140.png" alt="Support" />
            <h3>24x7 Support</h3>
            <p>Our team is always available to help you with any queries.</p>
          </div>
        </div>

        {/* Graphs Section */}
        <div className="graph-section">
          <h2>Our Matchmaking Success</h2>
          <div className="charts-container">
            {/* Pie Chart */}
            <div className="chart">
              <h4>Platform Match Rate</h4>
              <PieChart width={300} height={250}>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>

            {/* Bar Chart */}
            <div className="chart">
              <h4>Users by Age Group</h4>
              <BarChart width={350} height={250} data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="ageGroup" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#82ca9d" />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
