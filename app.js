function generate(minL, maxL, uLetters, lLetters, nums, sym) {
    const bigLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    const smallLetters = bigLetters.map((letter) => letter.toLowerCase())
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const symbols = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '|', ':', ';', '"', "'", '<', ',', '>', '.', '?', '/']

    const length = Math.floor(Math.random() * (maxL - minL + 1)) + minL

    let password_symbols = []
    if (uLetters) password_symbols.push(bigLetters)
    else if (lLetters) password_symbols.push(smallLetters)
    else if (nums) password_symbols.push(numbers)
    else if (sym) password_symbols.push(symbols)
    else password_symbols.push(numbers)

    let password = ''

    function choose_random_item(list) {
        return list[Math.floor(Math.random() * list.length)]
    }

    for (let i = 0; password.length < length;) {
        let chosen_list = choose_random_item(password_symbols)
        password += choose_random_item(chosen_list)
    }

    document.getElementById("password").textContent = password

    copy = true
    global_password = password
}

let copy = false
let global_password = ''


document.getElementById("copy").onclick = () => {
    if (copy) if (global_password !== '') {
        navigator.clipboard.writeText(global_password)
        document.getElementById("copied").style.display = "inline-block"
        setTimeout(function(){
            document.getElementById("copied").style.display = 'none'
        }, 3000);
    }

}

document.getElementById("generate").onclick = () => {
    let minL = parseInt(document.getElementById("minlength").value)
    let maxL = parseInt(document.getElementById("maxlength").value)
    let uLetters = document.getElementById("uppercaseLetters").checked
    let lLetters = document.getElementById("lowercaseLetters").checked
    let nums = document.getElementById("numbers").checked
    let sym = document.getElementById("symbols").checked

    generate(minL, maxL, uLetters, lLetters, nums, sym)
}