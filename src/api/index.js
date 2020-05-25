
const URL = 'http://localhost:8080/cards'

async function getAllCards() {
    let response= await fetch(URL)
    let cards = await response.json()
    return cards
}
async function createCard(card) {
    await fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    })

}
async function removeCard(id) {
    await fetch(`${URL}/${id}`, {
        method: 'DELETE',
    })

}
export default { getAllCards, createCard, removeCard };