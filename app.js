// Simple Router
const routes = {
  '/': '<h2>Home Page</h2><p>Welcome to our Single Page Application!</p>',
  '/about': '<h2>About Us</h2><p>This page shows details about our project.</p>',
  '/contact': '<h2>Contact</h2><p>Email: info@myspa.com</p>'
};

function router() {
  const path = location.hash.replace('#', '') || '/';
  document.getElementById('app').innerHTML = routes[path] || '<h2>404 - Page Not Found</h2>';
  
  document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
  const activeLink = document.querySelector(`a[href="#${path}"]`);
  if (activeLink) activeLink.classList.add('active');
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);