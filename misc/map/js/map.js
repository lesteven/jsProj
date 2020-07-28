
const list = ['hello', 'farewell', 'goodbye', 'sayonara']
const div = document.getElementById('index')

list.forEach((each) => {
  const ptag = document.createElement('p');
  const text = document.createTextNode(each);
  ptag.appendChild(text)
  div.appendChild(ptag)
})
