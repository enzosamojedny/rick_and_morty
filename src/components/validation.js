export const validar = (userData) => {
    let errors = {}
    if (userData.password.length < 7) {
        errors.password = 'Password must have at least 6 digits'
    }
    if (userData.email.length < 10) {
        errors.email = 'Incorrect email'
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userData.email)) {
        errors.email = 'Invalid email format';
    }

    return errors;
}