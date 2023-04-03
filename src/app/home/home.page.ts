import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public categorias = [
    {codigo: 1, nome: 'Salgados'},
    {codigo: 2, nome: 'Lanches'},
    {codigo: 3, nome: 'Bebidas'},
    {codigo: 4, nome: 'Doces'}
]

public slideOpts = {
  slidesPerView: 2
}

  public produtos = [
    { codigo: 1, categoria: 1, descricao: 'Coxinha de Frango ou Carne básica. Não é feita pela UniCV, problemas causados por tal devem ser reportados no email vendedoresdesalgado@gmail.com. NÃO venha reclamar conosco.', nome: 'Coxinha de Frango / Carne',        valor: 5.00,  imagens: ['coxinha.png', 'plink.png'], visibled: false },
    { codigo: 2, categoria: 1, descricao: 'Pão de queijo murcho. Não é feito pela UniCV',                                                                                                                                   nome: 'Pão de Queijo',                    valor: 3.00,  imagens: ['pao de queijo.png', 'plink.png'], visibled: false },
    { codigo: 3, categoria: 1, descricao: 'Dogão com 2 salsichas e requeijão. Pode causar refluxo. Não é feita pela UniCV',                                                                                                 nome: 'Mini Dogão',                       valor: 7.00,  imagens: ['dogao.png', 'plink.png'], visibled: false },
    { codigo: 4, categoria: 1, descricao: 'É...',                                                                                                                                                                           nome: 'Esfirra de Carne / Frango',        valor: 5.00,  imagens: ['esfirra.png' , 'plink.png' ], visibled: false },
    { codigo: 5, categoria: 1, descricao: 'Não sabemos se é carne de verdade, não venha perguntar. Não é feito pela UniCV',                                                                                                 nome: 'Mini Burguer',                     valor: 7.00,  imagens: ['hamburguinho.png' , 'plink.png' ], visibled: false },
    { codigo: 6, categoria: 1, descricao: 'Essa aqui até que é gostosa. Não é feita pela UniCV (incrivelmente)',                                                                                                            nome: 'Empadinha de Palmito / Frango',    valor: 3.00,  imagens: ['empada.png' , 'plink.png' ], visibled: false },
    { codigo: 7, categoria: 2, descricao: 'Um dos classicos da nossa faculdade, tudo em dobro pão em dobro, queijo em dobro, hamburguer em dobro, preço em dobro!',                                                         nome: 'UniCV Duplo',                      valor: 23.00, imagens: ['duplo.png' , 'plink.png' ], visibled: false },
    { codigo: 8, categoria: 2, descricao: 'Um dos hamburgueres mais premiados mundialmente com seu corte de carne explendido e seu pao e queijo feitos a mão pelas incriveis cozinheiras (11/10)',                          nome: 'UniCV Quarteirão Cheddar Duplo',   valor: 26.90, imagens: ['quarteirao.png' , 'plink.png' ], visibled: false },
    { codigo: 9, categoria: 2, descricao: 'Clássico, sem firula, Pao - Maionese - Frango - Alface e Tomate - Pão (9/10)',                                                                                                   nome: 'UniCV de Frango',                  valor: 23.50, imagens: ['frangohamburguer.png' , 'plink.png' ], visibled: false },
    { codigo: 10, categoria: 2, descricao: 'O favorito de todos, inclusive do ADM aqui, tudo que da pra imaginar cabe dentro desse hamburguer (pode ser bom ou ruim, vai de você :D(8/10))',                                nome: 'UniCV Supremo ',                   valor: 30.00, imagens: ['supremo.png' , 'plink.png' ], visibled: false },
    { codigo: 11, categoria: 2, descricao: 'Batatinhas no ponto com um molhinho especial da casa (10/10)',                                                                                                                  nome: 'UniCV Fritas',                     valor: 11.00, imagens: ['fritas.png' , 'plink.png' ], visibled: false },
    { codigo: 12, categoria: 2, descricao: 'O UNICV',                                                                                                                                                                       nome: 'O UNICV',                          valor: 40.00, imagens: ['ounicv.png' , 'plink.png' ], visibled: false },
    { codigo: 13, categoria: 3, descricao: 'Coca Cola. É isso.',                                                                                                                                                            nome: 'Coca Cola 500mL',                  valor: 10.00, imagens: ['cocacola.png' , 'plink.png' ], visibled: false },
    { codigo: 14, categoria: 3, descricao: 'Basta ler',                                                                                                                                                                     nome: 'Sprite 500mL',                     valor: 1.00,  imagens: ['sprite.png' , 'plink.png' ], visibled: false },
    { codigo: 15, categoria: 3, descricao: 'Porque você ainda tá olhando aqui?',                                                                                                                                            nome: 'Guarana 500Ml',                    valor: 10.00, imagens: ['guarana.png' , 'plink.png' ], visibled: false },
    { codigo: 16, categoria: 3, descricao: 'Procurando por algo?',                                                                                                                                                          nome: 'Água c/gás',                       valor: 0.99,  imagens: ['aguacomgas.jpeg' , 'plink.png' ], visibled: false },
    { codigo: 17, categoria: 3, descricao: 'O favorito do ADM',                                                                                                                                                             nome: 'Monster de Manga',                 valor: 1.00,  imagens: ['monster.png' , 'plink.png' ], visibled: false },
    { codigo: 18, categoria: 3, descricao: '99.8% natural',                                                                                                                                                                 nome: 'Suco de Maracuja',                 valor: 0.01,  imagens: ['maracuja.png' , 'plink.png' ], visibled: false },
    { codigo: 19, categoria: 4, descricao: 'O melhor brownie da cidade apenas',                                                                                                                                             nome: 'UniCV Brownie',                    valor: 6.00,  imagens: ['brownie.jpg' , 'plink.png' ], visibled: false },
    { codigo: 20, categoria: 4, descricao: 'Tudo de gostoso tem aqui, chocolate, nutella, baunilha, leite condensado, doce de leite e muito mais (10000/10)',                                                               nome: 'UniCV Shake',                      valor: 15.00, imagens: ['milkshake.png' , 'plink.png' ], visibled: false },
    { codigo: 21, categoria: 4, descricao: 'Quentinhos e saborosos',                                                                                                                                                        nome: 'UniCV Cookies',                    valor: 5.00,  imagens: ['cookie.png' , 'plink.png' ], visibled: false },
    { codigo: 22, categoria: 4, descricao: '?',                                                                                                                                                                             nome: 'UniCV Surpresa',                   valor: 25.00, imagens: ['secreto.png' , 'plink.png' ], visibled: false },
    { codigo: 23, categoria: 4, descricao: 'Donuts feitos na hora, massa que derrete na boca e cobertura do seu desejo (de GRAÇA!)',                                                                                        nome: 'UniCV Donuts',                     valor: 6.00,  imagens: ['donut.png' , 'plink.png' ], visibled: false },
    { codigo: 24, categoria: 4, descricao: 'Definitavamente não são os seus sonhos! (9.5/10)',                                                                                                                              nome: 'UniCV Sonho',                     valor: 5.00,  imagens: ['sonho.png' , 'plink.png' ], visibled: false }
]

  public pathImgs = '../../assets/img/';
  selected: any;

  constructor(private navCtrl: NavController) {
    this.setSelected(1);
  }

  public formataValor(valor:any) {
    let retorno = "";
    
    let formatar = Intl.NumberFormat("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    retorno = formatar.format(valor)
    retorno = "R$ " + retorno;

    return retorno;
  }

  public setSelected(codigoCategoria:any) {
    this.selected = codigoCategoria;

    this.produtos.map(el => el.visibled = false);

    this.produtos
    .filter(el => el.categoria == this.selected)
    .map(el => el.visibled = true);
  }

  public goProduto(produto:any) {
    this.navCtrl.navigateForward('produto', {
      queryParams: { produto: produto }
    });
  }
}
