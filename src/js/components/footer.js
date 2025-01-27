import { config } from "../config.js"

export function renderFooter() {
  const footer = document.getElementById("footer")
  if (footer) {
    footer.innerHTML = `
      <div class="container mx-auto text-center">
        <p>${config.footer.copyright}</p>
        <p class="mt-2">
          ${config.footer.links.map((link) => `<a href="${link.url}" class="hover:text-gray-300">${link.text}</a>`).join(" | ")}
        </p>
      </div>
    `
  }
}

