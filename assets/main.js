const cards = [{
    id:1,
    question:'Quantas pragas foram enviados ao Egito ?',
    reference:'Exodo capitulo 7 ao 10',
    items:{
        a:'7 pragas',
        b:'10 pragas',
        c:'3 pragas'
    }

},{
    id:2,
    question:'Quem foi lançado na cova dos leões',
    reference:'Daniel 6.16',
    items:{
        a:'Paulo',
        b:'José',
        c:'Daniel'
    }
},{
    id:2,
    question:'Quando jesus nasce, onde ele foi colocado?',
    reference:'lucas 2.16',
    items:{
        a:'foi colocado numa cama',
        b:'foi colocado numa manjedoura',
        c:'foi colocado em um trono'
    }
},{   
        id:1,
        question:'Quantas pragas foram enviados ao Egito ?',
        reference:'Exodo capitulo 7 ao 10',
        items:{
            a:'7 pragas',
            b:'10 pragas',
            c:'3 pragas'
        }
     
}]

function randomCard(){
    return Math.floor(Math.random() * (3 - 0) + 0)
} 

class Card{
    constructor(){
        // selecionar todos os campos
        this.questionField = document.querySelector('.questionField')
        this.versiculoField = document.querySelector('.versiculoField')
        this.reponseField = document.querySelector('.reponseField ol').children
        this.button = document.querySelector('button')
    }

    start(){

        // inicar/ mudar os campos quando eu aperta o botão mudar carta
        this.button.addEventListener('click',()=>{
            const card = cards[randomCard()]
            console.log(card)
            this.innerQuestion(card)
            this.innerRefe(card)
            this.innerResp(card)
        })
    }

    // colocar questão
    innerQuestion(card){
        const h2 = this.questionField.children[0]

        h2.innerHTM = " "
        h2.innerHTML = card.question
      
    }

    // colocar referencia de versiculo
    innerRefe(card){
        const refe = this.versiculoField.children[0]
        
        refe.innerHTML = " "
        refe.innerHTML = card.reference
    }

    // colocar intems para a resposta
    innerResp(card){
        console.log(this.reponseField.children)
        let i = 0
        for(let item of Object.keys(card.items)){
            
            this.reponseField[i].innerHTML = card.items[item]
            i++
        }
    }
}

const card = new Card()

card.start()