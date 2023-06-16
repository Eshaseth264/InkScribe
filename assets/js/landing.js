document.addEventListener('DOMContentLoaded', function() {
  var originalCards = {};

  function showBooks(bookType, cardContainerID) {
    var cardContainer = document.getElementById(cardContainerID);
    originalCards[cardContainerID] = cardContainer.innerHTML;
    cardContainer.classList.add('slide-out');

    setTimeout(function() {
      cardContainer.classList.remove('slide-out');
      cardContainer.innerHTML = generateBookHTML(bookType, cardContainerID);
    }, 500); // Adjust the duration as needed
  }

  function goBack(cardContainerID) {
    var cardContainer = document.getElementById(cardContainerID);
    cardContainer.classList.add('slide-in');

    setTimeout(function() {
      cardContainer.innerHTML = originalCards[cardContainerID];
      cardContainer.classList.remove('slide-in');
    }, 500); // Adjust the duration as needed
  }

  function generateBookHTML(bookType, cardContainerID) {
    var bookData = {
      dr: [
        {
          img: 'img_dr/dr51.jpeg',
          price: '₹290',
        },
        {
          img: 'img_dr/dr52.jpeg',
          price: '₹645',
        },
        {
          img: 'img_dr/dr53.jpeg',
          price: '₹800',
        },
        {
          img: 'img_dr/dr54.jpeg',
          price: '₹390',
        },
        {
          img: 'img_dr/dr55.jpg',
          price: '₹400',
        },
      ],
      fs: [
        {
          img: 'img_fs/fs51.jpeg',
          price: '₹290',
        },
        {
          img: 'img_fs/fs52.jpeg',
          price: '₹645',
        },
        {
          img: 'img_fs/fs53.jpeg',
          price: '₹800',
        },
        {
          img: 'img_fs/fs54.jpeg',
          price: '₹390',
        },
        {
          img: 'img_fs/fs55.jpeg',
          price: '₹400',
        },
      ],
      sf: [
        {
          img: 'img_sf/sf51.jpeg',
          price: '₹290',
        },
        {
          img: 'img_sf/sf52.jpeg',
          price: '₹645',
        },
        {
          img: 'img_sf/sf53.jpeg',
          price: '₹800',
        },
        {
          img: 'img_sf/book1.jpeg',
          price: '₹390',
        },
        {
          img: 'img_sf/sf55.jpeg',
          price: '₹400',
        },
      ],
      cl: [
        {
          img: 'img_cl/cl51.jpg',
          price: '₹290',
        },
        {
          img: 'img_cl/cl52.jpeg',
          price: '₹645',
        },
        {
          img: 'img_cl/cl53.jpeg',
          price: '₹800',
        },
        {
          img: 'img_cl/cl54.jpeg',
          price: '₹390',
        },
        {
          img: 'img_cl/cl55.webp',
          price: '₹400',
        },
      ]
    };

    var books = bookData[bookType];
    var html = `<div id="${cardContainerID}" class="row no-gutters border-0 slide-in">
      <div class="d-flex justify-content-between pl-2 pr-2 pb-1">
        <button class="btn btn-outline-primary navbar-btn align-self-center transparent-bg" id="goback${cardContainerID}" class="small"><</button>
      </div>`;

    for (var i = 0; i < books.length; i++) {
      html += `
        <div class="col-md-2 mx-md-auto col-sm-6 card">
          <img src="${books[i].img}" class="card-img-top p-2 m-0" alt="Book ${i + 1}">
          <div class="d-flex justify-content-between p-2">
            <p class="m-0 d-inline-block">Price: ${books[i].price}</p>
            <a class="nav-link d-inline-block p-0" href="#">
              <i class="far fa-heart navbar-icon navbar-icon-heart"></i>
            </a>
          </div>
          <a href="#" class="btn btn-outline-success btn-sm mt-2 m-2">Add to Cart</a>
        </div>`;
    }

    html += '</div>';

    return html;
  }

  document.getElementById('viewMorefs').addEventListener('click', function() {
    showBooks('fs', 'cardContainerfs');
  });

  document.getElementById('gobackfs').addEventListener('click', function() {
    goBack('cardContainerfs');
  });

  document.getElementById('viewMoresf').addEventListener('click', function() {
    showBooks('sf', 'cardContainersf');
  });

  document.getElementById('gobacksf').addEventListener('click', function() {
    goBack('cardContainersf');
  });

  document.getElementById('viewMoredr').addEventListener('click', function() {
    showBooks('dr', 'cardContainerdr');
  });

  document.getElementById('gobackdr').addEventListener('click', function() {
    goBack('cardContainerdr');
  });

  document.getElementById('viewMorecl').addEventListener('click', function() {
    showBooks('cl', 'cardContainercl');
  });

  document.getElementById('gobackcl').addEventListener('click', function() {
    goBack('cardContainercl');
  });
});
