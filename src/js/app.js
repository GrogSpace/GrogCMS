import { renderLayout } from "./layouts/default.js"

document.addEventListener("DOMContentLoaded", () => {
  try {
    const appElement = document.getElementById("app")
    if (appElement) {
      renderLayout(appElement)
    } else {
      throw new Error("Could not find app element")
    }
  } catch (error) {
    console.error("Error in app.js:", error)
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
    }
  }
})

console.log("app.js is running")

