export function logIn(user) {
    localStorage.setItem('user', JSON.stringify(user))
}

export function loggedIn() {
    return localStorage.getItem('user') !== null
}

export function getLoggedInUser() {
    return JSON.parse(localStorage.getItem('user'))
}

export function logOut() {
    localStorage.removeItem('user')
}
