const searchBox = document.querySelector('.search-box__mobile');
const searchIcon = document.querySelector('.search__icon--mobile');
const backArrow = document.querySelector('.back-arrow');
const menuIcon = document.querySelector('#menuHamburger');
const sidebar = document.querySelector('.sidebar');
const menuBackArrow = document.querySelector('.menu-back-arrow');
const body = document.querySelector('.containerr');
const mainCarousel = document.querySelector('.main-carousel');
const allBooks = document.querySelector('.all-books');
const recentBooks = document.querySelector('.recently-added');
const autoComplete = document.querySelector('.search-dropdown');
const searchInput = document.querySelector('.search__input');

const filterByDate = ALL_BOOKS.filter(item => item.timeAdded > 300);

searchIcon.addEventListener('click', () => {
  searchBox.classList.add('show-search')
})

backArrow.addEventListener('click', () => {
  searchBox.classList.remove('show-search')
})

menuIcon.addEventListener('click', () => {
  sidebar.classList.add('show-mobile-menu');
  body.classList.add('overlay')
})

menuBackArrow.addEventListener('click', () => {
  sidebar.classList.remove('show-mobile-menu');
  body.classList.remove('overlay')
})

if (mainCarousel) {
  mainCarousel.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('mobile-detail-button') || e.target.classList.contains('elipse')) {
      e.target.parentNode.parentNode.nextSibling.nextSibling.style.opacity = 1;
      e.target.parentNode.parentNode.nextSibling.nextSibling.style.display = "block";
    }

    else if (e.target.classList.contains('close-overlay')) {
      e.target.parentNode.parentNode.parentNode.style.opacity = 0;
      e.target.parentNode.parentNode.parentNode.style.display = "none";
    }
  })
}

const generateBookList = (data = []) => {
  return data.map(book => {
    return `
      <div class="card u-margin-top-2">
      <div class="book" style="background-image: url(${book.imageURL});"></div>
      <div class="book__details">
        <h6 class="book__details--status ${book.status === "Borrowed Out" ? "color-red" : ""}">${book.status}</h6>
        <h5 class="book__details--title u-margin-top-11">${book.title}</h5>
        <h6 class="text">${book.author} - ${book.year}</h6>
        <h6 class="text">${book.genres}</h6>
        <div class="book__foot">
          <div class="vertical-line"></div>
          <div class="book__foot--right">
            <h6 class="text">Rating: 4.0</h6>
            <div>
              <img src="./assets/icons/star-filled.svg" alt="star" class="star-icons" />
              <img src="./assets/icons/star-filled.svg" alt="star" class="star-icons" />
              <img src="./assets/icons/star-filled.svg" alt="star" class="star-icons" />
              <img src="./assets/icons/star-filled.svg" alt="star" class="star-icons" />
              <img src="./assets/icons/star.svg" alt="star" class="star-icons" />
            </div>
          </div>
          <div class="book__foot--left">
            <div class="">
              <img src="./assets/icons/users.svg" alt="star" class="star-icons" />
              <h6 class="text">${book.views}</h6>
            </div>
            <div class="book__foot--left-2">
              <img src="./assets/icons/heart.svg" alt="heart" class="heart-icon" />
              <h6 class="text">${book.likes}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
  }).join('')
} 

const recentBookDetails = generateBookList(filterByDate)
const allBookDetails = generateBookList(ALL_BOOKS)

recentBooks.innerHTML = recentBookDetails
allBooks.innerHTML = allBookDetails

const flickerItems = ALL_BOOKS.map((book) => {
  return `
    <div class="carousel-effect-container">
      <div class="show-on-mobile">
        <div class="mobile-detail-container">
          <span class="mobile-detail-button">
            <img src="./assets/icons/dots.svg" alt="dots" class="elipse" />
          </span>
        </div>
        
        <div class="mobile-overlay">
          <div class="mobile-detail-container">
            <div class="mobile-detail-button">
              <img src="./assets/icons/close-details.svg" alt="close details" class="close-overlay" />
            </div>
          </div>

          <h4 class="text-small lime capital u-margin-bottom-1 ${book.status === "Borrowed Out" && "color-red"}">${book.status}</h4>
          <h5 class="text white">${book.title}</h5>
          <h4 class="text-small white capital">${book.author}</h4>
          <h4 class="text-small white capital u-margin-bottom-1">${book.year}</h4>

          <div>
            <h6 class="text">Rating: 4.0</h6>
            <div>
              <img src="./assets/icons/star-filled.svg" alt="star" class="star-icons" />
              <img src="./assets/icons/star-filled.svg" alt="star" class="star-icons" />
              <img src="./assets/icons/star-filled.svg" alt="star" class="star-icons" />
              <img src="./assets/icons/star-filled.svg" alt="star" class="star-icons" />
              <img src="./assets/icons/star.svg" alt="star" class="star-icons" />
            </div>
          </div>

          <div class="book__foot--left">
            <div>
              <img src="./assets/icons/users.svg" alt="user" />
              <h6 class="text">${book.views}</h6>
            </div>
            <div class="book__foot--left-2">
              <img src="./assets/icons/heart-white.svg" alt="heart" class="heart-icon" />
              <h6 class="text">${book.likes}</h6>
            </div>
          </div>
        </div>

      </div>
      <div class="carousel-cell">
        <img src="${book.imageURL}" />
      </div>

      <div class="overlay-container">
        <div>
          <h4 class="text-small lime capital u-margin-bottom-1 ${book.status === "Borrowed Out" && "color-red"}">${book.status}</h4>
          <h5 class="text-big white">${book.title}</h5>
          <h4 class="text-small white capital">${book.author}</h4>
          <h4 class="text-small white capital u-margin-bottom-1">${book.year}</h4>
          <div class="item-group">
            <h4 class="text-small white capital bold-5">Genre: <span class="text-small white capital">${book.genres}</span></h4>
          </div>
          <div class="item-group">
            <h4 class="text-small white capital bold-5">Labels: <span class="text-small white capital">${book.labels}</span></h4>
          </div>
          <div class="book__foot">
            <div class="vertical-line"></div>
            <div class="book__foot--right">
              <h6 class="text">Rating: 4.0</h6>
              <div>
                <img src="./assets/icons/star-filled.svg" alt="star" class="star-icons" />
                <img src="./assets/icons/star-filled.svg" alt="star" class="star-icons" />
                <img src="./assets/icons/star-filled.svg" alt="star" class="star-icons" />
                <img src="./assets/icons/star-filled.svg" alt="star" class="star-icons" />
                <img src="./assets/icons/star.svg" alt="star" class="star-icons" />
              </div>
            </div>
            <div class="book__foot--left">
              <div>
                <img src="./assets/icons/users.svg" alt="user" />
                <h6 class="text">${book.views}</h6>
              </div>
              <div class="book__foot--left-2">
                <img src="./assets/icons/heart-white.svg" alt="heart" class="heart-icon" />
                <h6 class="text">${book.likes}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}).join('');

mainCarousel.innerHTML = flickerItems;

const flkty = new Flickity( mainCarousel, {
  // options
  cellAlign: 'left',
  contain: true
});

