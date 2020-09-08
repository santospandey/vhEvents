"use strict"
import DomElement from "../js/dom-element.js"

class Event{
    constructor(event){
        this.event = event        
    }
    
    getEventDom(){
        const containerDom = this.getContainerDom()
        
        const imgDom = this.getImgDom()
        const imgFrameDom = this.getImgFrameDom()
        imgFrameDom.appendChild(imgDom)
                
        const cardDom = this.getCardDom()
        const cardBodyDom = new DomElement('div', {'class': 'card-body'})
        const cardHeaderDom = new DomElement('h2', {'class': 'card-title'})
        cardHeaderDom.insertText(this.event.title)
        
        const dateDom = this.getDateDom()
        dateDom.insertText(this.event.date)
        
        const locationDom = this.getLocationDom()
        locationDom.insertText(this.event.location)
        
        const deadLineDom = this.getDeadLineDom()
        deadLineDom.insertText('Apply before: ' + this.event.deadline)

        const detailsBtnDom = this.getDetailsBtnDom()
        detailsBtnDom.insertText('Show Details')
        detailsBtnDom.element.addEventListener('click', this.detailsBtnHandleClick, this)
        
        const cardBodyDomChildren = [cardHeaderDom, dateDom, locationDom, deadLineDom, detailsBtnDom]
        cardBodyDomChildren.forEach(dom=>DomElement.appendChild(cardBodyDom, dom))
        
        const cardDomChildren = [imgFrameDom, cardBodyDom]
        cardDomChildren.forEach(dom=>DomElement.appendChild(cardDom, dom))

        DomElement.appendChild(containerDom, cardDom)

        return containerDom
    }

    getContainerDom(){
        const navContainerDom = DomElement.getElement('#main-container>.nav-container')
        const navHeight = DomElement.getHeight(navContainerDom)
        const containerId = 'event-container'
        const containerStyles = {
            'padding': `${navHeight + 30}px 15px 15px 15px`,
            'display': 'flex',
            'flexWrap': 'wrap',
            'justifyContent': 'center'
        }
        const containerDom = new DomElement('div', { 'id': containerId }, containerStyles)
        return containerDom
    }

    getImgFrameDom(){
        const imgFrameStyle = {
            'margin': 'auto',
            'display': 'flex',
            'borderTopLeftRadius': '10px',
            'borderTopRightRadius': '10px'
        }
        return new DomElement('div', null, imgFrameStyle)
    }

    getImgDom(){
        const imgSrc = this.event.img
        const imgStyle = {
            'width': '100%',
            'borderTopLeftRadius': '10px',
            'borderTopRightRadius': '10px'
        }
        return new DomElement('img', {'src': imgSrc}, imgStyle)
    }

    getCardDom(){
        const cardStyle = {
            'width': '50%',
            'minWidth': '300px',
            'minHeight': '300px',
            'borderRadius': '10px',
            'boxShadow': '2px 2px 2px #666'
        }
        return new DomElement('div', {'class': 'card'}, cardStyle)
    }

    getDateDom(){
        const dateStyles = {
            'padding': '5px 25px',
            'backgroundImage': "url('./assets/images/hourglass.png')",
            'backgroundRepeat': 'no-repeat',
            'backgroundSize': '20px'
        }
        return new DomElement('div', null, dateStyles)
    }

    getLocationDom(){
        const locationStyles = {
            'padding': '5px 25px',
            'backgroundImage': "url('./assets/images/pin.png')",
            'backgroundRepeat': 'no-repeat',
            'backgroundSize': '20px',
            'backgroundPosition': '0 2px'
        }
        return new DomElement('div', null, locationStyles)
    }

    getDeadLineDom(){
        const deadLineStyes = {
            'padding': '5px 25px',
            'backgroundImage': "url('./assets/images/calendar.png')",
            'backgroundRepeat': 'no-repeat',
            'backgroundSize': '20px'    
        }
        return new DomElement('div', null, deadLineStyes)
    }

    getDetailsBtnDom(){
        const detailsBtnStyles = {
            'position': 'absolute',
            'right': '15px',
            'bottom': '15px'    
        }

        return new DomElement('button',
        {
            'class': 'btn btn-primary',
            'data-toggle': 'modal',
            'data-target': '#detailsModal'
        },
        detailsBtnStyles)
    }

    detailsBtnHandleClick = (e)=>{
        console.log(this)
        const modalTitleDom = DomElement.getElement('.modal-title')
        DomElement.setText(modalTitleDom, this.event.title)

        const modalBodyDom = DomElement.getElement('.modal-body')

        try{
            const existingDom = DomElement.getElement('#event-details')
            if(existingDom){
                DomElement.remove(existingDom)
            }
        }
        catch(err){
            console.log(err)
        }
        
        const wrapperDom = new DomElement('div', {'id': 'event-details'})
        this.populateDOM(this.event.content, wrapperDom)        
        DomElement.appendChild(modalBodyDom, wrapperDom)
    }

    populateDOM(contents, details){          
        for(const obj of contents){
            if(obj.hasOwnProperty('title')){
                const titleStyles = {
                    'paddingTop': '10px',
                    'paddingBottom': '5px'
                }
                const titleDom = new DomElement('h4', {'class': 'details-title'}, titleStyles)                
                titleDom.insertText(obj.title)
                DomElement.appendChild(details, titleDom)                
            }
            if(obj.hasOwnProperty('text')){
                const textDom = new DomElement('p', {'class': 'details-desc'})                
                textDom.insertText(obj.text)
                DomElement.appendChild(details, textDom)                
            }
            if(obj.hasOwnProperty('content')){
                this.populateDOM(obj.content,details)
            }
        }
        return details
    }
}

export default Event