const URL_JSON = "./src/index.json"

function getJson() {
   return fetch(URL_JSON).then(response => {
        return response.json();
      }).catch(err => {
      });
}

const form = document.getElementById("form");
const lu = document.querySelector('ul')

function addHtml(el='') {
    lu.innerText = ""
    let number =0
    getJson().then(data => {
        data.filter((element,index)=>{
            if(el===''){
                return true
            }
            if(el.show_description === false){
                element.description = "N/A"
                        }
            if(el.show_only_active !== ""){
                 if(element.status === el.show_only_active){
                    number ++
                    if(el.max_items_to_show !== ""){
                        if(number <= el.max_items_to_show){
                            console.log(number)
                                return true}
                    }
                    else{
                        return true
                    }
                }
            }
            else{
                number ++
                if(el.max_items_to_show !== ""){
                    if(number <= el.max_items_to_show){
                            return true}
                }
                else{
                    return true
                }
            }
        }).forEach(element => {
            const li = document.createElement('li')
            const h1 = document.createElement('h1')
            const p = document.createElement('p')
            const p1 = document.createElement('p')
            h1.innerText = element.name
            p.innerText = element.description
            p1.innerText = element.status
            li.appendChild(h1)
            li.appendChild(p)
            li.appendChild(p1)
            lu.appendChild(li)
        });
    })
    
}


addHtml()

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const tegForm = Object.fromEntries(new FormData(e.target))
  let result = true
        if(tegForm.show_only_active === 'false'   ){
            tegForm.show_only_active = false  }
        if(tegForm.show_description === 'false'){
            tegForm.show_description = false
        }
        if(tegForm.show_only_active === 'true'){
            tegForm.show_only_active = true
        }
        if(tegForm.show_description === 'true'){
            tegForm.show_description = true
        }
    console.log(tegForm)
  addHtml(tegForm)
});
