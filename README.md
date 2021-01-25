# Dig-it-ally hiring task

Create an app, that has a login-like screen containing 1 input field for username and a Login button. On clicking the Login button, call the provided checkUsername function. If the provided username is valid, checkUsername will return an email address. Handle returned errors. After successful login, show a new screen with the returned email address.

# Requirements

 - use React function components
 - use Material-UI
 - use provided `checkUsername` function
 - use state handling (e.g. no email address as url argument)
 
 # checkUsername function
 
 ```javascript
 export async function checkUsername(username) {
    // simulate API response delay
    await new Promise((res) => setTimeout(res, 100));

    if (RegExp(/^[a-z-_.]+$/i).test(username) === false) {
        return { error: "InvalidFormat", data: "username can only consist of characters a-z, A-Z, '-', '_' and '.'" };
    }

    if (["admin", "null", "root"].includes(username)) {
        return { error: "AlreadyExists", data: "this username is already taken" };
    }

    return {
        error: null,
        data: `${username.toLowerCase()}@dig-it-ally.com`,
    };
}
```
