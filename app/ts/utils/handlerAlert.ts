export const alert = (imgAlert: string, titleAlert: string) => {
  const dirImg = "../../assets/img/"; 
  const div = document.createElement("div");
  div.classList.add("div-alert", "slideInDown");
  div.innerHTML = `
    <div class="toast-header">
    <img src="${dirImg + imgAlert}" class="rounded img-fluid" style="width: 20px;" alt="...">
    <strong class="mr-auto pl-3">${titleAlert}</strong>
    <small class="text-muted">just now</small>
    </div>
    <div class="toast-body">
    See? Just like this.
    </div>`;
   return document.querySelector('#alerts-app')?.appendChild(div)
};

export const showAlert = (img: string, title: string) => {
    const msg = alert(img, title)
    console.log(msg)
    setTimeout(() => {
        msg?.classList.add("fadeOut")
        setTimeout(() => { msg?.remove() }, 2000)
     }, 2000)
}