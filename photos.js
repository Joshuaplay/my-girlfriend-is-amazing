fetch('photo-list.txt')
.then(response => response.text())
.then(text => {
const filenames = text.trim().split('\n')
const gallery = document.getElementById('gallery')
filenames.forEach(name => {
const frame = document.createElement('div')
frame.className = 'photo-frame'
const sizeRoll = Math.random()
if (sizeRoll < 0.15) {
frame.classList.add('photo-large')
} else if (sizeRoll < 0.4) {
frame.classList.add('photo-medium')
}
const rotation = (Math.random() * 10 - 5).toFixed(1)
frame.style.transform = 'rotate(' + rotation + 'deg)'
const img = document.createElement('img')
img.src = 'images/' + name
img.alt = 'Photo of us'
frame.appendChild(img)
gallery.appendChild(frame)
})
})
