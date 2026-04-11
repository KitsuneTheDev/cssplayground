function init() {
    const jobs = [
        {
            id: 1,
            hours: 3.5,
            start: 9,
        },
        {
            id: 2,
            hours: 7.5,
            start: 12,
        },
        {
            id: 3,
            hours: 4,
            start: 10,
        },
        {
            id: 4,
            hours: 8,
            start: 8,
        },
        {
            id: 5,
            hours: 2,
            start: 21,
        },
        {
            id: 6,
            hours: 3,
            start: 20,
        },
        {
            id: 7,
            hours: 1,
            start: 13,
        }
    ]

    for(const job of jobs) {
        const theLine = document.querySelector(`.bar[data-day="${job.id}"]`);
        theLine.style.strokeDasharray = `${job.hours} 24`;
        theLine.style.strokeDashoffset = `-${job.start}`
    }
}

init();