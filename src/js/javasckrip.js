 const tombol = document.getElementById('menutoggle');
  const menu = document.getElementById('menu');

  let isOpen = false;

  tombol.addEventListener('click', () => {
    if (!isOpen) {
      menu.classList.remove('hidden','pointer-events-none', 'slide-out');
      menu.classList.add('slide-in');
    } else {
      menu.classList.remove('slide-in');
      menu.classList.add('slide-out');
     
    }

    isOpen = !isOpen;
  });




  window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('colornews', 'shadow-md', 'text-gray-800');
            navbar.classList.remove('bg-transparent', 'text-white');
        } else {
            navbar.classList.add('bg-transparent', 'text-white');
            navbar.classList.remove('bg-white', 'shadow-md', 'text-gray-800');
        }
    });
    document.getElementById('mobile-menu-button').addEventListener('click', function() {
        console.log('Mobile menu clicked');
    });




 