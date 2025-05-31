import React, { useEffect } from 'react';
import Navbar from '../../Components/NavBar/NavBar';
import Chart from 'chart.js/auto';
import './AdminDashboard.css';

const AdminDashBoard = () => {
  useEffect(() => {
    let matchChartInstance;
    let userChartInstance;

    const ctx1 = document.getElementById('matchChart');
    const ctx2 = document.getElementById('userChart');

    if (ctx1) {
      if (Chart.getChart(ctx1)) Chart.getChart(ctx1).destroy();

      matchChartInstance = new Chart(ctx1, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            label: 'Matches This Year',
            data: [50, 75, 100, 80, 120],
            backgroundColor: '#ff6384',
          }],
        },
        options: {
          animation: { duration: 1500 },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }

    if (ctx2) {
      if (Chart.getChart(ctx2)) Chart.getChart(ctx2).destroy();

      userChartInstance = new Chart(ctx2, {
        type: 'pie',
        data: {
          labels: ['Grooms', 'Brides'],
          datasets: [{
            data: [60, 40],
            backgroundColor: ['#36a2eb', '#ffce56'],
          }],
        },
        options: {
          animation: { duration: 1500 },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }

    return () => {
      if (matchChartInstance) matchChartInstance.destroy();
      if (userChartInstance) userChartInstance.destroy();
    };
  }, []);

  return (
    <div className="admin-dashboard">
      <Navbar role="admin" />
      <h1 className="title">Admin Dashboard - Marriage Portal</h1>

      <div className="dashboard-grid">
        <div className="card center">
          <h2>Monthly Matches Overview</h2>
          <canvas id="matchChart"></canvas>
        </div>

        <div className="card center">
          <h2>User Gender Distribution</h2>
          <canvas id="userChart"></canvas>
        </div>

        <div className="card center info">
          <h2>About the Portal</h2>
          <p>
            Welcome to the admin dashboard. This marriage portal connects brides and grooms worldwide.
            Admins can manage users, monitor matches, and ensure user safety with insightful data tools.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default AdminDashBoard;
