// Verificar se uma criança irá ultrapaçar outra em altura e em quanto tempo

function altura(altura1, altura2, txCrecimento1, txCrecimento2){
    if(altura1 !== altura2){
        let anos = 0
        console.log('Opa, tem uma criança menor aqui.')
        if(altura1 < altura2){
            console.log(`A criança de altura ${altura1} é menor.`)
            if(txCrecimento1 > txCrecimento2){
                for(altura1; altura1 <= altura2; altura1){
                    altura1 += txCrecimento1
                    altura2 += txCrecimento2
                    anos++
                }
                console.log('Levou ' + anos + ' anos para a criança 1 ultrapassar a altura da criança 2:')
                console.log(`Criança 1: ${altura1}cm\nCriança 2: ${altura2}cm`)
            } else{
                console.log('A taxa de crescimento da criança menor é inferior a da maior, ela não irá ultrapassar a altura.')
            }
        } else if(altura2 < altura1){
            console.log(`A criança de altura ${altura2} é menor.`)
            if(txCrecimento2 > txCrecimento1){
                for(altura2; altura2 <= altura1; altura2){
                    altura2 += txCrecimento2
                    altura1 += txCrecimento1
                    anos++
                }
                console.log('Levou ' + anos + ' anos para a criança 2 ultrapassar a altura da criança 1:')
                console.log(`Criança 1: ${altura1}cm\nCriança 2: ${altura2}cm`)
            } else{
                console.log('A taxa de crescimento da criança menor é inferior a da maior, ela não irá ultrapassar a altura.')
            }
        }
    } else{
        console.log('Ambas possuem a mesma altura. Irão crescer dependendo da taxa de crescimento anual.')
    }
}

altura(180, 182, 2, 5)
console.log('\n')
altura(180, 182, 2, 1)
console.log('\n')
altura(170, 160, 2, 5)
console.log('\n')
altura(170, 155, 2, 1)
console.log('\n')
altura(170, 170, 2, 1)