import React, { useState } from 'react'; // Adicionando o import de useState
import { ScrollView, View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Fundo from './src/assets/fundo.jpg';
import Logo from './src/assets/imgLogo.jpg';
import Rush from './src/assets/rush.jpg';
import Eyes from './src/assets/Eyes.webp';
import Jeff from './src/assets/jeff.jpg';
import Light from './src/assets/light.jpg';

export default function Passivo({ navigation }) {
  const [entidade, setEntidade] = useState(
    'Jeff é considerado uma entidade amigável e não causará danos aos jogadores. Ao entrar, Jeff irá cumprimentá-los antes de usar seus tentáculos para colocar quatro itens aleatórios nas almofadas. Jeff parece ficar sempre em sua loja, observando os jogadores ansiosamente, como se esperasse que eles comprassem um de seus quatro/cinco itens aleatórios (há mais um na porta 152). Se um jogador comprar um item, os olhos de Jeff parecerão mais alegres antes de ele piscar e retornar ao seu estado normal. Ele também brincará com todas as moedas que tiver ou com seu pote de gorjetas. Se o jogador desligar o rádio, Jeff olhará para eles com raiva antes de ligar o rádio novamente. Se alguma fonte de luz apontar para Jeff, ele cobrirá os olhos com um de seus tentáculos. Ao ser desligado, ele olha para o jogador com uma expressão de raiva, antes de retornar ao estado neutro. Quando Rush/Ambush encontra a porta 52, Jeff desaparece em seu corredor junto com sua loja sendo fechada por uma veneziana cinza. Semelhante a Jeff, El Goblino também se esconderá atrás de sua mesa na tentativa de se esconder do Rush/Ambush.'
  );

  const alterarEntidade = (tipoBotao) => {
    if (tipoBotao === 'JEFF') {
      setEntidade(
        'Jeff é considerado uma entidade amigável e não causará danos aos jogadores. Ao entrar, Jeff irá cumprimentá-los antes de usar seus tentáculos para colocar quatro itens aleatórios nas almofadas. Jeff parece ficar sempre em sua loja, observando os jogadores ansiosamente, como se esperasse que eles comprassem um de seus quatro/cinco itens aleatórios (há mais um na porta 152). Se um jogador comprar um item, os olhos de Jeff parecerão mais alegres antes de ele piscar e retornar ao seu estado normal. Ele também brincará com todas as moedas que tiver ou com seu pote de gorjetas. Se o jogador desligar o rádio, Jeff olhará para eles com raiva antes de ligar o rádio novamente. Se alguma fonte de luz apontar para Jeff, ele cobrirá os olhos com um de seus tentáculos. Ao ser desligado, ele olha para o jogador com uma expressão de raiva, antes de retornar ao estado neutro. Quando Rush/Ambush encontra a porta 52, Jeff desaparece em seu corredor junto com sua loja sendo fechada por uma veneziana cinza. Semelhante a Jeff, El Goblino também se esconderá atrás de sua mesa na tentativa de se esconder do Rush/Ambush.'
      );
    } else if (tipoBotao === 'LIGHT') {
      setEntidade(
        'A luz guia destacará os objetos necessários para progredir (como chaves de sala) após 20 a 70 segundos. Em uma sala escura, também destacará a porta da próxima sala. A Luz Guia também destacará as passagens corretas nas sequências de perseguição de Seek. Além de destacar, a Luz Guia também emitirá sons baixos em alguns casos, para alertar ainda mais os jogadores sobre a localização de um item ou objeto. Quando um jogador morre, a Luz Guia aparecerá como símbolo acima, enquanto o jogador está flutuando na água, e dará a ele uma mensagem de morte. As mensagens de morte serão diferentes com base na entidade específica responsável por matar jogadores, bem como no número de vezes que os jogadores morreram anteriormente para essa mesma entidade. Na maioria dos casos, o Guiding Light dará uma explicação simples sobre como a entidade funciona e como os jogadores podem evitá-la em uma corrida futura.'
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
      <ImageBackground source={Fundo} style={estiloCss.backgroundImage}>
        <View style={estiloCss.container}>

          <Image style={estiloCss.imgLogo} source={Logo} />

          <TouchableOpacity onPress={() => navigation.navigate('Home')} style={estiloCss.menu}>
            <Text style={estiloCss.nav}>Entidades Agressivas</Text>
          </TouchableOpacity>

          <View style={estiloCss.grid}>
            <Image source={Jeff} style={estiloCss.gridImage} />
            <Image source={Light} style={estiloCss.gridImage} />
          </View>

          <View style={estiloCss.botaoMenu}>
            <TouchableOpacity style={estiloCss.menuBotao} onPress={() => alterarEntidade('JEFF')}>
              <Text style={estiloCss.botaoTxt}>JEFF</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estiloCss.menuBotao} onPress={() => alterarEntidade('LIGHT')}>
              <Text style={estiloCss.botaoTxt}>GUIDING LIGHT</Text>
            </TouchableOpacity>
          </View>

          <View style={estiloCss.desc}>
            <Text style={estiloCss.descTxt}>{entidade}</Text>
          </View>

        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const estiloCss = StyleSheet.create({
  backgroundImage: {
    height: 2000,
    flex: 1, // Ocupa todo o espaço disponível
    resizeMode: 'cover', // Ajusta a imagem para cobrir a tela
  },
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    padding: 20,
    width: '100%', // Garante que o container ocupe toda a largura disponível
  },
  imgLogo: {
    resizeMode: 'cover',
    width: '100%',
    maxHeight: 300,
  },
  nav: {
    color: "#fff",
    fontSize: 20,
    backgroundColor: "#251605",
    padding: 20,
    textAlign: 'center',
  },
  menu: {
    width: '100%',
    backgroundColor: "#251605",
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    width: '100%',
    gap: 50,
  },
  gridImage: {
    width: 400,
    height: 350,

    // width: '45%',
    // height: '45%',
    margin: 10,
  },
  botaoMenu: {
    flexDirection: 'row',
    gap: 80,
  },
  menuBotao: {
    backgroundColor: "#251605",
    padding: 10,
    width: 400,
  },
  botaoTxt: {
    color: "#fff",
    borderWidth: 2,
    borderColor: '#fff',
    padding: 30,
    textAlign: 'center',
    fontSize: 20,
  },
  desc: {
    marginTop: 20,
    width: 920,
    padding: 20,
  },
  descTxt: {
    color: "#fff",
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: "#251605",
    padding: 10,
    fontSize: 20,
  }
});
