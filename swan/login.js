const Imap = require('imap')

let el = selector => document.querySelector(selector)

el('.connect-form').addEventListener('submit', e => {
  e.preventDefault()

  let options = {
    user: el('[name="email"]').value,
    password: el('[name="password"]').value,
    host: el('[name="server"]').value,
    port: 143,
    autotls: 'required'
  }
  console.log('connecting', options)
  let connection = new Imap(options)

  connection.once('ready', () => {
    connection.openBox('INBOX', true, (err, box) => {
      if (err) {
        return console.log(err)
      }

      console.log('success')
    })
  })

  connection.once('error', err => console.log(err))
  connection.once('end', err => console.log('end', err))
  connection.connect()
})
