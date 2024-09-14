// Home.js

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Image  } from 'react-native';

import Fundo from './src/assets/fundo.jpg';
import Logo from './src/assets/imgLogo.jpg';
import Rush from './src/assets/rush.jpg';
import Eyes from './src/assets/Eyes.webp';
import Jeff from './src/assets/jeff.jpg';
import Light from './src/assets/light.jpg';

export default function Home({ navigation }) {

  const [entidade, setEntidade] = useState(
    'Rush tem 1/15 de chance de aparecer quando uma nova porta é aberta, e essa chance aumenta à medida que os jogadores progridem no Hotel. Rush pode aparecer no início de uma corrida, na Porta 2, e até na Porta 97. Frequentemente, ele surge primeiro entre as portas 10-15, geralmente na porta 13.Em The Mines, Rush terá a chance de aparecer dentro da porta antes da última porta aberta, tendo, portanto, a mesma mecânica de spawn do A-120. No entanto, ainda pode vir por trás, pois é sua mecânica original antes da atualização das Minas.Quando Rush aparecer, as luzes piscarão por cerca de 2 segundos (ou a sala irá tremer nas Minas com um som estrondoso audível), e Rush eventualmente começará a "correr" para a próxima porta fechada. Enquanto faz isso, ele emitirá um som "estrondoso" e quebrará a maioria das luzes de qualquer sala por onde passar. Além disso, após a atualização de "The Mines", Rush poderá viajar 2 portas à frente e transformar a próxima sala fechada em uma sala escura. Isso pode causar cenários estranhos, como a sala que inicia a perseguição de busca ser uma sala escura, o que pode fazer com que Screech apareça durante a perseguição de busca ou a entrada da biblioteca ser uma sala escura.'
  );

  const alterarEntidade = (tipoBotao) => {
    if (tipoBotao === 'RUSH') {
      setEntidade(
        'Rush tem 1/15 de chance de aparecer quando uma nova porta é aberta, e essa chance aumenta à medida que os jogadores progridem no Hotel. Rush pode aparecer no início de uma corrida, na Porta 2, e até na Porta 97. Frequentemente, ele surge primeiro entre as portas 10-15, geralmente na porta 13.Em The Mines, Rush terá a chance de aparecer dentro da porta antes da última porta aberta, tendo, portanto, a mesma mecânica de spawn do A-120. No entanto, ainda pode vir por trás, pois é sua mecânica original antes da atualização das Minas.Quando Rush aparecer, as luzes piscarão por cerca de 2 segundos (ou a sala irá tremer nas Minas com um som estrondoso audível), e Rush eventualmente começará a "correr" para a próxima porta fechada. Enquanto faz isso, ele emitirá um som "estrondoso" e quebrará a maioria das luzes de qualquer sala por onde passar. Além disso, após a atualização de "The Mines", Rush poderá viajar 2 portas à frente e transformar a próxima sala fechada em uma sala escura. Isso pode causar cenários estranhos, como a sala que inicia a perseguição de busca ser uma sala escura, o que pode fazer com que Screech apareça durante a perseguição de busca ou a entrada da biblioteca ser uma sala escura.'
      );
    } else if (tipoBotao === 'EYES') {
      setEntidade(
        'Os olhos têm a chance de aparecer quando um jogador abre uma porta para a próxima sala. Quando aparecer, ele emitirá um brilho azul-arroxeado e ficará inativo por cerca de um segundo, dando aos jogadores tempo para reagir. Após o período de carência, ele atirará rapidamente em qualquer jogador que olhar para ele.Os olhos parecem ter duas hitboxes: a hitbox principal que causa 10 de dano por tiro quando olhada e a hitbox secundária (maior) que causa 5 de dano por tiro quando olhada.Dentro de The Mines, Eyes ganhou a habilidade de se teletransportar, com a chance de aparecer na frente do jogador e causar dano. Os Olhos desaparecerão quando a próxima porta for aberta, mas terão a chance de aparecer duas (ou mais) seguidas, movendo-se rapidamente para a próxima sala, deixando um rastro para trás.Os olhos brilharão com uma aura branca ao danificar o jogador e, se eles morrerem, atrairá os olhos do jogador em sua direção enquanto o cadáver ainda está no chão.'
      );
    }
  };
  
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ flex: 1 }}>
      <ImageBackground source={Fundo} style={estiloCss.backgroundImage}>
        <View style={estiloCss.container}>

          <Image style={estiloCss.imgLogo} source={Logo} />

          <TouchableOpacity onPress={() => navigation.navigate('Passivo')} style={estiloCss.menu}>
            <Text style={estiloCss.nav}>Entidades Passivas</Text>
          </TouchableOpacity>

          <View style={estiloCss.grid}>
            <Image source={Rush} style={estiloCss.gridImage} />
            <Image source={Eyes} style={estiloCss.gridImage} />
          </View>

          <View style={estiloCss.botaoMenu}>
            <TouchableOpacity style={estiloCss.menuBotao} onPress={() => alterarEntidade('RUSH')}>
              <Text style={estiloCss.botaoTxt}>RUSH</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estiloCss.menuBotao} onPress={() => alterarEntidade('EYES')}>
              <Text style={estiloCss.botaoTxt}>EYES</Text>
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
