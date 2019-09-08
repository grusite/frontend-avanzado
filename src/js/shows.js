import { toggleClass } from './ui.js'
import api from './api.js'

const templateShow = ({ principal, name, image, summary }) => `
    <div class="card ${principal ? 'principal' : 'secondary close'}">
        <header class="card-header">
        <h2>${name}</h2>
        </header>
        <div class="card-content">
        <div class="card-content-image">
            <img src=${image ? image.medium : 'default.jpg'} />
        </div>
        <div class="card-content-text">
            <p>
            ${summary}
            </p>
            <div class="rating-container">
            <button class="icon">
                <i class="fas fa-star"></i>
            </button>
            <button class="icon">
                <i class="far fa-star"></i>
            </button>
            <button class="icon">
                <i class="far fa-star"></i>
            </button>
            </div>
        </div>
        </div>
    </div>
`

// const items = [
//   {
//     id: 1,
//     name: 'Primer Show',
//     image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
//     description: 'Lorem ipsum dolor sit amet',
//     principal: false,
//   },
//   {
//     id: 2,
//     name: 'Segundo Show',
//     image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
//     description: 'qwerty',
//     principal: false,
//   },
//   {
//     id: 3,
//     name: 'Tercer Show',
//     image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
//     description: 'Lorem ipsum dolor sit amet',
//     principal: false,
//   },
// ]

const renderShows = (element, shows) => {
  const htmlShows = shows.map(templateShow).join('')
  element.innerHTML = htmlShows
  // codigo para manejar los header
  const header = document.querySelectorAll('.card.secondary .card-header')
  header.forEach(header => {
    const element = header.parentNode
    header.addEventListener('click', evt => {
      toggleClass(element, 'close')
    })
  })
}

const { getShows, getSearchedShows } = api()

const renderShowsDOM = async text => {
  try {
    const mainSection = document.querySelector('main')
    if (text) renderShows(mainSection, await getSearchedShows(text))
    else renderShows(mainSection, await getShows())
  } catch (err) {
    console.error(err.message)
  }
}

renderShowsDOM()

export { renderShowsDOM }
