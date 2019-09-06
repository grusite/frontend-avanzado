import toogle from './ui.js'
import { renderShowsDOM } from './shows.js'

console.log('navbar')

const navbar = document.querySelector('#navbar')
const searchIcon = document.querySelector('#navbar-search')
const closeIcon = document.querySelector('#navbar-close')

const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#navbar .input.search')

const handleNavbar = toogle(navbar)

searchIcon.addEventListener('click', () => handleNavbar('no-search', 'search'))
closeIcon.addEventListener('click', () => handleNavbar('search', 'no-search'))

// const handleLogoClassName = toggle(logo)

// setTimeout(() => {
//   handleNavbar('no-search', 'search')
// }, 1000)

// handleLogoClassName('asd', 'test-class')

searchForm.addEventListener('submit', evt => {
  evt.preventDefault()
  if (searchInput.validity.valid) {
    //  Render Shows
    renderShowsDOM(searchInput.value)
  }
})
