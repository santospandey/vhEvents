import DomElement from "../js/dom-element.js"

class Dots{
    constructor(eventsDom){
        this.eventsDom = eventsDom
        this.dotsDom = []
        this.selectedIndex = 0
    }

    init(setViewFn, index){        
        this.fillDots(this.dotsDom[index])
        this.selectedIndex = index
        setViewFn(this.eventsDom[index])
    }

    getDotsDom(setViewFn){     
        const containerDom = new DomElement('div')
        this.dotsDom = this.eventsDom.map((event)=>{
            return new DomElement('img', {'src':'./assets/images/dot.png', 'alt':'dots'})        
        })

        this.dotsDom.forEach((dot, index, dotsDom)=>{
            dot.element.addEventListener('click', (e)=>{
                this.init(setViewFn, index)                
            })
            containerDom.appendChild(dot)
        })

        return containerDom        
    }
    
    fillDots(dot){        
        const prevSelectedDot = this.dotsDom[this.selectedIndex]
        prevSelectedDot.element.style.background = 'none'
        prevSelectedDot.element.style.borderRadius = 0

        dot.element.style.borderRadius = '50%'
        dot.element.style.background = '#111';
    }
}

export default Dots