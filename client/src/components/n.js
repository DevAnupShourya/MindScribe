import React from 'react';

const Nav = () => {
    return (
        <nav class="bg-gray-900">
  <div class="container mx-auto flex items-center justify-between py-4">
    <a class="text-white text-2xl font-bold" href="#">Note App</a>
    <ul class="flex space-x-4">
      <li><a class="text-gray-300 hover:text-white" href="#">Home</a></li>
      <li><a class="text-gray-300 hover:text-white" href="#">About</a></li>
      <li><a class="text-gray-300 hover:text-white" href="#">Services</a></li>
      <li><a class="text-gray-300 hover:text-white" href="#">Contact</a></li>
    </ul>
  </div>
</nav>


    );
};

export default Nav;
