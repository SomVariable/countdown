const newYearData = new Date('23 March 2022 16:08:13')
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

countdown(newYearData, '.countdown-timer');


