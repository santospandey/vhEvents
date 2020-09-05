const events = [
    {
        "title": "Virtual Hiring For Women",
        "date": "September 21-25, 2020",
        "type": "meetup",
        "location": "Vancouver-Canada",
        "deadline": "2020-09-11",
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
container.style.paddingTop = `${navHeight+30}px`
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



    detailsBtn.addEventListener('click', function(event){
        
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
