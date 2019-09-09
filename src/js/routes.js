import { renderShowsDOM } from './shows.js'
import { hideFilter, showFilter } from './navbar.js'
import renderDetail from './detail.js'
import { hideCommentForm, showCommentForm } from './ui.js'

page('/', () => {
  console.log('Home page')
  showFilter()
  hideCommentForm()
  renderShowsDOM()
})
page('/detail/:id', ctx => {
  console.log('Detail')
  const {
    params: { id },
  } = ctx
  console.log(id)
  hideFilter()
  showCommentForm()
  renderDetail(id)
})
page()
