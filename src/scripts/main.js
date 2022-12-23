AOS.init();

const eventDate = new Date('Jun 22, 2023 09:00:00')
const timeStampEvent = eventDate.getTime() 

const setHours = setInterval(() =>{
    const now = new Date(); // setando a data do evento
    const timeStampAtual = now.getTime()//setando a datat do dia atual
//definindo quanto tempo falta para o evento em milisegundos
    const seteventDay = timeStampEvent - timeStampAtual;
//constantes de calcuos
    const daysInMS  = (1000 * 60 * 60 * 24);
    const hoursInMS = (1000 * 60 * 60);
    const minutesInMS = (1000 * 60);

// calculo dos dias
    const eventDay = Math.floor(seteventDay / daysInMS);
    //calculo das horas
    const eventHour = Math.floor((seteventDay % daysInMS/ hoursInMS ))
    //calculo dos minutos
    const eventMinute = Math.floor((seteventDay % hoursInMS / minutesInMS))
    //calculos dos segundos
    const eventSeconds = Math.floor((seteventDay % minutesInMS) /1000)


    document.getElementById('contador').innerHTML  = `${eventDay}d ${eventHour}h ${eventMinute}min ${eventSeconds}s `


    if(seteventDay < 0){
        clearInterval(setHours)
        document.getElementById('contador').style.color = 'red'
        document.getElementById('contador').innerHTML = 'O Evento já começou!'
    }
}, 1000)