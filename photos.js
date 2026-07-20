Thought process
Thought process
Create photos.js and paste this in:

javascript
fetch('photo-list.txt')
  .then(response => response.text())
  .then(text => {
    const filenames = text.trim().split('\n')
    const gallery = document.getElementById('gallery')

    filenames.forEach(name => {
      const img = document.createElement('img')
      img.src = 'images/' + name
      img.alt = 'Photo of us'
      gallery.appendChild(img)
    })
  })