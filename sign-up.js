
const require = (e) => {
    if(e.value.length === 0) {
        e.classList.add('error')
    } else {
        e.classList.remove('error')
    }
}