"use strict"

const BASE_URL = "https://5cdb50f9-c3f7-4f14-9bad-e5dc5cb7721a.mock.pstmn.io"

const url = BASE_URL + "/v1/events"

let events = []

fetch(url)
.then((data)=>{
    return data.json()
})
.then((data)=>{
    events = data.data 
    init()
})
.catch((err)=>{
    console.error(err)
})

function init(){
    const layoutContainer = document.querySelector('#event-container')
    const eventsDom = events.map((event)=>{        

        const imgDom = getImgDom(event.img)
        const imgFrameDom = getImgFrameDom()
        imgFrameDom.appendChild(imgDom)        

        
        const cardDom = getCardDom()
        const cardBodyDom = createDom('div', {'class': 'card-body'})
        const cardHeaderDom = createDom('h2', {'class': 'card-title'})
        cardHeaderDom.textContent = event.title
        cardBodyDom.appendChild(cardHeaderDom)

        const dateDom = getDateDom()
        dateDom.textContent = event.date
        cardBodyDom.appendChild(dateDom)
        
        const locationDom = getLocationDom()
        locationDom.textContent = event.location
        cardBodyDom.appendChild(locationDom)
        
        const deadLineDom = getDeadLineDom()
        deadLineDom.textContent = 'Apply before: ' + event.deadline
        cardBodyDom.appendChild(deadLineDom)

        const detailsBtnDom = getDetailsBtnDom()
        detailsBtnDom.textContent = 'Show Details'
        detailsBtnDom.addEventListener('click', detailsBtnHandleClick, this)
        cardBodyDom.appendChild(detailsBtnDom)
        

        cardDom.appendChild(imgFrameDom)
        cardDom.appendChild(cardBodyDom)
        
        return cardDom
    })

    eventsDom.forEach((dom)=>layoutContainer.appendChild(dom))
}


function createDom(tagName, attributes, styles){
    const element = document.createElement(tagName)
    if(attributes){
        for(const attribute in attributes){
            element.setAttribute(attribute, attributes[attribute])
        }        
    }
    if(styles){
        for(const style in styles){
            element.style[style] = styles[style]
        }
    }
    return element
}


function getImgDom(imgSrc){    
    const imgStyle = {
        'width': '100%',
        'borderTopLeftRadius': '10px',
        'borderTopRightRadius': '10px'
    }
    return createDom('img', {'src': imgSrc}, imgStyle)
}

function getImgFrameDom(){
    const imgFrameStyle = {
        'margin': 'auto',
        'display': 'flex',
        'borderTopLeftRadius': '10px',
        'borderTopRightRadius': '10px'
    }
    return createDom('div', null, imgFrameStyle)
}

function getCardDom(){
    const cardStyle = {
        'width': '30%',
        'minWidth': '300px',
        'minHeight': '200px',
        'borderRadius': '10px',
        'boxShadow': '2px 2px 2px #666',
        'marginTop': '10px',
        'marginBottom': '10px'
    }
    return createDom('div', {'class': 'card'}, cardStyle)
}

function getDateDom(){
    const dateStyles = {
        'padding': '5px 25px',
        'backgroundImage': "url('./assets/images/hourglass.png')",
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': '20px'
    }
    return createDom('div', null, dateStyles)
}

function getLocationDom(){
    const locationStyles = {
        'padding': '5px 25px',
        'backgroundImage': "url('./assets/images/pin.png')",
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': '20px',
        'backgroundPosition': '0 2px'
    }
    return createDom('div', null, locationStyles)
}

function getDeadLineDom(){
    const deadLineStyes = {
        'padding': '5px 25px',
        'backgroundImage': "url('./assets/images/calendar.png')",
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': '20px'    
    }
    return createDom('div', null, deadLineStyes)
}

function getDetailsBtnDom(){
    const detailsBtnStyles = {
        'position': 'absolute',
        'right': '15px',
        'bottom': '15px'    
    }

    return createDom('button',
    {
        'class': 'btn btn-primary',
        'data-toggle': 'modal',
        'data-target': '#detailsModal'
    },
    detailsBtnStyles)
}

function detailsBtnHandleClick(e){    
    const modalTitleDom = document.querySelector('.modal-title')
    modalTitleDom.textContent = event.title

    const modalBodyDom = document.querySelector('.modal-body')

    try{
        const existingDom = document.querySelector('#event-details')
        if(existingDom){
            existingDom.remove()
        }
    }
    catch(err){
        console.log(err)
    }
    
    const wrapperDom = createDom('div', {'id': 'event-details'})
    this.populateDOM(this.event.content, wrapperDom)
    DomElement.appendChild(modalBodyDom, wrapperDom)
}

// import events from "../js/data.js"
// import DomElement from "../js/dom-element.js"
// import Event from "../js/event.js"
// import Dots from "../js/dots.js"

// const containersDom = events.map((event)=>new Event(event).getEventDom())

// const setView = ( newContainerDom )=>{
//     const parentDom = document.querySelector('#container>.event-container')    
//     try{
//         const oldContainer = DomElement.getElement('#event-container')
//         if(oldContainer){
//             oldContainer.parentNode.removeChild(oldContainer)
//         }        
//     }
//     catch(err){
//         console.error(err)
//     }   
//     finally{
//         DomElement.appendChild(parentDom, newContainerDom)
//     } 
// }

// const sliderDom = DomElement.getElement('.slider')
// const dotsObj = new Dots(containersDom)
// const dotsDom = dotsObj.getDotsDom(setView)
// DomElement.appendChild(sliderDom, dotsDom)

// dotsObj.init(setView, 0)