const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//nav
let nav = document.querySelector('nav');
nav.style.backgroundColor = 'green';

// a tag links
let first = document.createElement('a');
let firstText = document.createTextNode('First');
first.appendChild(firstText);
document.querySelector('nav').prepend(first);

let services = document.querySelector('nav a:nth-child(2)');
let product = document.querySelector('nav a:nth-child(3)');
let vision = document.querySelector('nav a:nth-child(4)');
let features = document.querySelector('nav a:nth-child(5)');
let about = document.querySelector('nav a:nth-child(6)');
let contact = document.querySelector('nav a:nth-child(7)');

let last = document.createElement('a');
let lastText = document.createTextNode('Last');
last.appendChild(lastText);
document.querySelector('nav').appendChild(last);

services.textContent = 'Services';
product.textContent = 'Product';
vision.textContent = 'Vision';
features.textContent = 'Features';
about.textContent = 'About';
contact.textContent = 'Contact';

// header content
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', 'img/header-img.png');

let headerH1 = document.querySelector('.cta-text h1')
headerH1.textContent = 'DOM is awesome';

let headerBtn = document.querySelector('.cta-text button')
headerBtn.textContent = 'Get started!';
headerBtn.addEventListener("click", () => document.querySelector(".cta-text h1").innerHTML = "changed");

// top content
let featuresH4 = document.querySelector('.top-content .text-content:nth-child(1) h4');
featuresH4.textContent = 'Features';
let featuresP = document.querySelector('.top-content .text-content:nth-child(1) p');
featuresP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let aboutH4 = document.querySelector('.top-content .text-content:nth-child(2) h4');
aboutH4.textContent = 'About';
let aboutP = document.querySelector('.top-content .text-content:nth-child(2) p');
aboutP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// middle banner 
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', 'img/mid-page-accent.jpg');

// bottom content
let sercivesH4 = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
sercivesH4.textContent = 'Services';
let servicesP = document.querySelector('.bottom-content .text-content:nth-child(1) p');
servicesP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let productH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
productH4.textContent = 'Product';
let productP = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productP.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let visionH4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
visionH4.textContent = 'Vision';
let visionP = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionP.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//contact
let contactP = document.querySelectorAll('.contact p')
contactP[0].style.width = "20%";

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = 'Contact';

let contactP2 = document.querySelector('.contact p:nth-child(2)');
contactP2.textContent = '123 Way 456 Street Somewhere, USA';

let contactP3 = document.querySelector('.contact p:nth-child(3)');
contactP3.textContent = '1 (888) 888-8888';

let contactP4 = document.querySelector('.contact p:nth-child(4)');
contactP4.textContent = 'sales@greatidea.io';

//footer
let copyright = document.querySelector('footer p');
copyright.textContent = 'Copyright Great Idea! 2018';

