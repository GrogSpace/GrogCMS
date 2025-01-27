function updateDebugInfo(message) {
  const debugInfo = document.getElementById("debugInfo")
  if (debugInfo) {
    debugInfo.textContent += `\n${new Date().toISOString()}: ${message}`
  }
}

export function renderHeader() {
  updateDebugInfo("renderHeader function called")
  const header = document.getElementById("header")
  if (header) {
    header.innerHTML = '<h1 class="text-2xl font-bold">Grog CMS</h1>'
    updateDebugInfo("Header content inserted")
  } else {
    updateDebugInfo("Header element not found")
  }
}

updateDebugInfo("header.js component file loaded")

