const events = [
    {
        "title": "Virtual Hiring For Women",
        "date": "September 21-25, 2020",
        "type": "meetup",
        "location": "Vancouver-Canada",
        "deadline": "2020-09-11",
        "content": [
            {
                "title": "VanHack is hosting our first Virtual Hiring Event for Women the week of September 21st. If you are a woman developer and are looking for a job abroad you should apply."
            },
            {
                "title": "We are looking for candidates with:",
                "content": [
                    {
                        "text": "4+ years of professional experience"
                    },
                    {
                        "text": "Verified English"
                    }
                ]
            },
            {
                "title": "Here are some of the top skills companies are looking for right now",
                "content": [
                    {
                        "text": "ROR"
                    },
                    {
                        "text": "JavaScript"
                    },
                    {
                        "text": "Java"
                    },
                    {
                        "text": "React"
                    },
                    {
                        "text": "PHP"
                    },
                    {
                        "text": "C#"
                    }
                ]
            },
            {
                "title": "What to expect once you've applied: ",
                "content": [
                    {
                        "text": "You have until September 13th to complete your VanHack profile"
                    },
                    {
                        "text": "We will start the selection process the week of August 24th"
                    },
                    {
                        "text": "The selection process will take roughly a month"
                    },
                    {
                        "text": "If you receive a rejection it’s not because you haven't a good profile - we will be picking candidates based on what the companies ask for."
                    },
                    {
                        "text": "We will forward selected profiles to the participating companies"
                    }
                ]
            }
        ]
    },
    {
        "title": "Title2",
        "date": "2020-10-1",
        "type": "leap",
        "location": "Bhaktapur",
        "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Elit at imperdiet dui accumsan sit amet nulla facilisi morbi.
         Amet facilisis magna etiam tempor orci eu lobortis.
         Nunc vel risus commodo viverra maecenas. Et molestie ac feugiat sed lectus
         vestibulum mattis. Interdum consectetur libero id faucibus nisl tincidunt eget nullam.
         Amet risus nullam eget felis eget nunc. Arcu dictum varius duis at consectetur lorem donec
         massa sapien. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.
         Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.`
    },
    {
        "title": "Title3",
        "date": "2020-12-1",
        "type": "mission",
        "location": "Bhaktapur",
        "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Elit at imperdiet dui accumsan sit amet nulla facilisi morbi.
         Amet facilisis magna etiam tempor orci eu lobortis.
         Nunc vel risus commodo viverra maecenas. Et molestie ac feugiat sed lectus
         vestibulum mattis. Interdum consectetur libero id faucibus nisl tincidunt eget nullam.
         Amet risus nullam eget felis eget nunc. Arcu dictum varius duis at consectetur lorem donec
         massa sapien. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.
         Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.`
    },
    {
        "title": "Title3",
        "date": "2021-12-1",
        "type": "vanhackathon",
        "location": "Bhaktapur",
        "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Elit at imperdiet dui accumsan sit amet nulla facilisi morbi.
         Amet facilisis magna etiam tempor orci eu lobortis.
         Nunc vel risus commodo viverra maecenas. Et molestie ac feugiat sed lectus
         vestibulum mattis. Interdum consectetur libero id faucibus nisl tincidunt eget nullam.
         Amet risus nullam eget felis eget nunc. Arcu dictum varius duis at consectetur lorem donec
         massa sapien. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.
         Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.`
    },
    {
        "title": "Title3",
        "date": "2021-12-1",
        "type": "premium",
        "location": "Bhaktapur",
        "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Elit at imperdiet dui accumsan sit amet nulla facilisi morbi.
         Amet facilisis magna etiam tempor orci eu lobortis.
         Nunc vel risus commodo viverra maecenas. Et molestie ac feugiat sed lectus
         vestibulum mattis. Interdum consectetur libero id faucibus nisl tincidunt eget nullam.
         Amet risus nullam eget felis eget nunc. Arcu dictum varius duis at consectetur lorem donec
         massa sapien. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.
         Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.`
    },
    {
        "title": "Title3",
        "date": "2021-12-1",
        "type": "open",
        "location": "Bhaktapur",
        "description": `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Elit at imperdiet dui accumsan sit amet nulla facilisi morbi.
         Amet facilisis magna etiam tempor orci eu lobortis.
         Nunc vel risus commodo viverra maecenas. Et molestie ac feugiat sed lectus
         vestibulum mattis. Interdum consectetur libero id faucibus nisl tincidunt eget nullam.
         Amet risus nullam eget felis eget nunc. Arcu dictum varius duis at consectetur lorem donec
         massa sapien. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.
         Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed.`
    }
]

const navContainer = document.querySelector('#main-container>.nav-container')
const navHeight = navContainer.offsetHeight

const parent = document.querySelector('#container>.event-container')
const container = document.createElement('div')
container.style.padding = '15px'
container.style.paddingTop = `${navHeight + 30}px`
container.style.display = 'flex'
container.style.flexWrap = 'wrap'
container.style.justifyContent = 'center'

event = events[0]

// for(event of events){
const imgFrame = document.createElement('div')
// imgFrame.style.maxWidth = '100px'
imgFrame.style.margin = 'auto'
imgFrame.style.background = 'gray'
// imgFrame.style.marginTop = '15px'
imgFrame.style.display = 'flex'
imgFrame.style.borderTopLeftRadius = '10px'
imgFrame.style.borderTopRightRadius = '10px'
// imgFrame.style.opacity = '0.5'

const img = document.createElement('img')
img.src = './assets/images/pic3.jpg'
img.style.borderTopLeftRadius = '10px'
img.style.borderTopRightRadius = '10px'
img.style.width = '100%'

imgFrame.appendChild(img)

const card = document.createElement('div')
card.classList.add("card")
// card.style.margin = '10px'
card.style.width = '50%'
card.style.minWidth = '300px'
card.style.minHeight = '300px'
card.style.borderRadius = '10px'
card.style.boxShadow = '2px 2px 2px #666'

const cardBody = document.createElement('div')
cardBody.classList.add('card-body')

const cardHeader = document.createElement('h2')
cardHeader.classList.add('card-title')
cardHeader.textContent = event.title

const dateContainer = document.createElement('div')
dateContainer.textContent = event.date

const locationIcon = document.createElement('img')
locationIcon.src = './assets/images/pin.png'
locationIcon.alt = 'location icon'
locationIcon.style.width = '20px'

const locationContainer = document.createElement('div')
locationContainer.style.padding = '10px 0'
locationContainer.textContent = event.location
locationContainer.appendChild(locationIcon)
locationContainer.style.display = 'flex'
locationContainer.style.alignItems = 'center'

const deadlineContainer = document.createElement('div')
deadlineContainer.textContent = 'Apply before: ' + event.deadline


const detailsBtn = document.createElement('button')
detailsBtn.classList.add('btn', 'btn-primary')
detailsBtn.textContent = 'See Details'
detailsBtn.style.position = 'absolute'
detailsBtn.style.right = '15px'
detailsBtn.style.bottom = '15px'
detailsBtn.setAttribute('data-toggle', 'modal')
detailsBtn.setAttribute('data-target', '#detailsModal')


const dataToDom = function(contents, details){    
    for(const obj of contents){
        if(obj.hasOwnProperty('title')){
            const title = document.createElement('h4')
            title.classList.add('details-title')
            title.style.paddingTop = '10px'
            title.style.paddingBottom = '5px'
            title.textContent = obj.title
            details.appendChild(title)
        }
        if(obj.hasOwnProperty('text')){
            const text = document.createElement('p')
            text.classList.add('details-desc')
            text.textContent = obj.text
            details.appendChild(text)
        }
        if(obj.hasOwnProperty('content')){
            dataToDom(obj.content,details)            
        }       
    }
    return details
}


detailsBtn.addEventListener('click', function (e) {
    const modalTitle = document.querySelector('.modal-title')
    modalTitle.textContent = event.title

    const modalBody = document.querySelector('.modal-body')

    const wrapper = document.createElement('div')

    const elemDom = document.querySelector('#event-details')
    if(elemDom){
        elemDom.remove()
    }

    const details = document.createElement('div')
    details.setAttribute('id', 'event-details')

    const filledDom = dataToDom(event.content, details)

    wrapper.appendChild(filledDom)
    modalBody.appendChild(wrapper)
    
})

cardBody.appendChild(cardHeader)
cardBody.appendChild(dateContainer)
cardBody.appendChild(locationContainer)
cardBody.appendChild(deadlineContainer)
cardBody.appendChild(detailsBtn)
card.appendChild(imgFrame)
card.appendChild(cardBody)
container.appendChild(card)
// }

parent.appendChild(container)
