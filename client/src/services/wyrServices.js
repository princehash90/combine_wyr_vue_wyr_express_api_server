export default {
    getRandomWyr(){// returns a promise object
        return fetch('/wyr').then((response) => {
            //making a fetch call
            return response.json();// return is returning promise, converting the response into json
        })
    }
}