import config from "../../../config.yaml"

export function renderFooter() {
  const footer = document.getElementById("footer")
  if (footer) {
    footer.innerHTML = `
            <div class="container mx-auto text-center">
                <p>${config.footer.copyright}</p>
                <p class="mt-2">
                    <a href="#" class="hover:text-gray-300">Privacy Policy</a> | 
                    <a href="#" class="hover:text-gray-300">Terms of Service</a>
                </p>
            </div>
        `
  }
}

