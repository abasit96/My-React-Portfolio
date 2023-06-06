import React from 'react';

function Footer(props) {
    return (
        <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg class="bi" width="30" height="24">]</svg>
      </a>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-muted" href="https://github.com/abasit96">
      <i class="fa-brands fa-github"></i>
        </a></li>
      <li class="ms-3"><a class="text-muted" href="https://www.linkedin.com/in/abdul-basit-a01b831a5/">
      <i class="fa-brands fa-linkedin"></i>
        </a></li>
    </ul>
  </footer>
</div>
    );
}

export default Footer;