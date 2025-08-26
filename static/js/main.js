import { Chart } from "@/components/ui/chart"
// Main JavaScript file for the Flask dashboard

// Global variables
const charts = {}

// Utility functions
function formatNumber(num) {
  return new Intl.NumberFormat().format(num)
}

function formatTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString()
}

// Chart creation functions
function createBarChart(canvasId, data, options = {}) {
  const ctx = document.getElementById(canvasId)
  if (!ctx) return null

  return new Chart(ctx, {
    type: "bar",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: options.showLegend !== false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      ...options,
    },
  })
}

function createLineChart(canvasId, data, options = {}) {
  const ctx = document.getElementById(canvasId)
  if (!ctx) return null

  return new Chart(ctx, {
    type: "line",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: options.showLegend !== false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      ...options,
    },
  })
}

function createPieChart(canvasId, data, options = {}) {
  const ctx = document.getElementById(canvasId)
  if (!ctx) return null

  return new Chart(ctx, {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
      ...options,
    },
  })
}

// Tab functionality
function initializeTabs() {
  const tabTriggers = document.querySelectorAll("[data-tab-trigger]")
  const tabContents = document.querySelectorAll("[data-tab-content]")

  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetTab = trigger.getAttribute("data-tab-trigger")

      // Remove active state from all triggers and contents
      tabTriggers.forEach((t) => t.classList.remove("bg-white", "text-gray-900", "shadow-sm"))
      tabContents.forEach((c) => c.classList.add("hidden"))

      // Add active state to clicked trigger
      trigger.classList.add("bg-white", "text-gray-900", "shadow-sm")

      // Show target content
      const targetContent = document.querySelector(`[data-tab-content="${targetTab}"]`)
      if (targetContent) {
        targetContent.classList.remove("hidden")
      }
    })
  })
}

// Real-time data updates
function updateMetrics() {
  fetch("/api/metrics")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((metric, index) => {
        const metricElement = document.querySelector(`[data-metric="${index}"]`)
        if (metricElement) {
          const valueElement = metricElement.querySelector(".metric-value")
          const trendElement = metricElement.querySelector(".metric-trend")

          if (valueElement) valueElement.textContent = metric.value
          if (trendElement) trendElement.textContent = metric.trend
        }
      })
    })
    .catch((error) => console.error("Error updating metrics:", error))
}

// Initialize dashboard
function initializeDashboard() {
  // Initialize tabs
  initializeTabs()

  // Set up real-time updates (every 30 seconds)
  setInterval(updateMetrics, 30000)

  // Initialize charts if on dashboard page
  if (document.getElementById("user-journey-chart")) {
    initializeDashboardCharts()
  }
}

// Initialize charts for dashboard
function initializeDashboardCharts() {
  console.log("Dashboard charts initialized")
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeDashboard)

// Export functions for use in other scripts
window.dashboardUtils = {
  createBarChart,
  createLineChart,
  createPieChart,
  formatNumber,
  formatTime,
}

// Notification and UI utilities
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
    type === "success"
      ? "bg-green-500 text-white"
      : type === "error"
        ? "bg-red-500 text-white"
        : type === "warning"
          ? "bg-yellow-500 text-white"
          : "bg-blue-500 text-white"
  }`
  notification.textContent = message

  document.body.appendChild(notification)

  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = "0"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Loading state utilities
function showLoading(element) {
  element.classList.add("loading")
  element.style.opacity = "0.6"
  element.style.pointerEvents = "none"
}

function hideLoading(element) {
  element.classList.remove("loading")
  element.style.opacity = "1"
  element.style.pointerEvents = "auto"
}

// Form validation utilities
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validateRequired(value) {
  return value && value.trim().length > 0
}

// Export utilities
window.uiUtils = {
  showNotification,
  showLoading,
  hideLoading,
  validateEmail,
  validateRequired,
}
