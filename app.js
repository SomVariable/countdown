const newYearData = new Date('23 March 2022 18:08:13')

const nYearData = new Date('23 March 2022 19:08:13')

//class variant

class Countdown{
    #state = {
        intervalId: null
    }

    #getTimeRemaining = (endTime) => {
        const currentDate = new Date()
        const totalSeconds = Math.floor((endTime - currentDate) /1000);

        const biggerThen0 = (action) => totalSeconds > 0 ?action : 0;

        const days = biggerThen0(Math.floor(totalSeconds /3600/24));
        const hours = biggerThen0(Math.floor(totalSeconds /3600) % 24);
        const minutes = biggerThen0(Math.floor(totalSeconds / 60) % 60);
        const seconds = biggerThen0(Math.floor(totalSeconds ) % 60);
        
        return {
            totalSeconds,
            days,
            hours,
            minutes,
            seconds
        } 
    }

    #cheackSelector = (parent, selector) => {
        const classSelector = parent.querySelector(`.${selector}`)
        const idSelector = parent.querySelector(`#${selector}`)
        if(classSelector) return classSelector
        else if(idSelector) return idSelector
        else throw 'something wrong'  
    }

    setClock = (endtime, selector) => {
        if(this.#state.intervalId !== null){
            return console.log('you alrady have timer')
        }
        console.log('we are here')
        this.#state.intervalId = setInterval(this.#updateClock(endtime, selector), 1000);
    }

    #updateClock = (endtime, selector) => {
        const selecorCountdown = document.querySelector(selector),
              selectorDays = this.#cheackSelector(selecorCountdown, 'days'),
              selectorHours = this.#cheackSelector(selecorCountdown, 'hours'),
              selectorMinutes = this.#cheackSelector(selecorCountdown, 'minutes'),
              selectorSeconds = this.#cheackSelector(selecorCountdown, 'seconds');

        const formatTime = (time) => time > 9? time: `0${time}`;
        return () => {
            const time = this.#getTimeRemaining(endtime)

            selectorDays.textContent = formatTime(time.days);
            selectorHours.textContent = formatTime(time.hours) ;
            selectorMinutes.textContent = formatTime(time.minutes) ;
            selectorSeconds.textContent = formatTime(time.seconds) ;

            selectorDays.textContent = formatTime(time.days);
            
            if(time.totalSeconds <= 0) clearInterval(this.#state.intervalId)

        }
    }
        

}

const newCount = new Countdown();

newCount.setClock(newYearData, '.countdown-timer')

const id = setInterval(()=> {
    newCount.setClock(nYearData, '.countdown-timer')
    clearInterval(id)
}, 10000)


// function variant
const countdown = (date, selector) => {

    const getTimeRemaining = (endTime) => {
        const currentDate = new Date()
        const totalSeconds = Math.floor((endTime - currentDate) /1000);

        const biggerThen0 = (action) => totalSeconds > 0 ?action : 0;

        const days = biggerThen0(Math.floor(totalSeconds /3600/24));
        const hours = biggerThen0(Math.floor(totalSeconds /3600) % 24);
        const minutes = biggerThen0(Math.floor(totalSeconds / 60) % 60);
        const seconds = biggerThen0(Math.floor(totalSeconds ) % 60);
        
        return {
            totalSeconds,
            days,
            hours,
            minutes,
            seconds
        } 
    }

    const setClock = (date, selector) => {
        const cheackSelector = (parent, selector) => {
            const classSelector = parent.querySelector(`.${selector}`)
            const idSelector = parent.querySelector(`#${selector}`)
            if(classSelector) return classSelector
            else if(idSelector) return idSelector
            else throw 'something wrong'  
        }

        const selecorCountdown = document.querySelector(selector),
              selectorDays = cheackSelector(selecorCountdown, 'days'),
              selectorHours = cheackSelector(selecorCountdown, 'hours'),
              selectorMinutes = cheackSelector(selecorCountdown, 'minutes'),
              selectorSeconds = cheackSelector(selecorCountdown, 'seconds');
        
        const intervalId = setInterval(updateClok, 1000);

        function updateClok(){
            const formatTime = (time) => time > 9? time: `0${time}`;

            const time = getTimeRemaining(date)

            selectorDays.textContent = formatTime(time.days);
            selectorHours.textContent = formatTime(time.hours) ;
            selectorMinutes.textContent = formatTime(time.minutes) ;
            selectorSeconds.textContent = formatTime(time.seconds) ;

            selectorDays.textContent = formatTime(time.days);
            
            if(time.totalSeconds <= 0) clearInterval(intervalId)
        }
    }

    setClock(date, selector)

}




