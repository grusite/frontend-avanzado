/* eslint-disable no-undef*/

const lStorage = {
  setItem: (key, value) => localStorage.setItem(key, value),
  getItem: key => localStorage.getItem(key),
}

const sessionStorage = {
  setItem: (key, value) => sessionStorage.setItem(key, value),
  getItem: key => sessionStorage.getItem(key),
}

const cookieStorage = {
  setItem: (key, value) => Cookies.set(key, value),
  getItem: key => Cookies.get(key) || '',
}

const storage = (type = 'lStorage') => {
  const types = {
    lStorage,
    cookieStorage,
    sessionStorage,
  }
  if (typeof Storage !== 'undefined') {
    // Se acepta localStorage
    return types[type]
  }
  return types['cookieStorage']
}

export default storage
