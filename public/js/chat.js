const e = require("cors")

const socket= io()

socket.on('messsage', (message) => {
    console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const message= e.target.elements.message.value

    socket.emit('sendMessage', message)
})