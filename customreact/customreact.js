import { Children } from "react"
function customRender(reactelement , container){
    const domelement = document.createElement(reactElement.type)
    domelement.innerHTML
}

const reactElement = {
    type: 'a' ,
    props : {
        //object
        href: "https://google.com",
        target: '_blank'

    },
    Children : 'Click me to visit google'
}




const maincontainer = document.querySelector('#root')
//root 
//render
//method to render 

customRender(reactElement, maincontainer)