// immediate invoked function expression

(function() {
    const pictures = [
        "contBcg-0",
        "contBcg-1",
        "contBcg-2",
        "contBcg-3",
        "contBcg-4",
        "contBcg-6",
        "contBcg-7",
        "contBcg-8",
        "contBcg-9",
        "contBcg-10",
        "contBcg-11",
        "contBcg-12",
        "contBcg-13",
        "contBcg-14",
        "contBcg-15",
        "contBcg-16",
        "contBcg-17",
        "contBcg-18",
        "contBcg-19",
        "contBcg-20",
        "contBcg-21",
        "contBcg-22",
        "contBcg-23",
        "contBcg-24",
        "contBcg-25",
        "contBcg-26",
    ];

    //select both left and right button. Add event listeners
    const buttons = document.querySelectorAll('.btn')
    const imageDIV = document.querySelector('.img-container')
    let counter = 0

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if (button.classList.contains('btn-left')) {
                counter--
                if (counter < 0) {
                    counter = pictures.length - 1
                }
                imageDIV.style.backgroundImage = `url('img/${pictures[counter]}.jpg')`
            }
            if (button.classList.contains('btn-right')) {
                counter++
                if (counter > pictures.length - 1) {
                    counter = 0
                }
                imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
            }
        })
    })
})();