localStorage.setItem("browser", navigator.userAgent);
localStorage.setItem("platform", navigator.platform);

document.getElementById("system-info").innerHTML =
`
Браузер: ${localStorage.getItem("browser")}<br>
ОС: ${localStorage.getItem("platform")}
`;

fetch('https://jsonplaceholder.typicode.com/posts/12/comments')
.then(response => response.json())
.then(data => {

    let reviews = document.getElementById("reviews");

    data.forEach(comment => {

        reviews.innerHTML += `
        <div class="review">
            <h4>${comment.name}</h4>
            <p>${comment.body}</p>
        </div>
        `;

    });

})
.catch(error => console.error(error));

setTimeout(() => {

    document.getElementById("modal").style.display = "block";

}, 60000);

const hour = new Date().getHours();

if (hour < 7 || hour >= 21) {
    document.body.classList.add("dark");
}

document.getElementById("theme-btn")
.addEventListener("click", () => {

    document.body.classList.toggle("dark");

});