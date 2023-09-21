let myLeads = []
const inputEl = document.getElementById("input-el")

const inputBtn = document.getElementById("input-btn")

const ulEl = document.getElementById("ul-el")

const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

let tabBtn = document.getElementById("tab-btn")

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}



tabBtn.addEventListener("click",function () {
    // Save the url
    // Grab the URL of the current tab!
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    });
    
   
})


function render(leads) {

    let listItems = ""
    for (let i = 0; i < leads.length; i++) {

        listItems += `<li> 
        <a href = ' ${leads[i]} ' target = '_blank'>
         ${leads[i]} </a>
         </li>`
        
    }
    ulEl.innerHTML = listItems
}


deleteBtn.addEventListener("dblclick",function(){

    localStorage.clear()
    myLeads = []
    render(myLeads)
    
})


inputBtn.addEventListener("click", function () {
    

    myLeads.push(inputEl.value)  //fetching input value
    inputEl.value = " "  //after entering input clearing it 

    localStorage.setItem("myLeads", JSON.stringify(myLeads) )

    render(myLeads)
    

})

