const register = document.getElementById("registerForm")

async function registerUser(e) {
    e.preventDefault()
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const newEmail = document.getElementById("email").value
    const newuser = document.getElementById("username").value
    const newPassword = document.getElementById("password").value
    

    try {
        const response = await fetch('http://localhost:3000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstname: firstName, lastname: lastName, email: newEmail, username: newuser ,password: newPassword })
        });

        const data = await response.json();
        if ('error' in data) {
            document.getElementById("registerOutcome").innerText ="that user already exists"
        } else {
            document.getElementById("registerOutcome").innerText ='Success: new user registered'
        }


        document.getElementById("username").value = '';
        document.getElementById("password").value = '';
        document.getElementById("email").value = '';
        document.getElementById("firstName").value = '';
        document.getElementById("lastName").value = '';
    } catch (error) {
        document.getElementById("registerOutcome").innerText = 'Error registering'
        console.error('Error registering', error);
    }
}


register.addEventListener("submit", function(e) {
registerUser(e)
})

