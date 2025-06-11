// main.js
import {
  auth,
  db,
  storage,
  collection,
  addDoc,
  onAuthStateChanged,
  ref,
  uploadBytes,
  getDownloadURL
} from "./auth.js"

window.onload = () => {
  onAuthStateChanged(auth, user => {
    if (!user) {
      window.location.href = "login.html"
    }
  })
}

const postButton = document.getElementById("submit-post")

postButton.onclick = async () => {
  const caption = document.getElementById("caption-input").value.trim()
  const tags = document.getElementById("tags-input").value.trim()
  const imageInput = document.getElementById("image-input")
  const file = imageInput.files[0]

  if (!caption || !file) return alert("Caption or image missing.")

  const loading = document.getElementById("loading-indicator")
  loading.style.display = "block"

  try {
    const storageRef = ref(storage, `images/${Date.now()}-${file.name}`)
    await uploadBytes(storageRef, file)
    const imageUrl = await getDownloadURL(storageRef)

    const postsRef = collection(db, "posts")
    await addDoc(postsRef, {
      title: caption,
      tags,
      imageUrl,
      username: auth.currentUser?.email || "Guahh",
      timestamp: Date.now()
    })

    window.closeCreatePopup()
  } catch (err) {
    const error = document.getElementById("error-message")
    error.textContent = err.message
  } finally {
    loading.style.display = "none"
  }
}