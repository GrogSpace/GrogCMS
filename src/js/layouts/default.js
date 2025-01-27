import { renderHeader } from "../components/header.js"
import { renderNavbar } from "../components/navbar.js"
import { renderSidebar } from "../components/sidebar.js"
import { renderFooter } from "../components/footer.js"

export function renderLayout(appElement) {
  console.log("renderLayout function called")
  appElement.innerHTML = `
        <header id="header" class="bg-gray-100 p-4"></header>
        <nav id="navbar" class="bg-gray-200 p-4"></nav>
        <div class="container mx-auto px-4 flex">
            <aside id="sidebar" class="w-1/4 bg-gray-50 p-4"></aside>
            <main id="content" class="w-3/4 p-8">
                <h1 class="text-2xl font-bold mb-4">Welcome to Grog CMS</h1>
                <p class="mb-4">This is the default layout. Customize it as needed.</p>
            </main>
        </div>
        <footer id="footer" class="bg-gray-100 p-4"></footer>
    `

  renderHeader()
  renderNavbar()
  renderSidebar()
  renderFooter()
}

