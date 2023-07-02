const kinds = [
  {
    name: 'Folk',
    image: 'images/kindsIcons/guitar.png',
    description: 'this kind of music has its roots in the native culture of the prespanic people livin in the old america',
  },
  {
    name: 'Rock',
    image: 'images/kindsIcons/drums.png',
    description: 'Hard strings, awsome drums, great lyrics. This is the most fantastic kind of music of all times',
  },
  {
    name: 'Pop',
    image: 'images/kindsIcons/keyboard.png',
    description: 'For those of you loking for something different and new, this year we have introduce the old pop music',
  },
  {
    name: 'Heavy Metal',
    image: 'images/kindsIcons/microphone.png',
    description: 'Its time to rock really hard all night long with the most powerfull heavy metal',
  },
  {
    name: 'Rock Transgres',
    image: 'images/kindsIcons/drums.png',
    description: 'Direct from the most extreme side of spain. With melodic guitar solos and lyrics about love and joy',
  },
];
document.addEventListener('DOMContentLoaded', () => {
  const kindConteiner = document.querySelector('#kindsContainer');
  kinds.forEach((kind) => {
    const kindCard = document.createElement('div');
    kindCard.classList.add('cardKind');
    const imgCard = document.createElement('img');
    imgCard.src = kind.image;
    const kindName = document.createElement('h2');
    kindName.textContent = kind.name;
    const descKind = document.createElement('p');
    descKind.textContent = kind.description;
    kindCard.appendChild(imgCard);
    kindCard.appendChild(kindName);
    kindCard.appendChild(descKind);
    kindConteiner.appendChild(kindCard);
  });
});
const bands = [
  {
    name: 'Band1',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/002/839/653/small/tribal-ethnic-tattoo-icon-illustration-design-logo-free-vector.jpg',
    description: 'this is a rock band from australia that uses to play funk music. Awsome played as an artists',
    procedence: 'Originated from Australia, Brisbain',
  },
  {
    name: 'Band2',
    image: 'https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-tribal-logo-vector-png-image_1824197.jpg',
    description: 'this is a rock band from australia that uses to play funk music. Awsome played as an artist',
    procedence: 'Originated from Australia, Sidney',
  },
  {
    name: 'Band3',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF_AM5SZSuSpanvtRO6EEnyxXXjQfAbZnXIw&usqp=CAU',
    description: 'this is a rock band from United Kindom that uses to play funk music. Awsome played as an artist',
    procedence: 'Originated from UK, Belfast',
  },
  {
    name: 'Band4',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/007/412/788/small/tattoo-maori-design-ethnic-oriental-ornament-art-tribal-tattoo-sketch-logo-of-a-tattoo-maori-style-vector.jpg',
    description: 'this is a rock band from USA that uses to play funk music. Awsome played as an artist',
    procedence: 'Originated from USA, California',
  },
  {
    name: 'Band5',
    image: 'https://passion-stickers.com/964-large_default/yamaha-logo-tribal.jpg',
    description: 'this is a rock band from Spain that uses to play funk music. Awsome played as an artist',
    procedence: 'Originated from Spain, Extremadura',
  },
];
function deleteBands(){
  const cardContainer = document.querySelector('#bandsContainer');
  cardContainer.innerHTML = '';
}
function renderBands (index){
  let count = 0;
  const cardContainer = document.querySelector('#bandsContainer');
  bands.forEach((band) => {
    if (count < index){
      const bandCard = document.createElement('div');
      bandCard.classList.add('bandKind');
      const imagesContainer = document.createElement('div');
      imagesContainer.classList.add('bandImgCont');
      const imgCard = document.createElement('img');
      imgCard.src = band.image;
      imagesContainer.appendChild(imgCard)
      bandCard.appendChild(imagesContainer);
      const bandContentContainer = document.createElement('div');
      bandContentContainer.classList.add('bandContentContainer');
      const nameBand = document.createElement('h2');
      nameBand.textContent = band.name;
      const descBand = document.createElement('h3');
      descBand.textContent = band.description;
      const separator = document.createElement('hr');
      // separator.classList.add('');
      const procedBand = document.createElement('p');
      procedBand.textContent = band.procedence;
      bandContentContainer.appendChild(nameBand);
      bandContentContainer.appendChild(descBand);
      bandContentContainer.appendChild(separator);
      bandContentContainer.appendChild(procedBand);
      bandCard.appendChild(bandContentContainer);
      cardContainer.appendChild(bandCard);
      count += 1;
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 768) {
    renderBands(2);
  } else {
    renderBands(bands.length);
  }
});
document.addEventListener('DOMContentLoaded', () => {
  let btnState = false;
  const bandMoreTxt = document.querySelector('#moreBtnTxt');
  const bandMoreArrow = document.querySelector('#moreBtnArrow');
  const bandMoreBtn = document.querySelector('#bandBtn');
  bandMoreBtn.addEventListener('click', () => {
    if (btnState) {
      btnState = false;
      bandMoreTxt.textContent = 'MORE';
      const upArr = '&#8744;';
      bandMoreArrow.innerHTML = upArr;
      deleteBands();
      renderBands(2);
    } else {
      btnState = true;
      bandMoreTxt.textContent = 'LESS';
      const upArr = '&#8743;';
      bandMoreArrow.innerHTML = upArr;
      deleteBands();
      renderBands(bands.length);
    }
  });
});
document.addEventListener('resize', () => {
  if (window.innerWidth <= 768){
    deleteBands();
    renderBands(2);
  } else {
    deleteBands();
    renderBands(bands.length);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const myLogo = document.querySelector('#myLogo');
  myLogo.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
  const about = document.querySelector('#about');
  about.addEventListener('click', () => {
    window.location.href = 'about.html';
  });
  const home = document.querySelector('#home');
  home.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const linksElements = document.querySelectorAll('#myLinks a');
  const openBtn = document.querySelector('#menuHamburgerContainer');
  const myLinksContainer = document.querySelector('#myLinks');
  const myIcon = document.querySelector('#menuHamburgerContainer');
  const myIconClose = document.querySelector('#closeMenuImage');
  openBtn.addEventListener('click', () => {
    myLinksContainer.classList.add('openable');
    myIcon.classList.add('disaperable');
    myIconClose.classList.add('apearable');
  });
  const closeBtn = document.querySelector('#closeHamburger');
  closeBtn.addEventListener('click', () => {
    myLinksContainer.classList.remove('openable');
    myIcon.classList.remove('disaperable');
  });
  linksElements.forEach((e) => {
    e.addEventListener('click', () => {
      myLinksContainer.classList.remove('openable');
      myIcon.classList.remove('disaperable');
    });
  });
});