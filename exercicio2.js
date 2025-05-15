// 1. Info do apê
let ap = {
    quartos: 2,
    tipo: "apartamento",
    endereco: "Avenida Principal, 456 - Centro",
    andar: 7
  };
  
  console.log(`Apartamento com ${ap.quartos} quartos, no ${ap.andar}º andar, fica na ${ap.endereco}.`);
  
  // 2. Produto embalado
  let produto = {
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preco: 3500.00
  };
  
  console.log(`o Produto embalado ${produto.nome}, da categoria ${produto.categoria}, pesa ${produto.peso}kg e custa R$ ${produto.preco.toFixed(2)}. `)
  
  // 3. Classe Imovel
  class Imovel {
    constructor(quartos, tipo, endereco) {
      this.quartos = quartos;
      this.tipo = tipo;
      this.endereco = endereco;
    }
  
    exibirInfo() {
      return `${this.tipo} com ${this.quartos} quartos, localizado em ${this.endereco}.`;
    }
  }
  
  const casa = new Imovel(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre");
  const apNovo = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro");
  
  console.log(casa.exibirInfo());
  console.log(apNovo.exibirInfo());
  
  // 4. Classe Veiculo
  class Veiculo {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  
    mostrarDetalhes() {
      return `${this.marca} ${this.modelo}, ano ${this.ano}`;
    }
  }
  
  const carro = new Veiculo("Toyota", "Corolla", 2022);
  const moto = new Veiculo("Honda", "CBR 600RR", 2021);
  
  console.log(carro.mostrarDetalhes());
  console.log(moto.mostrarDetalhes());
  