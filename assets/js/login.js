const saveCredentialInStorage = () => {
    try {
        const credentials = {
            email: "test@mail.hei.school",
            password: "admin"
        };
        localStorage.setItem("auth", JSON.stringify(credentials));
    } catch (error) {
        console.error("Error saving credentials to localStorage:", error);
    }
}

const authenticate = (credentials) => {
    try {
        const data = localStorage.getItem("auth");
        if (!data) {
            console.warn("No credentials found in localStorage.");
            return false;
        }
        const storedCredentials = JSON.parse(data);
        return storedCredentials.email === credentials.email && storedCredentials.password === credentials.password;
    } catch (error) {
        console.error("Error during authentication:", error);
        return false;
    }
}

const loaded = () => {
    saveCredentialInStorage();
    document.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("email");
        const password = formData.get("password");

        const isAuthenticated = authenticate({ email, password });

        const message = document.getElementById("message");
        console.log(message)
        if (isAuthenticated) {
             window.location.href = "./index.html";
             message.classList.toggle("success")
             message.innerHTML = 'Authentication is successfully.'
        } else {
            message.innerHTML ="Authentication failed. Please check your email and password.";
        }
    });
}

document.addEventListener("DOMContentLoaded", loaded);
