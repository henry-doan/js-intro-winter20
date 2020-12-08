document.getElementById('demo').innerHTML = 'Hello Mars'
document.getElementById('demo').style.color = 'blue'
document.getElementById('myPic').style.height = '200px'
var btn = document.getElementById('btn')

btn.addEventListener('click', changePic)

function changePic() {
  var img = document.getElementById('myPic')
  var pup = 'https://images.unsplash.com/photo-1601758228006-964e41e5e8eb?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
  var kitty = 'https://images.unsplash.com/photo-1601758002677-3aadb781fddd?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
  
  if (img.src === pup) { 
    img.src = kitty
  } else {
    img.src = pup
  }
}