// --- Dummy Data Setup ---
const ctx = document.getElementById("energyChart").getContext("2d");
const labels = ["6 AM", "8 AM", "10 AM", "12 PM", "2 PM", "4 PM"];
let dataPoints = [0.8, 1.0, 1.2, 0.9, 1.4, 1.1];

const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "Energy (kWh)",
        data: dataPoints,
        borderColor: "#1e3a8a",
        backgroundColor: "rgba(30, 58, 138, 0.2)",
        borderWidth: 2,
        tension: 0.3,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// --- Live Dummy Update Simulation ---
function updateDashboard() {
  // Random power usage (simulate sensor)
  const currentPower = (1 + Math.random() * 0.8).toFixed(2);
  const todayUsage = (8 + Math.random() * 2).toFixed(1);
  const weeklyAvg = (50 + Math.random() * 5).toFixed(1);

  document.getElementById("currentPower").textContent = currentPower + " kW";
  document.getElementById("todayUsage").textContent = todayUsage + " kWh";
  document.getElementById("weeklyAvg").textContent = weeklyAvg + " kWh";

  // Appliance random fluctuation
  document.getElementById("acPower").textContent = (0.7 + Math.random() * 0.3).toFixed(2);
  document.getElementById("fridgePower").textContent = (0.1 + Math.random() * 0.1).toFixed(2);
  document.getElementById("washPower").textContent = (Math.random() < 0.3 ? 0.5 : 0.0).toFixed(2);
  document.getElementById("lightPower").textContent = (0.2 + Math.random() * 0.1).toFixed(2);

  // Update chart data
  dataPoints.push(parseFloat(currentPower));
  dataPoints.shift();
  chart.update();

  // Update time
  const now = new Date();
  document.getElementById("updateTime").textContent = now.toLocaleTimeString();
}

// Update every 5 seconds
setInterval(updateDashboard, 5000);
updateDashboard();
