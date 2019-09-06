// const handleNavbar = (removeClass, addClass) => {
//   navbar.classList.remove(removeClass)
//   navbar.classList.add(addClass)
// }

const toogle = element => (removeClass, addClass) => {
  element.classList.remove(removeClass)
  element.classList.add(addClass)
}

export default toogle
