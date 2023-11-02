$(document).ready(() => {
    const display = $('#stopwatch-display');
    const dateSelection = $('#date-selection');
    const startButton = $('#start');
    const pauseButton = $('#pause');
    const resetButton = $('#reset');
    let active = false;
    let startTime = 0;
    let interval;

    startButton.click(async () => {
        if (!active) {
            try {
                await startTimer();
            } catch (error) {
                console.log("Failed");
            }
        }
    });

    const startTimer = () => {
        return new Promise((resolve, reject) => {
            const dateSelected = new Date(dateSelection.val()).getTime() || 0;
            startTime = new Date().getTime() - dateSelected;

            interval = setInterval(() => {
                timedetails();
            }, 1000);

            active = true;
            resolve();
        });
    };

    const timedetails = () => {
        const currentTime = new Date().getTime();
        const elapsedTime = new Date(currentTime - startTime);
        const hours = elapsedTime.getUTCHours();
        const minutes = elapsedTime.getUTCMinutes();
        const seconds = elapsedTime.getUTCSeconds();
        display.text(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
    };

    const updateDate = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const day = currentDate.getDate().toString().padStart(2, '0');
        dateSelection.val(`${year}-${month}-${day}`);
    };

    updateDate();

    pauseButton.click(() => {
        clearInterval(interval);
        active = false;
    });

    resetButton.click(() => {
        clearInterval(interval);
        active = false;
        display.text('00:00:00');
    });

    const pad = (value) => value.toString().padStart(2, '0');
});
