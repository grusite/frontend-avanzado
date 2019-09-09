import { toggle } from './ui.js'
import { renderShowsDOM } from './shows.js'

console.log('navbar')

const navbar = document.querySelector('#navbar')
const searchIcon = document.querySelector('#navbar-search')
const closeIcon = document.querySelector('#navbar-close')

const searchForm = document.querySelector('#search-form')
const searchInput = document.querySelector('#navbar .input.search')

const handleNavbar = toggle(navbar)

searchIcon.addEventListener('click', () => handleNavbar('no-search', 'search'))
closeIcon.addEventListener('click', () => handleNavbar('search', 'no-search'))

searchForm.addEventListener('submit', evt => {
  evt.preventDefault()
  if (searchInput.validity.valid) {
    //  Render Shows
    renderShowsDOM(searchInput.value)
  }
})