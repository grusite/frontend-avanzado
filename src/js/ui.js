// const handleNavbar = (removeClass, addClass) => {
//   navbar.classList.remove(removeClass)
//   navbar.classList.add(addClass)
// }

const toggle = element => (removeClass, addClass) => {
  element.classList.remove(removeClass)
  element.classList.add(addClass)
}

const toggleClass = (element, toggleClass) => {
  element.classList.toggle(toggleClass)
}

export { toggle, toggleClass }
