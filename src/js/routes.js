/* eslint-disable no-undef*/

import { renderShowsDOM } from './shows.js'
import { hideFilter, showFilter } from './navbar.js'
import renderDetail from './detail.js'
import { hideCommentForm, showCommentForm } from './ui.js'
import { addQuoteListener } from './quotesForm.js'
import { renderQuotes } from './quotes.js'

page('/', () => {
  // eslint-disable-line
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
  addQuoteListener(id)
  renderQuotes(id)
})
page()
