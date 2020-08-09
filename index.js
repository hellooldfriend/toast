import { Toast } from './toast'

const toast = new Toast()

const buttonMessage = document.querySelector('.button_message')
buttonMessage.addEventListener('click', () => {
    toast.message({ message: 'This is a message!' })
})


const buttonMessageWithTitle = document.querySelector('.button_message_title')
buttonMessageWithTitle.addEventListener('click', () => {
    toast.message({ title: 'Some title', message: 'This is a message!' })
})


const buttonAlert = document.querySelector('.button_alert')
buttonAlert.addEventListener('click', () => {
    toast.alert({ message: 'This is an alert!' })
})


const buttonAlertWithTitle = document.querySelector('.button_alert_title')
buttonAlertWithTitle.addEventListener('click', () => {
    toast.alert({title: 'Any title', message: 'Alert with title'})
})