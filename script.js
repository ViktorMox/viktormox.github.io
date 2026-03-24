document.getElementById('button1').addEventListener('click', function() {
    const oldContent2 = document.getElementById('Content2');
    const oldContent3 = document.getElementById('Content3');
    const oldContent4 = document.getElementById('Content4');
    const oldContent6 = document.getElementById('Content6');
    const oldContent7 = document.getElementById('Content7');
    const oldContent8 = document.getElementById('Content8');
    const oldContent9 = document.getElementById('Content9');
    const oldContent10 = document.getElementById('Content10');
    const oldContent11 = document.getElementById('Content11');
    const oldContent12 = document.getElementById('Content12');
    const oldContent13 = document.getElementById('Content13');
    const oldContent14 = document.getElementById('Content14');
    const newContent = document.getElementById('Content1'); 

    // Добавляем класс для исчезновения старого контента
    oldContent2.classList.add('fade-out');
    oldContent3.classList.add('fade-out');
    oldContent4.classList.add('fade-out');
    oldContent6.classList.add('fade-out');
    oldContent7.classList.add('fade-out');
    oldContent8.classList.add('fade-out');
    oldContent9.classList.add('fade-out');
    oldContent10.classList.add('fade-out');
    oldContent11.classList.add('fade-out');
    oldContent12.classList.add('fade-out');
    oldContent13.classList.add('fade-out');
    oldContent14.classList.add('fade-out');
    // Ждем, пока анимация закончится
    setTimeout(() => {
        oldContent2.classList.add('hidden');
        oldContent3.classList.add('hidden'); // Прячем старый контент
        oldContent4.classList.add('hidden');
        oldContent6.classList.add('hidden');
        oldContent7.classList.add('hidden');
        oldContent8.classList.add('hidden');
        oldContent9.classList.add('hidden');
        oldContent10.classList.add('hidden');
        oldContent11.classList.add('hidden');
        oldContent12.classList.add('hidden');
        oldContent13.classList.add('hidden');
        oldContent14.classList.add('hidden');
        newContent.classList.remove('hidden'); // Показываем новый контент
        newContent.classList.add('fade-in'); // Добавляем класс для появления нового контента
    }, 0); // Время, равное времени анимации исчезновения
});  

document.getElementById('button2').addEventListener('click', function() {
    const oldContent = document.getElementById('Content1');
    const oldContent3 = document.getElementById('Content3');
    const oldContent4 = document.getElementById('Content4');
    const oldContent6 = document.getElementById('Content6');
    const oldContent7 = document.getElementById('Content7');
    const oldContent8 = document.getElementById('Content8');
    const oldContent9 = document.getElementById('Content9');
    const oldContent10 = document.getElementById('Content10');
    const oldContent11 = document.getElementById('Content11');
    const oldContent12 = document.getElementById('Content12');
    const oldContent13 = document.getElementById('Content13');
    const oldContent14 = document.getElementById('Content14');
    const newContent = document.getElementById('Content2'); 

    // Добавляем класс для исчезновения старого контента
    oldContent.classList.add('fade-out');
    oldContent3.classList.add('fade-out');
    oldContent4.classList.add('fade-out');
    oldContent6.classList.add('fade-out');
    oldContent7.classList.add('fade-out');
    oldContent8.classList.add('fade-out');
    oldContent9.classList.add('fade-out');
    oldContent10.classList.add('fade-out');
    oldContent11.classList.add('fade-out');
    oldContent12.classList.add('fade-out');
    oldContent13.classList.add('fade-out');
    oldContent14.classList.add('fade-out');
    // Ждем, пока анимация закончится
    setTimeout(() => {
        oldContent3.classList.add('hidden');
        oldContent.classList.add('hidden'); // Прячем старый контент
        oldContent6.classList.add('hidden');
        oldContent7.classList.add('hidden');
        oldContent8.classList.add('hidden');
        oldContent9.classList.add('hidden');
        oldContent10.classList.add('hidden');
        oldContent11.classList.add('hidden');
        oldContent12.classList.add('hidden');
        oldContent13.classList.add('hidden');
        oldContent14.classList.add('hidden');
        newContent.classList.remove('hidden'); // Показываем новый контент
        newContent.classList.add('fade-in'); // Добавляем класс для появления нового контента
    }, 0); // Время, равное времени анимации исчезновения
});

document.getElementById('button3').addEventListener('click', function() {
    const oldContent = document.getElementById('Content1');
    const oldContent2 = document.getElementById('Content2');
    const oldContent4 = document.getElementById('Content4');
    const oldContent6 = document.getElementById('Content6');
    const oldContent7 = document.getElementById('Content7');
    const oldContent8 = document.getElementById('Content8');
    const oldContent9 = document.getElementById('Content9');
    const oldContent10 = document.getElementById('Content10');
    const oldContent11 = document.getElementById('Content11');
    const oldContent12 = document.getElementById('Content12');
    const oldContent13 = document.getElementById('Content13');
    const oldContent14 = document.getElementById('Content14');
    const newContent = document.getElementById('Content3'); 

    // Добавляем класс для исчезновения старого контента
    oldContent.classList.add('fade-out');
    oldContent2.classList.add('fade-out');
    oldContent4.classList.add('fade-out');
    oldContent6.classList.add('fade-out');
    oldContent7.classList.add('fade-out');
    oldContent8.classList.add('fade-out');
    oldContent9.classList.add('fade-out');
    oldContent10.classList.add('fade-out');
    oldContent11.classList.add('fade-out');
    oldContent12.classList.add('fade-out');
    oldContent13.classList.add('fade-out');
    oldContent14.classList.add('fade-out');
    // Ждем, пока анимация закончится
    setTimeout(() => {
        oldContent.classList.add('hidden');
        oldContent2.classList.add('hidden'); // Прячем старый контент
        oldContent4.classList.add('hidden');
        newContent.classList.remove('hidden');
        oldContent6.classList.add('hidden'); // Показываем новый контент
        oldContent7.classList.add('hidden');
        oldContent8.classList.add('hidden');
        oldContent9.classList.add('hidden');
        oldContent10.classList.add('hidden');
        oldContent11.classList.add('hidden');
        oldContent12.classList.add('hidden');
        oldContent13.classList.add('hidden');
        oldContent14.classList.add('hidden');
        newContent.classList.add('fade-in'); // Добавляем класс для появления нового контента
    }, 0); // Время, равное времени анимации исчезновения
});

document.getElementById('button4').addEventListener('click', function() {
    const oldContent = document.getElementById('Content1');
    const oldContent2 = document.getElementById('Content2');
    const oldContent3 = document.getElementById('Content3');
    const oldContent6 = document.getElementById('Content6');
    const oldContent7 = document.getElementById('Content7');
    const oldContent8 = document.getElementById('Content8');
    const oldContent9 = document.getElementById('Content9');
    const oldContent10 = document.getElementById('Content10');
    const oldContent11 = document.getElementById('Content11');
    const oldContent12 = document.getElementById('Content12');
    const oldContent13 = document.getElementById('Content13');
    const oldContent14 = document.getElementById('Content14');
    const newContent = document.getElementById('Content4'); 

    // Добавляем класс для исчезновения старого контента
    oldContent.classList.add('fade-out');
    oldContent2.classList.add('fade-out');
    oldContent3.classList.add('fade-out');
    oldContent6.classList.add('fade-out');
    oldContent7.classList.add('fade-out');
    oldContent8.classList.add('fade-out');
    oldContent9.classList.add('fade-out');
    oldContent10.classList.add('fade-out');
    oldContent11.classList.add('fade-out');
    oldContent12.classList.add('fade-out');
    oldContent13.classList.add('fade-out');
    oldContent14.classList.add('fade-out');
    // Ждем, пока анимация закончится
    setTimeout(() => {
        oldContent.classList.add('hidden');
        oldContent2.classList.add('hidden');
        oldContent3.classList.add('hidden'); // Прячем старый контент
        oldContent6.classList.add('hidden');
        oldContent7.classList.add('hidden');
        oldContent8.classList.add('hidden');
        oldContent9.classList.add('hidden');
        oldContent10.classList.add('hidden');
        oldContent11.classList.add('hidden');
        oldContent12.classList.add('hidden');
        oldContent13.classList.add('hidden');
        oldContent14.classList.add('hidden');
        newContent.classList.remove('hidden'); // Показываем новый контент
        newContent.classList.add('fade-in'); // Добавляем класс для появления нового контента
    }, 0); // Время, равное времени анимации исчезновения
});

document.getElementById('button6').addEventListener('click', function() {
    const oldContent = document.getElementById('Content1');
    const oldContent2 = document.getElementById('Content2');
    const oldContent3 = document.getElementById('Content3');
    const oldContent4 = document.getElementById('Content4');
    const oldContent7 = document.getElementById('Content7');
    const oldContent8 = document.getElementById('Content8');
    const oldContent9 = document.getElementById('Content9');
    const oldContent10 = document.getElementById('Content10');
    const oldContent11 = document.getElementById('Content11');
    const oldContent12 = document.getElementById('Content12');
    const oldContent13 = document.getElementById('Content13');
    const oldContent14 = document.getElementById('Content14');
    const newContent = document.getElementById('Content6'); 

    // Добавляем класс для исчезновения старого контента
    oldContent.classList.add('fade-out');
    oldContent2.classList.add('fade-out');
    oldContent3.classList.add('fade-out');
    oldContent4.classList.add('fade-out');
    oldContent7.classList.add('fade-out');
    oldContent8.classList.add('fade-out');
    oldContent9.classList.add('fade-out');
    oldContent10.classList.add('fade-out');
    oldContent11.classList.add('fade-out');
    oldContent12.classList.add('fade-out');
    oldContent13.classList.add('fade-out');
    oldContent14.classList.add('fade-out');
    // Ждем, пока анимация закончится
    setTimeout(() => {
        oldContent.classList.add('hidden');
        oldContent2.classList.add('hidden');
        oldContent3.classList.add('hidden'); // Прячем старый контент
        oldContent4.classList.add('hidden');
        oldContent7.classList.add('hidden');
        oldContent8.classList.add('hidden');
        oldContent9.classList.add('hidden');
        oldContent10.classList.add('hidden');
        oldContent11.classList.add('hidden');
        oldContent12.classList.add('hidden');
        oldContent13.classList.add('hidden');
        oldContent14.classList.add('hidden');
        newContent.classList.remove('hidden'); // Показываем новый контент
        newContent.classList.add('fade-in'); // Добавляем класс для появления нового контента
    }, 0); // Время, равное времени анимации исчезновения
});

document.getElementById('button7').addEventListener('click', function() {
    const oldContent = document.getElementById('Content1');
    const oldContent2 = document.getElementById('Content2');
    const oldContent3 = document.getElementById('Content3');
    const oldContent4 = document.getElementById('Content4');
    const oldContent6 = document.getElementById('Content6');
    const oldContent8 = document.getElementById('Content8');
    const oldContent9 = document.getElementById('Content9');
    const oldContent10 = document.getElementById('Content10');
    const oldContent11 = document.getElementById('Content11');
    const oldContent12 = document.getElementById('Content12');
    const oldContent13 = document.getElementById('Content13');
    const oldContent14 = document.getElementById('Content14');
    const newContent = document.getElementById('Content7'); 

    // Добавляем класс для исчезновения старого контента
    oldContent.classList.add('fade-out');
    oldContent2.classList.add('fade-out');
    oldContent3.classList.add('fade-out');
    oldContent4.classList.add('fade-out');
    oldContent6.classList.add('fade-out');
    oldContent8.classList.add('fade-out');
    oldContent9.classList.add('fade-out');
    oldContent10.classList.add('fade-out');
    oldContent11.classList.add('fade-out');
    oldContent12.classList.add('fade-out');
    oldContent13.classList.add('fade-out');
    oldContent14.classList.add('fade-out');
    // Ждем, пока анимация закончится
    setTimeout(() => {
        oldContent.classList.add('hidden');
        oldContent2.classList.add('hidden');
        oldContent3.classList.add('hidden'); // Прячем старый контент
        oldContent4.classList.add('hidden');
        oldContent6.classList.add('hidden');
        oldContent8.classList.add('hidden');
        oldContent9.classList.add('hidden');
        oldContent10.classList.add('hidden');
        oldContent11.classList.add('hidden');
        oldContent12.classList.add('hidden');
        oldContent13.classList.add('hidden');
        oldContent14.classList.add('hidden');
        newContent.classList.remove('hidden'); // Показываем новый контент
        newContent.classList.add('fade-in'); // Добавляем класс для появления нового контента
    }, 0); // Время, равное времени анимации исчезновения
});

document.getElementById('button8').addEventListener('click', function() {
    const oldContent = document.getElementById('Content1');
    const oldContent2 = document.getElementById('Content2');
    const oldContent3 = document.getElementById('Content3');
    const oldContent4 = document.getElementById('Content4');
    const oldContent6 = document.getElementById('Content6');
    const oldContent7 = document.getElementById('Content7');
    const oldContent9 = document.getElementById('Content9');
    const oldContent10 = document.getElementById('Content10');
    const oldContent11 = document.getElementById('Content11');
    const oldContent12 = document.getElementById('Content12');
    const oldContent13 = document.getElementById('Content13');
    const oldContent14 = document.getElementById('Content14');
    const newContent = document.getElementById('Content8'); 

    // Добавляем класс для исчезновения старого контента
    oldContent.classList.add('fade-out');
    oldContent2.classList.add('fade-out');
    oldContent3.classList.add('fade-out');
    oldContent4.classList.add('fade-out');
    oldContent6.classList.add('fade-out');
    oldContent7.classList.add('fade-out');
    oldContent9.classList.add('fade-out');
    oldContent10.classList.add('fade-out');
    oldContent11.classList.add('fade-out');
    oldContent12.classList.add('fade-out');
    oldContent13.classList.add('fade-out');
    oldContent14.classList.add('fade-out');
    // Ждем, пока анимация закончится
    setTimeout(() => {
        oldContent.classList.add('hidden');
        oldContent2.classList.add('hidden');
        oldContent3.classList.add('hidden'); // Прячем старый контент
        oldContent4.classList.add('hidden');
        oldContent6.classList.add('hidden');
        oldContent7.classList.add('hidden');
        oldContent9.classList.add('hidden');
        oldContent10.classList.add('hidden');
        oldContent11.classList.add('hidden');
        oldContent12.classList.add('hidden');
        oldContent13.classList.add('hidden');
        oldContent14.classList.add('hidden');
        newContent.classList.remove('hidden'); // Показываем новый контент
        newContent.classList.add('fade-in'); // Добавляем класс для появления нового контента
    }, 0); // Время, равное времени анимации исчезновения
});

document.getElementById('button9').addEventListener('click', function() {
    const oldContent = document.getElementById('Content1');
    const oldContent2 = document.getElementById('Content2');
    const oldContent3 = document.getElementById('Content3');
    const oldContent4 = document.getElementById('Content4');
    const oldContent6 = document.getElementById('Content6');
    const oldContent7 = document.getElementById('Content7');
    const oldContent8 = document.getElementById('Content8');
    const oldContent10 = document.getElementById('Content10');
    const oldContent11 = document.getElementById('Content11');
    const oldContent12 = document.getElementById('Content12');
    const oldContent13 = document.getElementById('Content13');
    const oldContent14 = document.getElementById('Content14');
    const newContent = document.getElementById('Content9'); 

    // Добавляем класс для исчезновения старого контента
    oldContent.classList.add('fade-out');
    oldContent2.classList.add('fade-out');
    oldContent3.classList.add('fade-out');
    oldContent4.classList.add('fade-out');
    oldContent6.classList.add('fade-out');
    oldContent7.classList.add('fade-out');
    oldContent8.classList.add('fade-out');
    oldContent10.classList.add('fade-out');
    oldContent11.classList.add('fade-out');
    oldContent12.classList.add('fade-out');
    oldContent13.classList.add('fade-out');
    oldContent14.classList.add('fade-out');
    // Ждем, пока анимация закончится
    setTimeout(() => {
        oldContent.classList.add('hidden');
        oldContent2.classList.add('hidden');
        oldContent3.classList.add('hidden'); // Прячем старый контент
        oldContent4.classList.add('hidden');
        oldContent6.classList.add('hidden');
        oldContent7.classList.add('hidden');
        oldContent8.classList.add('hidden');
        oldContent10.classList.add('hidden');
        oldContent11.classList.add('hidden');
        oldContent12.classList.add('hidden');
        oldContent13.classList.add('hidden');
        oldContent14.classList.add('hidden');
        newContent.classList.remove('hidden'); // Показываем новый контент
        newContent.classList.add('fade-in'); // Добавляем класс для появления нового контента
    }, 0); // Время, равное времени анимации исчезновения
});

document.getElementById('button10').addEventListener('click', function() {
    const oldContent = document.getElementById('Content1');
    const oldContent2 = document.getElementById('Content2');
    const oldContent3 = document.getElementById('Content3');
    const oldContent4 = document.getElementById('Content4');
    const oldContent6 = document.getElementById('Content6');
    const oldContent7 = document.getElementById('Content7');
    const oldContent8 = document.getElementById('Content8');
    const oldContent9 = document.getElementById('Content9');
    const oldContent11 = document.getElementById('Content11');
    const oldContent12 = document.getElementById('Content12');
    const oldContent13 = document.getElementById('Content13');
    const oldContent14 = document.getElementById('Content14');
    const newContent = document.getElementById('Content10'); 

    // Добавляем класс для исчезновения старого контента
    oldContent.classList.add('fade-out');
    oldContent2.classList.add('fade-out');
    oldContent3.classList.add('fade-out');
    oldContent4.classList.add('fade-out');
    oldContent6.classList.add('fade-out');
    oldContent7.classList.add('fade-out');
    oldContent8.classList.add('fade-out');
    oldContent9.classList.add('fade-out');
    oldContent11.classList.add('fade-out');
    oldContent12.classList.add('fade-out');
    oldContent13.classList.add('fade-out');
    oldContent14.classList.add('fade-out');
    // Ждем, пока анимация закончится
    setTimeout(() => {
        oldContent.classList.add('hidden');
        oldContent2.classList.add('hidden');
        oldContent3.classList.add('hidden'); // Прячем старый контент
        oldContent4.classList.add('hidden');
        oldContent6.classList.add('hidden');
        oldContent7.classList.add('hidden');
        oldContent8.classList.add('hidden');
        oldContent9.classList.add('hidden');
        oldContent11.classList.add('hidden');
        oldContent12.classList.add('hidden');
        oldContent13.classList.add('hidden');
        oldContent14.classList.add('hidden');
        newContent.classList.remove('hidden'); // Показываем новый контент
        newContent.classList.add('fade-in'); // Добавляем класс для появления нового контента
    }, 0);// Время, равное времени анимации исчезновения
});
  
document.getElementById('button11').addEventListener('click', function() {
    const oldContent1 = document.getElementById('Content1');
    const oldContent2 = document.getElementById('Content2');
    const oldContent3 = document.getElementById('Content3');
    const oldContent4 = document.getElementById('Content4');
    const oldContent6 = document.getElementById('Content6');
    const oldContent7 = document.getElementById('Content7');
    const oldContent8 = document.getElementById('Content8');
    const oldContent9 = document.getElementById('Content9');
    const oldContent10 = document.getElementById('Content10');
    const oldContent12 = document.getElementById('Content12');
    const oldContent13 = document.getElementById('Content13');
    const oldContent14 = document.getElementById('Content14');
    const newContent = document.getElementById('Content11'); 
    
    // Добавляем класс для исчезновения старого контента
    oldContent1.classList.add('fade-out');
    oldContent2.classList.add('fade-out');
    oldContent3.classList.add('fade-out');
    oldContent4.classList.add('fade-out');
    oldContent6.classList.add('fade-out');
    oldContent7.classList.add('fade-out');
    oldContent8.classList.add('fade-out');
    oldContent9.classList.add('fade-out');
    oldContent10.classList.add('fade-out');
    oldContent12.classList.add('fade-out');
    oldContent13.classList.add('fade-out');
    oldContent14.classList.add('fade-out');
    // Ждем, пока анимация закончится
    setTimeout(() => {
        oldContent1.classList.add('hidden');
        oldContent2.classList.add('hidden');
        oldContent3.classList.add('hidden'); // Прячем старый контент
        oldContent4.classList.add('hidden');
        oldContent6.classList.add('hidden');
        oldContent7.classList.add('hidden');
        oldContent8.classList.add('hidden');
        oldContent9.classList.add('hidden');
        oldContent10.classList.add('hidden');
        oldContent12.classList.add('hidden');
        oldContent13.classList.add('hidden');
        oldContent14.classList.add('hidden');
        newContent.classList.remove('hidden'); // Показываем новый контент
        newContent.classList.add('fade-in'); // Добавляем класс для появления нового контента
    }, 0); // Время, равное времени анимации исчезновения
});

document.getElementById('button12').addEventListener('click', function() {
    const oldContent1 = document.getElementById('Content1');
    const oldContent2 = document.getElementById('Content2');
    const oldContent3 = document.getElementById('Content3');
    const oldContent4 = document.getElementById('Content4');
    const oldContent6 = document.getElementById('Content6');
    const oldContent7 = document.getElementById('Content7');
    const oldContent8 = document.getElementById('Content8');
    const oldContent9 = document.getElementById('Content9');
    const oldContent10 = document.getElementById('Content10');
    const oldContent11 = document.getElementById('Content11');
    const oldContent13 = document.getElementById('Content13');
    const oldContent14 = document.getElementById('Content14');
    const newContent = document.getElementById('Content12'); 
    
    // Добавляем класс для исчезновения старого контента
    oldContent1.classList.add('fade-out');
    oldContent2.classList.add('fade-out');
    oldContent3.classList.add('fade-out');
    oldContent4.classList.add('fade-out');
    oldContent6.classList.add('fade-out');
    oldContent7.classList.add('fade-out');
    oldContent8.classList.add('fade-out');
    oldContent9.classList.add('fade-out');
    oldContent10.classList.add('fade-out');
    oldContent11.classList.add('fade-out');
    oldContent13.classList.add('fade-out');
    oldContent14.classList.add('fade-out');
    // Ждем, пока анимация закончится
    setTimeout(() => {
        oldContent1.classList.add('hidden');
        oldContent2.classList.add('hidden');
        oldContent3.classList.add('hidden'); // Прячем старый контент
        oldContent4.classList.add('hidden');
        oldContent6.classList.add('hidden');
        oldContent7.classList.add('hidden');
        oldContent8.classList.add('hidden');
        oldContent9.classList.add('hidden');
        oldContent10.classList.add('hidden');
        oldContent11.classList.add('hidden');
        oldContent13.classList.add('hidden');
        oldContent14.classList.add('hidden');
        newContent.classList.remove('hidden'); // Показываем новый контент
        newContent.classList.add('fade-in'); // Добавляем класс для появления нового контента
    }, 0); // Время, равное времени анимации исчезновения
});

document.getElementById('button13').addEventListener('click', function() {
    const oldContent1 = document.getElementById('Content1');
    const oldContent2 = document.getElementById('Content2');
    const oldContent3 = document.getElementById('Content3');
    const oldContent4 = document.getElementById('Content4');
    const oldContent6 = document.getElementById('Content6');
    const oldContent7 = document.getElementById('Content7');
    const oldContent8 = document.getElementById('Content8');
    const oldContent9 = document.getElementById('Content9');
    const oldContent10 = document.getElementById('Content10');
    const oldContent11 = document.getElementById('Content11');
    const oldContent12 = document.getElementById('Content12');
    const oldContent14 = document.getElementById('Content14');
    const newContent = document.getElementById('Content13'); 
    
    // Добавляем класс для исчезновения старого контента
    oldContent1.classList.add('fade-out');
    oldContent2.classList.add('fade-out');
    oldContent3.classList.add('fade-out');
    oldContent4.classList.add('fade-out');
    oldContent6.classList.add('fade-out');
    oldContent7.classList.add('fade-out');
    oldContent8.classList.add('fade-out');
    oldContent9.classList.add('fade-out');
    oldContent10.classList.add('fade-out');
    oldContent11.classList.add('fade-out');
    oldContent12.classList.add('fade-out');
    oldContent14.classList.add('fade-out');
    // Ждем, пока анимация закончится
    setTimeout(() => {
        oldContent1.classList.add('hidden');
        oldContent2.classList.add('hidden');
        oldContent3.classList.add('hidden'); // Прячем старый контент
        oldContent4.classList.add('hidden');
        oldContent6.classList.add('hidden');
        oldContent7.classList.add('hidden');
        oldContent8.classList.add('hidden');
        oldContent9.classList.add('hidden');
        oldContent10.classList.add('hidden');
        oldContent11.classList.add('hidden');
        oldContent12.classList.add('hidden');
        oldContent14.classList.add('hidden');
        newContent.classList.remove('hidden'); // Показываем новый контент
        newContent.classList.add('fade-in'); // Добавляем класс для появления нового контента
    }, 0); // Время, равное времени анимации исчезновения
});

document.getElementById('button16').addEventListener('click', function() {
    const oldContent1 = document.getElementById('Content1');
    const oldContent2 = document.getElementById('Content2');
    const oldContent3 = document.getElementById('Content3');
    const oldContent4 = document.getElementById('Content4');
    const oldContent6 = document.getElementById('Content6');
    const oldContent7 = document.getElementById('Content7');
    const oldContent8 = document.getElementById('Content8');
    const oldContent9 = document.getElementById('Content9');
    const oldContent10 = document.getElementById('Content10');
    const oldContent11 = document.getElementById('Content11');
    const oldContent12 = document.getElementById('Content12');
    const oldContent13 = document.getElementById('Content13');
    const newContent = document.getElementById('Content14'); 
    
    // Добавляем класс для исчезновения старого контента
    oldContent1.classList.add('fade-out');
    oldContent2.classList.add('fade-out');
    oldContent3.classList.add('fade-out');
    oldContent4.classList.add('fade-out');
    oldContent6.classList.add('fade-out');
    oldContent7.classList.add('fade-out');
    oldContent8.classList.add('fade-out');
    oldContent9.classList.add('fade-out');
    oldContent10.classList.add('fade-out');
    oldContent11.classList.add('fade-out');
    oldContent12.classList.add('fade-out');
    oldContent13.classList.add('fade-out');
    // Ждем, пока анимация закончится
    setTimeout(() => {
        oldContent1.classList.add('hidden');
        oldContent2.classList.add('hidden');
        oldContent3.classList.add('hidden'); // Прячем старый контент
        oldContent4.classList.add('hidden');
        oldContent6.classList.add('hidden');
        oldContent7.classList.add('hidden');
        oldContent8.classList.add('hidden');
        oldContent9.classList.add('hidden');
        oldContent10.classList.add('hidden');
        oldContent11.classList.add('hidden');
        oldContent12.classList.add('hidden');
        oldContent13.classList.add('hidden');
        newContent.classList.remove('hidden'); // Показываем новый контент
        newContent.classList.add('fade-in'); // Добавляем класс для появления нового контента
    }, 0); // Время, равное времени анимации исчезновения
});

document.getElementById("button1").onclick = function(){
            this.style.backgroundColor ="#303030";
            this.style.color ="white"
  
  
document.getElementById("button2").style.backgroundColor ="#141414";
  
document.getElementById("button2").style.color ="gray";  
 
document.getElementById("button3").style.backgroundColor ="#141414";
  
document.getElementById("button3").style.color ="gray";  
  
document.getElementById("button4").style.backgroundColor ="#141414";
document.getElementById("button4").style.color ="gray"; 

document.getElementById("button6").style.backgroundColor ="#141414";
document.getElementById("button6").style.color ="gray"; 
  
document.getElementById("button7").style.backgroundColor ="#141414";
document.getElementById("button7").style.color ="gray";
  
document.getElementById("button8").style.backgroundColor ="#141414";
document.getElementById("button8").style.color ="gray";
  
document.getElementById("button9").style.backgroundColor ="#141414";
document.getElementById("button9").style.color ="gray";
  
document.getElementById("button10").style.backgroundColor ="#141414";
document.getElementById("button10").style.color ="gray";  
  
document.getElementById("button11").style.backgroundColor ="#141414";
document.getElementById("button11").style.color ="gray";
  
document.getElementById("button12").style.backgroundColor ="#141414";
document.getElementById("button12").style.color ="gray";

document.getElementById("button13").style.backgroundColor ="#141414";
document.getElementById("button13").style.color ="gray";
  
document.getElementById("button14").style.backgroundColor ="#141414";
document.getElementById("button14").style.color ="gray";
  
document.getElementById("button15").style.backgroundColor ="#141414";
document.getElementById("button15").style.color ="gray";
  
document.getElementById("button16").style.backgroundColor ="#141414";
document.getElementById("button16").style.color ="gray";
}
//..кнопка1..//
document.getElementById("button2").onclick = function(){
            this.style.backgroundColor ="#303030";
            this.style.color ="white"
  
document.getElementById("button1").style.backgroundColor ="#141414";
document.getElementById("button1").style.color ="gray";  
 
document.getElementById("button3").style.backgroundColor ="#141414";
document.getElementById("button3").style.color ="gray";  
  
document.getElementById("button4").style.backgroundColor ="#141414";
document.getElementById("button4").style.color ="gray"; 

document.getElementById("button6").style.backgroundColor ="#141414";
document.getElementById("button6").style.color ="gray"; 
  
document.getElementById("button7").style.backgroundColor ="#141414";
document.getElementById("button7").style.color ="gray";
  
document.getElementById("button8").style.backgroundColor ="#141414";
document.getElementById("button8").style.color ="gray";
  
document.getElementById("button9").style.backgroundColor ="#141414";
document.getElementById("button9").style.color ="gray";
  
document.getElementById("button10").style.backgroundColor ="#141414";
document.getElementById("button10").style.color ="gray";  
  
document.getElementById("button11").style.backgroundColor ="#141414";
document.getElementById("button11").style.color ="gray";
  
document.getElementById("button12").style.backgroundColor ="#141414";
document.getElementById("button12").style.color ="gray";

document.getElementById("button13").style.backgroundColor ="#141414";
document.getElementById("button13").style.color ="gray";
  
document.getElementById("button14").style.backgroundColor ="#141414";
document.getElementById("button14").style.color ="gray";
  
document.getElementById("button15").style.backgroundColor ="#141414";
document.getElementById("button15").style.color ="gray";
  
document.getElementById("button16").style.backgroundColor ="#141414";
document.getElementById("button16").style.color ="gray";
}
//..кнопка2..//
document.getElementById("button3").onclick = function(){
            this.style.backgroundColor ="#303030";
            this.style.color ="white"
  
document.getElementById("button1").style.backgroundColor ="#141414";
document.getElementById("button1").style.color ="gray";  
 
document.getElementById("button2").style.backgroundColor ="#141414";
document.getElementById("button2").style.color ="gray";  
  
document.getElementById("button4").style.backgroundColor ="#141414";
document.getElementById("button4").style.color ="gray"; 

document.getElementById("button6").style.backgroundColor ="#141414";
document.getElementById("button6").style.color ="gray"; 
  
document.getElementById("button7").style.backgroundColor ="#141414";
document.getElementById("button7").style.color ="gray";
  
document.getElementById("button8").style.backgroundColor ="#141414";
document.getElementById("button8").style.color ="gray";
  
document.getElementById("button9").style.backgroundColor ="#141414";
document.getElementById("button9").style.color ="gray";
  
document.getElementById("button10").style.backgroundColor ="#141414";
document.getElementById("button10").style.color ="gray";  
  
document.getElementById("button11").style.backgroundColor ="#141414";
document.getElementById("button11").style.color ="gray";
  
document.getElementById("button12").style.backgroundColor ="#141414";
document.getElementById("button12").style.color ="gray";

document.getElementById("button13").style.backgroundColor ="#141414";
document.getElementById("button13").style.color ="gray";
  
document.getElementById("button14").style.backgroundColor ="#141414";
document.getElementById("button14").style.color ="gray";
  
document.getElementById("button15").style.backgroundColor ="#141414";
document.getElementById("button15").style.color ="gray";
  
document.getElementById("button16").style.backgroundColor ="#141414";
document.getElementById("button16").style.color ="gray";
}
//..кнопка3..//
document.getElementById("button4").onclick = function(){
            this.style.backgroundColor ="#303030";
            this.style.color ="white"
  
document.getElementById("button1").style.backgroundColor ="#141414";
document.getElementById("button1").style.color ="gray";  
 
document.getElementById("button2").style.backgroundColor ="#141414";
document.getElementById("button2").style.color ="gray";  
  
document.getElementById("button3").style.backgroundColor ="#141414";
document.getElementById("button3").style.color ="gray"; 

document.getElementById("button6").style.backgroundColor ="#141414";
document.getElementById("button6").style.color ="gray"; 
  
document.getElementById("button7").style.backgroundColor ="#141414";
document.getElementById("button7").style.color ="gray";
  
document.getElementById("button8").style.backgroundColor ="#141414";
document.getElementById("button8").style.color ="gray";
  
document.getElementById("button9").style.backgroundColor ="#141414";
document.getElementById("button9").style.color ="gray";
  
document.getElementById("button10").style.backgroundColor ="#141414";
document.getElementById("button10").style.color ="gray";  
  
document.getElementById("button11").style.backgroundColor ="#141414";
document.getElementById("button11").style.color ="gray";
  
document.getElementById("button12").style.backgroundColor ="#141414";
document.getElementById("button12").style.color ="gray";

document.getElementById("button13").style.backgroundColor ="#141414";
document.getElementById("button13").style.color ="gray";
  
document.getElementById("button14").style.backgroundColor ="#141414";
document.getElementById("button14").style.color ="gray";
  
document.getElementById("button15").style.backgroundColor ="#141414";
document.getElementById("button15").style.color ="gray";
  
document.getElementById("button16").style.backgroundColor ="#141414";
document.getElementById("button16").style.color ="gray";
}
//..кнопка4..//
document.getElementById("button6").onclick = function(){
            this.style.backgroundColor ="#303030";
            this.style.color ="white"
  
document.getElementById("button1").style.backgroundColor ="#141414";
document.getElementById("button1").style.color ="gray";  
 
document.getElementById("button2").style.backgroundColor ="#141414";
document.getElementById("button2").style.color ="gray";  
  
document.getElementById("button3").style.backgroundColor ="#141414";
document.getElementById("button3").style.color ="gray"; 
  
document.getElementById("button4").style.backgroundColor ="#141414";
document.getElementById("button4").style.color ="gray"; 
  
document.getElementById("button7").style.backgroundColor ="#141414";
document.getElementById("button7").style.color ="gray";
  
document.getElementById("button8").style.backgroundColor ="#141414";
document.getElementById("button8").style.color ="gray";
  
document.getElementById("button9").style.backgroundColor ="#141414";
document.getElementById("button9").style.color ="gray";
  
document.getElementById("button10").style.backgroundColor ="#141414";
document.getElementById("button10").style.color ="gray";  
  
document.getElementById("button11").style.backgroundColor ="#141414";
document.getElementById("button11").style.color ="gray";
  
document.getElementById("button12").style.backgroundColor ="#141414";
document.getElementById("button12").style.color ="gray";

document.getElementById("button13").style.backgroundColor ="#141414";
document.getElementById("button13").style.color ="gray";
  
document.getElementById("button14").style.backgroundColor ="#141414";
document.getElementById("button14").style.color ="gray";
  
document.getElementById("button15").style.backgroundColor ="#141414";
document.getElementById("button15").style.color ="gray";
  
document.getElementById("button16").style.backgroundColor ="#141414";
document.getElementById("button16").style.color ="gray";
}
//..кнопка6..//
document.getElementById("button7").onclick = function(){
            this.style.backgroundColor ="#303030";
            this.style.color ="white"
  
document.getElementById("button1").style.backgroundColor ="#141414";
document.getElementById("button1").style.color ="gray";  
 
document.getElementById("button2").style.backgroundColor ="#141414";
document.getElementById("button2").style.color ="gray";  
  
document.getElementById("button3").style.backgroundColor ="#141414";
document.getElementById("button3").style.color ="gray"; 
  
document.getElementById("button4").style.backgroundColor ="#141414";
document.getElementById("button4").style.color ="gray"; 
  
document.getElementById("button6").style.backgroundColor ="#141414";
document.getElementById("button6").style.color ="gray";
  
document.getElementById("button8").style.backgroundColor ="#141414";
document.getElementById("button8").style.color ="gray";
  
document.getElementById("button9").style.backgroundColor ="#141414";
document.getElementById("button9").style.color ="gray";
  
document.getElementById("button10").style.backgroundColor ="#141414";
document.getElementById("button10").style.color ="gray";  
  
document.getElementById("button11").style.backgroundColor ="#141414";
document.getElementById("button11").style.color ="gray";
  
document.getElementById("button12").style.backgroundColor ="#141414";
document.getElementById("button12").style.color ="gray";

document.getElementById("button13").style.backgroundColor ="#141414";
document.getElementById("button13").style.color ="gray";
  
document.getElementById("button14").style.backgroundColor ="#141414";
document.getElementById("button14").style.color ="gray";
  
document.getElementById("button15").style.backgroundColor ="#141414";
document.getElementById("button15").style.color ="gray";
  
document.getElementById("button16").style.backgroundColor ="#141414";
document.getElementById("button16").style.color ="gray";
}
//..кнопка7..//
document.getElementById("button8").onclick = function(){
            this.style.backgroundColor ="#303030";
            this.style.color ="white"
  
document.getElementById("button1").style.backgroundColor ="#141414";
document.getElementById("button1").style.color ="gray";  
 
document.getElementById("button2").style.backgroundColor ="#141414";
document.getElementById("button2").style.color ="gray";  
  
document.getElementById("button3").style.backgroundColor ="#141414";
document.getElementById("button3").style.color ="gray"; 
  
document.getElementById("button4").style.backgroundColor ="#141414";
document.getElementById("button4").style.color ="gray"; 
  
document.getElementById("button6").style.backgroundColor ="#141414";
document.getElementById("button6").style.color ="gray";
  
document.getElementById("button7").style.backgroundColor ="#141414";
document.getElementById("button7").style.color ="gray";
  
document.getElementById("button9").style.backgroundColor ="#141414";
document.getElementById("button9").style.color ="gray";
  
document.getElementById("button10").style.backgroundColor ="#141414";
document.getElementById("button10").style.color ="gray";  
  
document.getElementById("button11").style.backgroundColor ="#141414";
document.getElementById("button11").style.color ="gray";
  
document.getElementById("button12").style.backgroundColor ="#141414";
document.getElementById("button12").style.color ="gray";

document.getElementById("button13").style.backgroundColor ="#141414";
document.getElementById("button13").style.color ="gray";
  
document.getElementById("button14").style.backgroundColor ="#141414";
document.getElementById("button14").style.color ="gray";
  
document.getElementById("button15").style.backgroundColor ="#141414";
document.getElementById("button15").style.color ="gray";
  
document.getElementById("button16").style.backgroundColor ="#141414";
document.getElementById("button16").style.color ="gray";
}
//..кнопка8..//
document.getElementById("button9").onclick = function(){
            this.style.backgroundColor ="#303030";
            this.style.color ="white"
  
document.getElementById("button1").style.backgroundColor ="#141414";
document.getElementById("button1").style.color ="gray";  
 
document.getElementById("button2").style.backgroundColor ="#141414";
document.getElementById("button2").style.color ="gray";  
  
document.getElementById("button3").style.backgroundColor ="#141414";
document.getElementById("button3").style.color ="gray"; 
  
document.getElementById("button4").style.backgroundColor ="#141414";
document.getElementById("button4").style.color ="gray"; 
  
document.getElementById("button6").style.backgroundColor ="#141414";
document.getElementById("button6").style.color ="gray";
  
document.getElementById("button7").style.backgroundColor ="#141414";
document.getElementById("button7").style.color ="gray";
  
document.getElementById("button8").style.backgroundColor ="#141414";
document.getElementById("button8").style.color ="gray";
  
document.getElementById("button10").style.backgroundColor ="#141414";
document.getElementById("button10").style.color ="gray";  
  
document.getElementById("button11").style.backgroundColor ="#141414";
document.getElementById("button11").style.color ="gray";
  
document.getElementById("button12").style.backgroundColor ="#141414";
document.getElementById("button12").style.color ="gray";

document.getElementById("button13").style.backgroundColor ="#141414";
document.getElementById("button13").style.color ="gray";
  
document.getElementById("button14").style.backgroundColor ="#141414";
document.getElementById("button14").style.color ="gray";
  
document.getElementById("button15").style.backgroundColor ="#141414";
document.getElementById("button15").style.color ="gray";
  
document.getElementById("button16").style.backgroundColor ="#141414";
document.getElementById("button16").style.color ="gray";
}
//..кнопка9..//
document.getElementById("button10").onclick = function(){
            this.style.backgroundColor ="#303030";
            this.style.color ="white"
  
document.getElementById("button1").style.backgroundColor ="#141414";
document.getElementById("button1").style.color ="gray";  
 
document.getElementById("button2").style.backgroundColor ="#141414";
document.getElementById("button2").style.color ="gray";  
  
document.getElementById("button3").style.backgroundColor ="#141414";
document.getElementById("button3").style.color ="gray"; 
  
document.getElementById("button4").style.backgroundColor ="#141414";
document.getElementById("button4").style.color ="gray"; 
  
document.getElementById("button6").style.backgroundColor ="#141414";
document.getElementById("button6").style.color ="gray";
  
document.getElementById("button7").style.backgroundColor ="#141414";
document.getElementById("button7").style.color ="gray";
  
document.getElementById("button8").style.backgroundColor ="#141414";
document.getElementById("button8").style.color ="gray";
  
document.getElementById("button9").style.backgroundColor ="#141414";
document.getElementById("button9").style.color ="gray";  
  
document.getElementById("button11").style.backgroundColor ="#141414";
document.getElementById("button11").style.color ="gray";
  
document.getElementById("button12").style.backgroundColor ="#141414";
document.getElementById("button12").style.color ="gray";

document.getElementById("button13").style.backgroundColor ="#141414";
document.getElementById("button13").style.color ="gray";
  
document.getElementById("button14").style.backgroundColor ="#141414";
document.getElementById("button14").style.color ="gray";
  
document.getElementById("button15").style.backgroundColor ="#141414";
document.getElementById("button15").style.color ="gray";
  
document.getElementById("button16").style.backgroundColor ="#141414";
document.getElementById("button16").style.color ="gray";
}
//..кнопка10..//
document.getElementById("button11").onclick = function(){
            this.style.backgroundColor ="#303030";
            this.style.color ="white"
  
document.getElementById("button1").style.backgroundColor ="#141414";
document.getElementById("button1").style.color ="gray";  
 
document.getElementById("button2").style.backgroundColor ="#141414";
document.getElementById("button2").style.color ="gray";  
  
document.getElementById("button3").style.backgroundColor ="#141414";
document.getElementById("button3").style.color ="gray"; 
  
document.getElementById("button4").style.backgroundColor ="#141414";
document.getElementById("button4").style.color ="gray"; 
  
document.getElementById("button6").style.backgroundColor ="#141414";
document.getElementById("button6").style.color ="gray";
  
document.getElementById("button7").style.backgroundColor ="#141414";
document.getElementById("button7").style.color ="gray";
  
document.getElementById("button8").style.backgroundColor ="#141414";
document.getElementById("button8").style.color ="gray";
  
document.getElementById("button9").style.backgroundColor ="#141414";
document.getElementById("button9").style.color ="gray";  
  
document.getElementById("button10").style.backgroundColor ="#141414";
document.getElementById("button10").style.color ="gray";
  
document.getElementById("button12").style.backgroundColor ="#141414";
document.getElementById("button12").style.color ="gray";

document.getElementById("button13").style.backgroundColor ="#141414";
document.getElementById("button13").style.color ="gray";
  
document.getElementById("button14").style.backgroundColor ="#141414";
document.getElementById("button14").style.color ="gray";
  
document.getElementById("button15").style.backgroundColor ="#141414";
document.getElementById("button15").style.color ="gray";
  
document.getElementById("button16").style.backgroundColor ="#141414";
document.getElementById("button16").style.color ="gray";
}
//..кнопка11..//
document.getElementById("button12").onclick = function(){
            this.style.backgroundColor ="#303030";
            this.style.color ="white"
  
document.getElementById("button1").style.backgroundColor ="#141414";
document.getElementById("button1").style.color ="gray";  
 
document.getElementById("button2").style.backgroundColor ="#141414";
document.getElementById("button2").style.color ="gray";  
  
document.getElementById("button3").style.backgroundColor ="#141414";
document.getElementById("button3").style.color ="gray"; 
  
document.getElementById("button4").style.backgroundColor ="#141414";
document.getElementById("button4").style.color ="gray"; 
  
document.getElementById("button6").style.backgroundColor ="#141414";
document.getElementById("button6").style.color ="gray";
  
document.getElementById("button7").style.backgroundColor ="#141414";
document.getElementById("button7").style.color ="gray";

document.getElementById("button8").style.backgroundColor ="#141414";
document.getElementById("button8").style.color ="gray";
  
document.getElementById("button9").style.backgroundColor ="#141414";
document.getElementById("button9").style.color ="gray";  
  
document.getElementById("button10").style.backgroundColor ="#141414";
document.getElementById("button10").style.color ="gray";
  
document.getElementById("button11").style.backgroundColor ="#141414";
document.getElementById("button11").style.color ="gray";

document.getElementById("button13").style.backgroundColor ="#141414";
document.getElementById("button13").style.color ="gray";
  
document.getElementById("button14").style.backgroundColor ="#141414";
document.getElementById("button14").style.color ="gray";
  
document.getElementById("button15").style.backgroundColor ="#141414";
document.getElementById("button15").style.color ="gray";
  
document.getElementById("button16").style.backgroundColor ="#141414";
document.getElementById("button16").style.color ="gray";
}
//..кнопка12..//
document.getElementById("button13").onclick = function(){
            this.style.backgroundColor ="#303030";
            this.style.color ="white"
  
document.getElementById("button1").style.backgroundColor ="#141414";
document.getElementById("button1").style.color ="gray";  
 
document.getElementById("button2").style.backgroundColor ="#141414";
document.getElementById("button2").style.color ="gray";  
  
document.getElementById("button3").style.backgroundColor ="#141414";
document.getElementById("button3").style.color ="gray"; 
  
document.getElementById("button4").style.backgroundColor ="#141414";
document.getElementById("button4").style.color ="gray"; 
  
document.getElementById("button6").style.backgroundColor ="#141414";
document.getElementById("button6").style.color ="gray";
  
document.getElementById("button7").style.backgroundColor ="#141414";
document.getElementById("button7").style.color ="gray";
  
document.getElementById("button8").style.backgroundColor ="#141414";
document.getElementById("button8").style.color ="gray";
  
document.getElementById("button9").style.backgroundColor ="#141414";
document.getElementById("button9").style.color ="gray";  
  
document.getElementById("button10").style.backgroundColor ="#141414";
document.getElementById("button10").style.color ="gray";
  
document.getElementById("button11").style.backgroundColor ="#141414";
document.getElementById("button11").style.color ="gray";

document.getElementById("button12").style.backgroundColor ="#141414";
document.getElementById("button12").style.color ="gray";
  
document.getElementById("button14").style.backgroundColor ="#141414";
document.getElementById("button14").style.color ="gray";
  
document.getElementById("button15").style.backgroundColor ="#141414";
document.getElementById("button15").style.color ="gray";

document.getElementById("button16").style.backgroundColor ="#141414";
document.getElementById("button16").style.color ="gray";
}
//..кнопка13..//
document.getElementById("button14").onclick = function(){
            this.style.backgroundColor ="#303030";
            this.style.color ="white"
  
document.getElementById("button1").style.backgroundColor ="#141414";
document.getElementById("button1").style.color ="gray";  
 
document.getElementById("button2").style.backgroundColor ="#141414";
document.getElementById("button2").style.color ="gray";  
  
document.getElementById("button3").style.backgroundColor ="#141414";
document.getElementById("button3").style.color ="gray"; 
  
document.getElementById("button4").style.backgroundColor ="#141414";
document.getElementById("button4").style.color ="gray"; 
  
document.getElementById("button6").style.backgroundColor ="#141414";
document.getElementById("button6").style.color ="gray";
  
document.getElementById("button7").style.backgroundColor ="#141414";
document.getElementById("button7").style.color ="gray";
  
document.getElementById("button8").style.backgroundColor ="#141414";
document.getElementById("button8").style.color ="gray";
  
document.getElementById("button9").style.backgroundColor ="#141414";
document.getElementById("button9").style.color ="gray";  
  
document.getElementById("button10").style.backgroundColor ="#141414";
document.getElementById("button10").style.color ="gray";
  
document.getElementById("button11").style.backgroundColor ="#141414";
document.getElementById("button11").style.color ="gray";

document.getElementById("button12").style.backgroundColor ="#141414";
document.getElementById("button12").style.color ="gray";
  
document.getElementById("button13").style.backgroundColor ="#141414";
document.getElementById("button13").style.color ="gray";
  
document.getElementById("button15").style.backgroundColor ="#141414";
document.getElementById("button15").style.color ="gray";
  
document.getElementById("button16").style.backgroundColor ="#141414";
document.getElementById("button16").style.color ="gray";
}
//..кнопка14..//
  
document.getElementById("button15").onclick = function(){
            this.style.backgroundColor ="#303030";
            this.style.color ="white"  
document.getElementById("button1").style.backgroundColor ="#141414";
document.getElementById("button1").style.color ="gray";  
 
document.getElementById("button2").style.backgroundColor ="#141414";
document.getElementById("button2").style.color ="gray";  
  
document.getElementById("button3").style.backgroundColor ="#141414";
document.getElementById("button3").style.color ="gray"; 

document.getElementById("button4").style.backgroundColor ="#141414";
document.getElementById("button4").style.color ="gray"; 
  
document.getElementById("button6").style.backgroundColor ="#141414";
document.getElementById("button6").style.color ="gray";

document.getElementById("button7").style.backgroundColor ="#141414";
document.getElementById("button7").style.color ="gray";
  
document.getElementById("button8").style.backgroundColor ="#141414";
document.getElementById("button8").style.color ="gray";
  
document.getElementById("button9").style.backgroundColor ="#141414";
document.getElementById("button9").style.color ="gray";  
  
document.getElementById("button10").style.backgroundColor ="#141414";
document.getElementById("button10").style.color ="gray";
  
document.getElementById("button11").style.backgroundColor ="#141414";
document.getElementById("button11").style.color ="gray";

document.getElementById("button12").style.backgroundColor ="#141414";
document.getElementById("button12").style.color ="gray";
  
document.getElementById("button13").style.backgroundColor ="#141414";
document.getElementById("button13").style.color ="gray";
  
document.getElementById("button14").style.backgroundColor ="#141414";
document.getElementById("button14").style.color ="gray";
  
document.getElementById("button16").style.backgroundColor ="#141414";
document.getElementById("button16").style.color ="gray";
}

document.getElementById("button16").onclick = function(){
            this.style.backgroundColor ="#303030";
            this.style.color ="white"  
document.getElementById("button1").style.backgroundColor ="#141414";
document.getElementById("button1").style.color ="gray";  
 
document.getElementById("button2").style.backgroundColor ="#141414";
document.getElementById("button2").style.color ="gray";  
  
document.getElementById("button3").style.backgroundColor ="#141414";
document.getElementById("button3").style.color ="gray"; 

document.getElementById("button4").style.backgroundColor ="#141414";
document.getElementById("button4").style.color ="gray"; 
  
document.getElementById("button6").style.backgroundColor ="#141414";
document.getElementById("button6").style.color ="gray";

document.getElementById("button7").style.backgroundColor ="#141414";
document.getElementById("button7").style.color ="gray";
  
document.getElementById("button8").style.backgroundColor ="#141414";
document.getElementById("button8").style.color ="gray";
  
document.getElementById("button9").style.backgroundColor ="#141414";
document.getElementById("button9").style.color ="gray";  
  
document.getElementById("button10").style.backgroundColor ="#141414";
document.getElementById("button10").style.color ="gray";
  
document.getElementById("button11").style.backgroundColor ="#141414";
document.getElementById("button11").style.color ="gray";

document.getElementById("button12").style.backgroundColor ="#141414";
document.getElementById("button12").style.color ="gray";
  
document.getElementById("button13").style.backgroundColor ="#141414";
document.getElementById("button13").style.color ="gray";
  
document.getElementById("button14").style.backgroundColor ="#141414";
document.getElementById("button14").style.color ="gray";
  
document.getElementById("button15").style.backgroundColor ="#141414";
document.getElementById("button15").style.color ="gray";
}

const ranks = {
  knight: {
    name: "Негр",
    tag: "knight",
    commands: ["/kit", "/crawl", "/hat", "/workbench", "/suicide"],
    perks: ["2 дома", "Телепортация 4 секунды"]
  },
  duke: {
    name: "Негр+",
    tag: "duke",
    commands: ["/kit", "/ec", "/afk", "/feed", "/ext", "/loom", "/clear", "/ptime", "/pweather"],
    perks: ["3 дома", "Телепортация 3 секунды"]
  },
  graf: {
    name: "Мл.Пидор",
    tag: "graf",
    commands: ["/kit", "/back", "/heal", "/ec [ник]", "/repair", "/top", "/stonecutter"],
    perks: ["4 дома", "Телепортация 2 секунды"]
  },
  king: {
    name: "Пидорас",
    tag: "king",
    commands: ["/kit", "/ext [ник]", "/feed [ник]", "/jump", "/near", "/time", "/grindstone", "/smithingtable"],
    perks: ["5 домов", "Телепортация 1 секунду"]
  },
  emperor: {
    name: "Император",
    tag: "emperor",
    commands: ["/kit", "/anvil", "/broadcast", "/heal [ник]", "/repair all", "/tpahere", "/mute [ник] [время] [причина]", "/unmute"],
    perks: ["Безлимитные дома", "Телепортация без задержки"]
  }
};

const widget = document.querySelector(".ranks-widget");
const tabs = widget.querySelectorAll(".tab");
const content = widget.querySelector("#rank-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    showRank(tab.dataset.rank);
  });
});

function showRank(key) {
  const r = ranks[key];

  content.style.animation = "none";
  content.offsetHeight;
  content.style.animation = null;

  content.innerHTML = `
    <div class="rank-title">
      Ранг: <span class="rank-tag ${r.tag}">${r.name}</span>
    </div>

    <div class="section-title">Команды</div>
    <ul>
      ${r.commands.map(c => `<li><span class="command">${c}</span></li>`).join("")}
    </ul>

    <div class="section-title">Возможности</div>
    <ul>
      ${r.perks.map(p => `<li>${p}</li>`).join("")}
    </ul>
  `;
}

showRank("knight");