export function renderFooter() {
  const footer = document.getElementById("footer")
  if (footer) {
    footer.innerHTML = `
            <div class="container mx-auto text-center">
                <p>&copy; 2023 Grog CMS. All rights reserved.</p>
                <p class="mt-2">
                    <a href="#" class="hover:text-gray-300">Privacy Policy</a> | 
                    <a href="#" class="hover:text-gray-300">Terms of Service</a>
                </p>
            </div>
        `
  }
}

