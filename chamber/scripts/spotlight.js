const spotlight = document.querySelector('#spotlight');

const path = './data/members.json';

async function getMembers() {
    const response = await fetch(path);
    const data = await response.json();
    //   console.log(data);
    //https://www.freecodecamp.org/news/filter-arrays-in-javascript/
    //   const payingmembers = data.members.filter(member => member.level > 1);
    //console.log(payingmembers);
    // displayMembers(payingmembers);
}

// Fetch member data from the JSON file
async function fetchMembers() {
    try {
        const response = await fetch(path);
        if (response.ok) {
            const members = await response.json();
            // console.log(members); // testing only
            const payingmembers = members.filter(member => member.membership_level > 1);
            // console.log(payingmembers); // testing only
            displayMembers(payingmembers);
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayMembers = (myArray) =>{
    for (let step = 0; step < 3; step++) {
        const random = Math.floor(Math.random() * myArray.length);
        // console.log(random)
        let picked = myArray[random];
        myArray.splice(random, 1);
        //console.log(picked)
        // console.log(myArray)
        showOnPage(picked)
    } // end loop
}// end display members

function showOnPage(x) {
    // console.log(x)
    const sl = document.createElement('div')

    const name = document.createElement('h2')
    name.innerHTML = x.name
    sl.appendChild(name)

    const photo = document.createElement('img')
    photo.src = `images/${x.image}`
    photo.alt = x.name
    sl.appendChild(photo)

    const phone = document.createElement('p')
    phone.innerHTML = x.phone
    sl.appendChild(phone)

    const address = document.createElement('p')
    address.innerHTML = x.address
    sl.appendChild(address)

    const link = document.createElement('a')
    link.href = x.website
    link.textContent = "Visit Website"
    link.target = "_blank"
    sl.appendChild(link)
 
    const memberShipLevel = document.createElement('p')
    memberShipLevel.innerHTML = `Member Level is ${x.membership_level}`
    sl.appendChild(memberShipLevel)
    
    spotlight.appendChild(sl)
}

fetchMembers();