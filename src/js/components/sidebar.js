export function renderSidebar() {
  const sidebar = document.getElementById("sidebar")
  if (sidebar) {
    sidebar.innerHTML = `
            <h2 class="text-xl font-semibold mb-4">Quick Links</h2>
            <ul class="space-y-2">
                <li><a href="#" class="text-blue-600 hover:underline">Create New Page</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">Create New Post</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">Manage Media</a></li>
                <li><a href="#" class="text-blue-600 hover:underline">User Management</a></li>
            </ul>
        `
  }
}

