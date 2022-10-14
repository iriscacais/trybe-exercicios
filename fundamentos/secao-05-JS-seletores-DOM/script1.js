function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  createDaysOfTheWeek();
  
 function createDays() {
    let daysList = document.getElementById('days')
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    
    for (let index =0; index < decemberDaysList.length; index += 1) {
      let day =  document.createElement('li');
      day.innerHTML = decemberDaysList[index];
if (decemberDaysList[index]===24 || decemberDaysList[index]===31){
    day.classList = 'day holiday';
   daysList.appendChild(day);
} else if (decemberDaysList[index]===25){
    day.classList = 'day holiday friday';
daysList.appendChild(day);
} else if (decemberDaysList[index]===4 || decemberDaysList[index]===11 || decemberDaysList[index]===18){
    day.classList = 'day friday'
    daysList.appendChild(day);
}else{
    day.classList = 'day'
    daysList.appendChild(day);
}     
 }
}
createDays();

function criaBotao(Feriado) {
    let botao = document.getElementsByClassName('buttons-container');
    let element = documento.createElement ('div');
}