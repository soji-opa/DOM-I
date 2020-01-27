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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//working on the links

let links = document.getElementsByTagName('a')
links[0].textContent = siteContent["nav"]["nav-item-1"] 
links[1].textContent = siteContent["nav"]["nav-item-2"] 
links[2].textContent = siteContent.nav["nav-item-3"]
links[3].textContent = siteContent.nav["nav-item-4"]
links[4].innerText = siteContent.nav["nav-item-5"]
links[5].innerHTML = siteContent.nav["nav-item-6"]

// working on first section

let h1Title = document.querySelector('h1')
h1Title.textContent = siteContent.cta.h1

let btnTitle = document.querySelector('button')
btnTitle.textContent = siteContent.cta.button

let imgHeader = document.getElementById("cta-img")
imgHeader.setAttribute('src', siteContent.cta["img-src"])

//working on main section

let h4Text = document.getElementsByTagName('h4')
h4Text[0].textContent = siteContent["main-content"]["features-h4"]
h4Text[1].textContent = siteContent["main-content"]["about-h4"]
h4Text[2].textContent = siteContent["main-content"]["services-h4"]
h4Text[3].textContent = siteContent["main-content"]["product-h4"]
h4Text[4].textContent = siteContent["main-content"]["vision-h4"]

let pText = document.querySelectorAll('p')
pText[0].textContent = siteContent["main-content"]["features-content"]
pText[1].textContent =siteContent["main-content"]["about-content"]
pText[2].textContent = siteContent["main-content"]["services-content"]
pText[3].textContent = siteContent["main-content"]["product-content"]
pText[4].textContent = siteContent["main-content"]["vision-content"]

let imgMiddle = document.getElementById("middle-img")
imgMiddle.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// working on footer

h4Text[5].textContent = siteContent.contact["contact-h4"]
pText[5].textContent = siteContent.contact.address
pText[6].textContent =siteContent.contact.phone
pText[7].textContent = siteContent.contact.email

pText[8].textContent = siteContent.footer.copyright

// let footerText  = document.getElementsByTagName('footer')
// footerText.innerText = siteContent.footer.copyright