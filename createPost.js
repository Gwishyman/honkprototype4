const cameraButton = document.getElementById('cameraButton')
const popup = document.getElementById('create-post-popup')
const uploadArea = document.getElementById('upload-area')

cameraButton.onclick = () => {
  popup.style.display = 'flex'
}

window.closeCreatePopup = () => {
  popup.style.display = 'none'
  resetUpload()
}

function resetUpload() {
  uploadArea.style.backgroundImage = ''
  uploadArea.style.backgroundColor = ''
  uploadArea.innerHTML = `
    <span class="plus-sign">+</span>
    <input type="file" id="image-input" accept="image/*" class="hidden">
  `
  attachUploadHandler()
}

function attachUploadHandler() {
  const newInput = uploadArea.querySelector('input')
  uploadArea.onclick = () => newInput.click()
  newInput.onchange = () => {
    const file = newInput.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        uploadArea.innerHTML = `
          <input type="file" id="image-input" accept="image/*" class="hidden">
        `
        uploadArea.style.backgroundImage = `url(${reader.result})`
        uploadArea.style.backgroundSize = 'cover'
        uploadArea.style.backgroundPosition = 'center'
        uploadArea.style.backgroundColor = 'transparent'
        attachUploadHandler()
      }
      reader.readAsDataURL(file)
    }
  }
}

attachUploadHandler()
