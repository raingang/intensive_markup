const tariffs = document.getElementById('tariffs')

tariffs.onmouseover = event => {
    let target = event.target
    while (target.tagName !== 'LI'){
        target = target.parentNode
    }
    target.classList.add('tariff--active')
}


tariffs.onmouseout = event => {
    let target = event.target
    while (target.tagName !== 'LI'){
        target = target.parentNode
    }
    target.classList.remove('tariff--active')
}