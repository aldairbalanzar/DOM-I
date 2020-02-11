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

services.textContent = siteContent.nav["nav-item-1"];
product.textContent = siteContent.nav["nav-item-2"];
vision.textContent = siteContent.nav["nav-item-3"];
features.textContent = siteContent.nav["nav-item-4"];
about.textContent = siteContent.nav["nav-item-5"];
contact.textContent = siteContent.nav["nav-item-6"];

// header content
let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', 'img/header-img.png');

let headerH1 = document.querySelector('.cta-text h1');
headerH1.textContent = siteContent.cta["h1"];

let headerBtn = document.querySelector('.cta-text button')
headerBtn.textContent = siteContent.cta["button"];
headerBtn.addEventListener("click", () => document.querySelector(".cta-text h1").innerHTML = "changed");

// top content
let featuresH4 = document.querySelector('.top-content .text-content:nth-child(1) h4');
featuresH4.textContent = siteContent["main-content"]["features-h4"];
let featuresP = document.querySelector('.top-content .text-content:nth-child(1) p');
featuresP.textContent = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelector('.top-content .text-content:nth-child(2) h4');
aboutH4.textContent = siteContent["main-content"]["about-h4"];
let aboutP = document.querySelector('.top-content .text-content:nth-child(2) p');
aboutP.textContent = siteContent['main-content']['features-content'];

// middle banner 
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// bottom content
let sercivesH4 = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
sercivesH4.textContent = siteContent['main-content']['services-h4']
let servicesP = document.querySelector('.bottom-content .text-content:nth-child(1) p');
servicesP.textContent = siteContent['main-content']['features-content']

let productH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
productH4.textContent = siteContent['main-content']['product-h4']
let productP = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productP.textContent = siteContent['main-content']['product-content']

let visionH4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
visionH4.textContent = siteContent['main-content']['vision-h4']
let visionP = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionP.textContent = siteContent['main-content']['vision-content'];

//contact
let contactP = document.querySelectorAll('.contact p')
contactP[0].style.width = "20%";

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4']

let contactP2 = document.querySelector('.contact p:nth-child(2)');
contactP2.textContent = siteContent['contact']['address'];

let contactP3 = document.querySelector('.contact p:nth-child(3)');
contactP3.textContent = siteContent['contact']['phone'];

let contactP4 = document.querySelector('.contact p:nth-child(4)');
contactP4.textContent = siteContent['contact']['email']

//footer
let copyright = document.querySelector('footer p');
copyright.textContent = siteContent['footer']['copyright'];

