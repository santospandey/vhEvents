"use strict"
import events from "../js/data.js"
import DomElement from "../js/dom-element.js"
import Event from "../js/event.js"
import Dots from "../js/dots.js"

const containersDom = events.map((event)=>new Event(event).getEventDom())

const setView = ( newContainerDom )=>{
    const parentDom = document.querySelector('#container>.event-container')    
    try{
        const oldContainer = DomElement.getElement('#event-container')
        if(oldContainer){
            oldContainer.parentNode.removeChild(oldContainer)
        }        
    }
    catch(err){
        console.error(err)
    }   
    finally{
        DomElement.appendChild(parentDom, newContainerDom)
    } 
}

const sliderDom = DomElement.getElement('.slider')
const dotsObj = new Dots(containersDom)
const dotsDom = dotsObj.getDotsDom(setView)
DomElement.appendChild(sliderDom, dotsDom)

dotsObj.init(setView, 0)