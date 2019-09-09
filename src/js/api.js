const API_KEY = 'API_KEY'

const api = (API_URL = 'https://api.tvmaze.com/') => {
  const searchAPIEndPoint = `${API_URL}search/shows?q=`
  const showsAPIEndPoint = `${API_URL}shows`
  return {
    getShows: async () => {
      try {
        const response = await fetch(showsAPIEndPoint)
        if (!response.ok) {
          throw new Error('Error fetching shows')
        }
        const data = await response.json()
        return data
      } catch (err) {
        console.error(err.message)
        throw err
      }
    },
    getSearchedShows: async text => {
      try {
        const response = await fetch(searchAPIEndPoint + text)
        if (!response.ok) {
          throw new Error('Error fetching shows')
        }
        const data = await response.json()
        const filteredData = data.map(item => item.show)
        return filteredData
      } catch (err) {
        console.error(err.message)
        throw err
      }
    },
    getShowDetail: async id => {
      try {
        const response = await fetch(`${showsAPIEndPoint}/${id}`)
        if (!response.ok) {
          throw new Error('Error fetching shows')
        }
        const data = await response.json()
        return data
      } catch (err) {
        console.error(err.message)
      }
    },
  }
}

export default api
