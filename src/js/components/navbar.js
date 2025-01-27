export function renderNavbar() {
  const navbar = document.getElementById("navbar")
  if (navbar) {
    navbar.innerHTML = `
            <div class="container mx-auto">
                <ul class="flex space-x-4">
                    <li><a href="#" class="hover:text-gray-300">Home</a></li>
                    <li><a href="#" class="hover:text-gray-300">Pages</a></li>
                    <li><a href="#" class="hover:text-gray-300">Posts</a></li>
                    <li><a href="#" class="hover:text-gray-300">Settings</a></li>
                </ul>
            </div>
        `
  }
}

