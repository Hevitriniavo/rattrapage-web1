const deleteCredentialInStorage = () => {
    try {
        const credentials = localStorage.getItem("auth");
        if (credentials !== null){
            localStorage.removeItem("auth");
            window.location.href = "./login.html"
        }
    } catch (error) {
        console.error("Error deleting credentials to localStorage:", error);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("logout")
        .addEventListener("click", () => {
        deleteCredentialInStorage();
    })
})