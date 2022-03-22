const newYearData = new Date('22 March 2022 16:21:13')

const countdown = (date, selectors) => {

    const selectorDays = document.querySelector(`.${selectors.days}`);
    const selectorHours = document.querySelector(`.${selectors.hours}`);
    const selectorMinutes = document.querySelector(`.${selectors.minutes}`);
    const selectorSeconds = document.querySelector(`.${selectors.seconds}`);

    const timeCont = () => {
        const currentDate = new Date()
        const totalSeconds = Math.floor((date - currentDate) /1000);

        const formatTime = (time) => time > 9? time: `0${time}`;
        const biggerThen0 = (action) => totalSeconds > 0 ?action : 0;

        console.log(totalSeconds)
        if(totalSeconds <= 0){
            clearInterval(intervalId)
        }

        const days = biggerThen0(Math.floor(totalSeconds /3600/24));
        const hours = biggerThen0(Math.floor(totalSeconds /3600) % 24);
        const minutes = biggerThen0(Math.floor(totalSeconds / 60) % 60);
        const seconds = biggerThen0(Math.floor(totalSeconds ) % 60);
        
        selectorDays.textContent = formatTime(days);
        selectorHours.textContent = formatTime(hours) ;
        selectorMinutes.textContent = formatTime(minutes) ;
        selectorSeconds.textContent = formatTime(seconds) ;
    }

    const intervalId = setInterval(timeCont, 1000);
}

countdown(newYearData, {
    days:'days',
    hours:'hours',
    minutes:'minutes',
    seconds:'seconds'
});


