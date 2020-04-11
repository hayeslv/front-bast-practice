import pic from './assets/images/shawshank.jpg'
import('./index.scss')
// import('./a.css')

console.log(pic);

const img = new Image()
img.src = pic
let root = document.getElementById('app')
root.append(img)

