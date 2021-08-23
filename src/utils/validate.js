export function validateEmail(email) {
    return email.includes('.') && email.includes('@')
}