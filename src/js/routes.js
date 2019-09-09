import { renderShowsDOM } from './shows.js'
import { hideFilter, showFilter } from './navbar.js'
import renderDetail from './detail.js'

page('/', () => {
  console.log('Home page')
  showFilter()
  renderShowsDOM()
})
page('/detail/:id', ctx => {
  console.log('Detail')
  const {
    params: { id },
  } = ctx
  console.log(id)
  hideFilter()
  renderDetail(id)
})
page()
