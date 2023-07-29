const form = document.getElementById("form-link")
const container = document.getElementById("container-form")

form.addEventListener("submit", e => {
    e.preventDefault()
    const value = e.target.elements[0].value
    fetch(`https://api.shrtco.de/v2/shorten?url=${value}`)
        .then(res => res.json())
        .then(url => {
            const shortLink = url.result.full_short_link
            const article = document.createElement("article")
            article.className = "card-link"
            const p = document.createElement("p")
            p.textContent = value
            const a = document.createElement("a")
            a.href = shortLink
            a.textContent = shortLink
            const button = document.createElement("button")
            const hr = document.createElement("hr")
            button.textContent = "Copy"
            article.append(p, hr, a, button)
            container.append(article)

            button.addEventListener("click", (e) => {
                navigator.clipboard.writeText(shortLink)
                    .then(() => {
                        button.className = "copied"
                        button.textContent = "Copied!"
                        setTimeout(() => {
                            button.className = ""
                            button.textContent = "Copy"
                        }, 2500)
                    })
                    .catch((error) => console.log(error))
            })
        })
})

const toggleMenuElement = document.getElementById("toggle-menu")
const mainMenuElement = document.getElementById("nav")

toggleMenuElement.addEventListener("click", (e) => {
    mainMenuElement.classList.toggle("showNav")
    console.log(e);
})

