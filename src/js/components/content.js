export function renderContent() {
  const content = document.getElementById("content")
  if (content) {
    content.innerHTML = `
            <h1 class="text-3xl font-bold mb-6">Welcome to Grog CMS</h1>
            <p class="mb-4">Grog CMS is an ultra-light content management system designed for simplicity and ease of use.</p>
            <h2 class="text-2xl font-semibold mt-8 mb-4">Getting Started</h2>
            <ol class="list-decimal list-inside space-y-2">
                <li>Create your first page by clicking "Create New Page" in the sidebar</li>
                <li>Add some content using the built-in Markdown editor</li>
                <li>Publish your page and view it on your live site</li>
                <li>Customize your site settings in the "Settings" menu</li>
            </ol>
        `
  }
}

