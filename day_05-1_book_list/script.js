const tableTbody = document.querySelector('tbody');
const toastList = document.querySelector('#toastList');
const form = document.querySelector('form');

const submit = () => {
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${this.title.value}</td><td>${this.author.value}</td><td onclick="javascript:clickRemoveTr(event);">X</td>`;
  tableTbody.appendChild(tr);
  
  const div = document.createElement('div');
  div.setAttribute('class', 'toast');
  div.innerText = "책이 추가되었습니다.";
  toastList.appendChild(div);
  setTimeout(() => {div.remove()}, 3000);

  form.reset();
}
const clickRemoveTr = (event) => {
  const tr = event.target.parentElement;
  tr.remove();
  
  const div = document.createElement('div');
  div.setAttribute('class', 'toast');
  div.innerText = "책이 삭제되었습니다.";
  toastList.appendChild(div);
  setTimeout(() => {div.remove()}, 3000);
}