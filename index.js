let nomeHeroi = "Sthe";
let expHeroi = 10.550;
let nivel;

switch (true) {
    case expHeroi <= 1.000:
        nivel = "Ferro";
        break
    case expHeroi >= 1.001 && expHeroi <= 2.000:
        nivel = "Bronze";
        break
    case expHeroi >= 2.001 && expHeroi <= 5.000:  
        nivel = "Prata";   
        break
    case expHeroi >= 5.001 && expHeroi <= 7.000:  
        nivel = "Ouro"; 
        break
    case expHeroi >= 7.001 && expHeroi <= 8.000:  
        nivel = "Platina"; 
        break
    case expHeroi >= 8.001 && expHeroi <= 9.000:  
        nivel = "Ascendente"; 
        break
    case expHeroi >= 9.001 && expHeroi <= 10.000:  
        nivel = "Imortal"; 
        break
    case expHeroi >= 10.001:  
        nivel = "Radiante"; 
        break
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);
