"use strict"
import events from "../js/data.js"

class DomElement{
    constructor(){
        this.element = null
        return this
    }
    createElement(tagName, attributes, styles){
        this.element = document.createElement(tagName)
        for(const attribute in attributes){
            this.element.setAttribute(attribute, attributes[attribute])
        }
        for(const style in styles){
            this.element.styles[style] = styles[style]
        }

        return this.element
    }

}


class Event{
    constructor(event, parentDom, imgUrl){
        this.event = event
        this.parentDom = parentDom
        this.imgUrl = imgUrl
        this.id = 'event-container'
        this.styles = {
            'padding': `${navHeight + 30}px 15px 15px 15px`,
            'display': 'flex',
            'flexWrap': 'wrap',
            'justifyContent': 'center'
        }
    }

    init(){
        const container = new DomElement().createElement('div', {'id': this.id}, this.styles)
        console.log(container)
        // const container = document.createElement('div')
        // container.setAttribute('id', this.id)
        // container.style.padding = this.styles.padding        
        // container.style.display = this.styles.display
        // container.style.flexWrap = this.styles.flexWrap
        // container.style.justifyContent = this.styles.justifyContent
    }

}
