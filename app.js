document.addEventListener("DOMContentLoaded", () => {
    let screen = document.querySelector("#screen")


    let One = document.querySelector("span:nth-Child(12)")
    if (screen.innerText != "Error")
    One.addEventListener("click", ()=>{
        screen.innerText = screen.innerText.concat(One.innerText)
    })

    let Two = document.querySelector("span:nth-Child(13)")
    if (screen.innerText != "Error")
    Two.addEventListener("click", ()=>{
        screen.innerText = screen.innerText.concat(Two.innerText)
    })

    let Three = document.querySelector("span:nth-Child(14)")
    if (screen.innerText != "Error")
    Three.addEventListener("click", ()=>{
        screen.innerText = screen.innerText.concat(Three.innerText)
    })
    
    let Four  = document.querySelector("span:nth-Child(8)")
    if (screen.innerText != "Error")
    Four.addEventListener("click", ()=>{
        screen.innerText = screen.innerText.concat(Four.innerText)
    })

    let Five = document.querySelector("span:nth-Child(9)")
    if (screen.innerText != "Error")
    Five.addEventListener("click", ()=>{
        screen.innerText = screen.innerText.concat(Five.innerText)
    })

    let Six = document.querySelector("span:nth-Child(10)")
    if (screen.innerText != "Error")
    Six.addEventListener("click", ()=>{
        screen.innerText = screen.innerText.concat(Six.innerText)
    })

    let Seven = document.querySelector("span:nth-Child(4)")
    if (screen.innerText != "Error")
    Seven.addEventListener("click", ()=>{
        screen.innerText = screen.innerText.concat(Seven.innerText)
    })

    let Eight = document.querySelector("span:nth-Child(5)")
    if (screen.innerText != "Error")
    Eight.addEventListener("click", ()=>{
        screen.innerText = screen.innerText.concat(Eight.innerText)
    })
    let Nine = document.querySelector("span:nth-Child(6)")
    if (screen.innerText != "Error")
    Nine.addEventListener("click", ()=>{
        screen.innerText = screen.innerText.concat(Nine.innerText)
    })

    let Zero = document.querySelector("#zero")
    if (screen.innerText != "Error")
    Zero.addEventListener("click", ()=>{
        screen.innerText = screen.innerText.concat(Zero.innerText)
    })

    let Clear = document.querySelector("span:nth-Child(1)")
    if (screen.innerText != "Error")
    Clear.addEventListener("click", ()=>{
        screen.innerText = screen.innerText = " "
    })

    let Div = document.querySelector("span:nth-Child(2)")
    if (screen.innerText != "Error")
    Div.addEventListener("click", ()=>{
        screen.innerText = screen.innerText = "/"
    })

    let Mult = document.querySelector("span:nth-Child(3)")
    if (screen.innerText != "Error")
    Mult.addEventListener("click", ()=>{
        screen.innerText = screen.innerText.concat("*")
    })

    let Subt = document.querySelector("span:nth-Child(7)")
    if (screen.innerText != "Error")
    Subt.addEventListener("click", ()=>{
        screen.innerText = screen.innerText.concat("-")
    })

    let Plus = document.querySelector("span:nth-Child(11)")
    if (screen.innerText != "Error")
    Plus.addEventListener("click", ()=>{
        screen.innerText = screen.innerText.concat("+")
    })

    let Eqls = document.querySelector("span:nth-Child(15)")
    if (screen.innerText != "Error")
    
    Eqls.addEventListener("click", ()=>{

        try {
            ttl = eval(screen.innerText)
            screen.innerText = ttl
        }
        catch(error) {
            screen.innerText = "Error"
        }
    })
})