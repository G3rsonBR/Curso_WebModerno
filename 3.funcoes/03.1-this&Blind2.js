function Pessoa(){
    this.idade = 0

    const self = this // Forma de driblar o This sem Blind
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa