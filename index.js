// This is used for the functionality of the webpage
/**
 * Javescript handles events
 * It is event driven 
 */

 /**
  * You create a variable but you can change it 
  * If you don't use const then let might be more appropriete 
  * let varTwo = "World"
  */

 /**
  * This does something
  * If you know when something isn't going to change then use the const
  * Reduces bugs
  * const = varThree = "Three"
  * varThree = "Ghome" - This would cause an error
  */

    /**
     * This is an event listener, it defines what should happen when an event occurs. which is specified here.
     * So when I click it runs this code to cause an event
     *  ----- NOT WORKING -----
     */
    
    document.addEventListener("DOMContentLoaded", function (){
    document.addEventListener('click', function (event){
        if (event.target) { /** we are getting the class list of the element clicked */
            const elemClassList = event.target.classList
            const classname = elemClassList.value /* */
            const haveClickedACArListItem = classname.indexOf('car-list-item') >=0
            if (elemClassList.value.indexOf('car-list-item') >= 0) {
                const car = event.target.textContent 
                const selectedCarList = document.getElementById('cars-selected')
                const li = document.createElement('li')
                li.className = 'selected-car'
                li.innerText = car
                selectedCarList.appendChild(li)
                event.target.remove()
            }
           if (elemClassList.value.indexOf('selected-car') >= 0) {
                const car = event.target.textContent 
                const carList = document.getElementById('car-list')
                const li = document.createElement('li')
                li.innerText = car
                li.className = 'car-list-item'
                carList.appendChild(li)
                event.target.remove()
            }
        }
    })
})