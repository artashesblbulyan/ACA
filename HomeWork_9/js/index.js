const URL_FEATCH = "https://jsonplaceholder.typicode.com/todos/"
const IMAGE_URL = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"

let asd = document.getElementById('helo')
let div = document.getElementById('divbody')
let divHeader = document.getElementById('divHeader')
div.style.display = 'none'
const submit = document.getElementById('Search_Submit')
const sub = document.getElementById('submit')
const inputTex = document.getElementById('id')


function clickButton() {
    div.style.display = 'flex'
    divHeader.style.display ='none'
    clickSearch()
}

sub.addEventListener('click',clickButton)

function getRequest() {
    const imageLoding = document.createElement('img')
    imageLoding.src = IMAGE_URL
    asd.appendChild(imageLoding)
   return fetch(URL_FEATCH).then(request=> request.json()).finally(()=>{
    asd.innerHTML =""
   })

}

function clickSearch() {
    getRequest().then(elem=>{
        elem.filter((elem)=>{
            if(inputTex.value !== ''){
                console.log(elem.userId , +inputTex.value)
                if(elem.userId === +inputTex.value){
                    return true
                }
            }
            else{
                return true
            }
        }).forEach(element => {
            const div1 =  document.createElement('div')
            const p =  document.createElement('p')
            const pCompleted =  document.createElement('p')
            if(element.completed){
                pCompleted.innerText = 'Completed'
            }
            else{
                pCompleted.innerText = 'not Completed'
            }
            div1.className = "div_1"
            pCompleted.className = "pCompleted"
            p.innerText = element.title
            div1.appendChild(p)
            div1.appendChild(pCompleted)
            asd.appendChild(div1)
        });
    })
}

submit.addEventListener('click',clickSearch)

