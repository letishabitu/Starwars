var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];



const mainEl = document.querySelector("main");
mainEl.style.backgroundColor= 'var(--main-bg)';

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.style.textAlign = 'center'; 


mainEl.classList.add('flex-ctr'); 

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height= '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');




for(i=0; i < menuLinks.length; i++)
{
    const aEl = document.createElement('a');
    aEl.setAttribute('href', menuLinks[i].href);
    console.log(aEl.href);
    aEl.append(menuLinks[i].text);
    document.getElementById('top-menu').appendChild(aEl);
}





// mainEl.style.backgroundColor = 'var(--main-bg)'; 
// mainEl.innerHTML = "<h1>SEI Rocks</h1>"; 







