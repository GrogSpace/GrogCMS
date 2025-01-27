import { renderHeader } from "../components/header.js"
import { renderFooter } from "../components/footer.js"

//This is a sample webpage
function renderPage() {
  const content = document.getElementById("content")
  content.innerHTML = `<h1>Welcome to My Webpage</h1>
                       <p>This is a sample paragraph.</p>`
  renderHeader()
  renderFooter()
}

renderPage()

