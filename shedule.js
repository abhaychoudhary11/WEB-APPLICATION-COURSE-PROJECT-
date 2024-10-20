document.addEventListener('DOMContentLoaded', () => {
    // Event listeners for button actions (optional)
    const scheduleBtn = document.getElementById('scheduleBtn');
    const reserveBtn = document.getElementById('reserveBtn');
    const confirmBtn = document.querySelector('.confirm-btn');

    scheduleBtn.addEventListener('click', () => {
        alert('Schedule Visit button clicked');
    });

    reserveBtn.addEventListener('click', () => {
        alert('Reserve button clicked');
    });

    confirmBtn.addEventListener('click', () => {
        const selectedDate = document.querySelector('.date-option.active') ? 
                             document.querySelector('.date-option.active').innerText : 
                             document.getElementById('custom-date').value;

        const selectedTime = document.querySelector('.time-slot.active') ? 
                             document.querySelector('.time-slot.active').innerText : 
                             'Not Selected';

        alert(`Date: ${selectedDate}\nTime Slot: ${selectedTime}`);
    });

    // Add active class to selected buttons
    const dateOptions = document.querySelectorAll('.date-option');
    const timeSlots = document.querySelectorAll('.time-slot');

    dateOptions.forEach(button => {
        button.addEventListener('click', () => {
            removeActiveClass(dateOptions);
            button.classList.add('active');
        });
    });

    timeSlots.forEach(button => {
        button.addEventListener('click', () => {
            removeActiveClass(timeSlots);
            button.classList.add('active');
        });
    });

    function removeActiveClass(buttons) {
        buttons.forEach(btn => btn.classList.remove('active'));
    }
});
