const Apii = {
    apiUrl: 'https://back-end-test-t.herokuapp.com/users',
    
    fetchGetAll: () => fetch(Apii.apiUrl),
    fetchGetById: (id) => fetch(`${Apii.apiUrl}/${id}`),
    fetchPost: (data) => {
      return fetch(`${Apii.apiUrl}/add`, {
        method: 'POST',
  
        body: JSON.stringify(data),
        headers: new Headers
        ({
          "Content-Type": "application/json"
        })
      })
    },
    fetchPut: (user, id) => {
      return fetch(`${Apii.apiUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
    },
    fetchDelete: (id) => {
      return fetch(`${Apii.apiUrl}/${id}`, {
        method: 'DELETE'
      })
    }
  }
  
  export default Apii;
  
  