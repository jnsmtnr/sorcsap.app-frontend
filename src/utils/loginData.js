export function setLoginData({ token, email }) {
    localStorage.setItem('login-data', JSON.stringify({ 
        token,
        email,
        expiresAt: new Date().getTime() + 3600000
      }))
}

export function getLoginData() {
    return JSON.parse(localStorage.getItem('login-data'))
}
