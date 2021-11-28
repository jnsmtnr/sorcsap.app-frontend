export function setLoginData({ token, email }) {
    localStorage.setItem('login-data', JSON.stringify({ 
        token,
        email,
        expiresAt: new Date().getTime() + (7 * 24 * 60 * 60 * 1000)
      }))
}

export function getLoginData() {
    return JSON.parse(localStorage.getItem('login-data'))
}
