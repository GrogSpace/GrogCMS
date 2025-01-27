import { renderLayout } from "./layouts/default.js"

function updateDebugInfo(message) {
  const debugInfo = document.getElementById("debugInfo")
  if (debugInfo) {
    debugInfo.textContent += `\n${new Date().toISOString()}: ${message}`
  } else {
    console.warn("Debug element not found")
  }
}

function handleError(error) {
  console.error("Error in app.js:", error)
  updateDebugInfo(`Error occurred: ${error.message}`)
  const errorElement = document.getElementById("error")
  if (errorElement) {
    errorElement.textContent = "Error in app.js: " + error.message
    errorElement.classList.add(
      "bg-red-100",
      "border",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "relative",
    )
  } else {
    console.warn("Error element not found")
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateDebugInfo("DOMContentLoaded event fired")
  try {
    const appElement = document.getElementById("app")
    if (appElement) {
      updateDebugInfo("App element found, calling renderLayout")
      renderLayout(appElement)
    } else {
      throw new Error("Could not find app element")
    }
  } catch (error) {
    handleError(error)
  }
})

updateDebugInfo("app.js executed")

