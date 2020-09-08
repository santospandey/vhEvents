"use strict"
class DomElement{
    constructor(tagName, attributes, styles){
        this.element = document.createElement(tagName)
        if(attributes){
            for(const attribute in attributes){
                this.element.setAttribute(attribute, attributes[attribute])
            }        
        }
        if(styles){
            for(const style in styles){
                this.element.style[style] = styles[style]
            }
        }            
    }

    appendChild(childDom){        
        if(childDom instanceof HTMLElement){
            this.element.appendChild(childDom)
        }
        else if(childDom instanceof DomElement){
            this.element.appendChild(childDom.element)
        }
        else{
            throw "Not valid Html Element"
        }
    }

    insertText(text){
        this.element.textContent = text
    }

    static appendChild(parentDom, childDom){
        if((parentDom instanceof HTMLElement) && (childDom instanceof HTMLElement)){
            parentDom.appendChild(childDom)
        }
        else if((parentDom instanceof HTMLElement) && (childDom instanceof DomElement)){
            parentDom.appendChild(childDom.element)
        }
        else if((parentDom instanceof DomElement) && (childDom instanceof HTMLElement)){
            parentDom.element.appendChild(childDom)
        }
        else if((parentDom instanceof DomElement) && (childDom instanceof DomElement)){
            parentDom.element.appendChild(childDom.element)
        }
        else{
            throw "Not valid Html Element"
        }
    }

    static remove(domElem){
        try{
            domElem.remove()
        }
        catch(e){
            throw e.message
        }
    }

    static setText(element, text){
        if(element instanceof HTMLElement){
            element.textContent = text
        }
        return "Not Valid Html Element"
    }

    static getElement(query){
        const element = document.querySelector(query)
        if(element){
            return element
        }
        throw "Could not find element"
    }

    static getHeight(element){
        const height = element.offsetHeight
        if(height){
            return height
        }
        throw "Unknown element height"
    }


}

export default DomElement