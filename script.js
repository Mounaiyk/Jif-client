const body = document.querySelector("body")
const cardHolder = document.querySelector(".cardHolder")

function genAllCards () {
    console.log("I am running")
        fetch("http://localhost:3000/ipj")
        .then(res => res.json())
        .then(renderAllCards)
    }

function renderAllCards (data) {
    let divs =[];
    for (let i=0; i < data.length ; i++) {
        const div = document.createElement("div")
        div.setAttribute("class", "card")
        divs.push(div)
        const gif = (data[i].gif).toString()
        const title = data[i].title
        const text = data[i].text
        // const img = document.createElement("img")
        // img.setAttribute("class", "image")
        // img.setAttribute("src" `${gif}`)
        const h2 = document.createElement("h2")
        h2.textContent = title
        const p = document.createElement("p")
        p.textContent = text
        const reactions = document.createElement("div")
        reactions.setAttribute("class", "reactions")
        const commentB = document.createElement("button")
        commentB.textContent = "Leave a comment"
        const e1 = document.createElement("button")
        e1.innerHTML = "&#128077;"
        const e2 = document.createElement("button")
        e2.innerHTML = "&#128078;"
        const e3 = document.createElement("button")
        e3.innerHTML = "&#129505;"
        reactions.append(commentB)
        reactions.append(e1)
        reactions.append(e2)
        reactions.append(e3)
        // divs[i].append(img)
        divs[i].append(h2)
        divs[i].append(p)
        divs[i].append(reactions)
        cardHolder.append(divs[i])
}
}

body.addEventListener("click", genAllCards)
