import React from 'react';
import { View, Text, Image } from 'react-native';

function App() {
  const TEXTO_NOTIFICACAO = "Bruno Rezende de Lima, Tecnologia em Análise e Desenvolvimento de Sistemas 5º Período. \nAnalista de Redes e NOC";
  const TITULO_CATEGORIAS = "Ícones";
  const TITULO_TECNOLOGIA = "Carros";
  const TEXTO_CARD = "Esse carro pode ser seu!!!!!!";
  const COR_FUNDO_TELA = "#3A6EA5";
  const COR_CARD = "#FFFFFF";
  const COR_TEXTO = "#333333";
  const FONT_TITULO = 18;
  const FONT_TEXTO = 12;
  const AVATAR = require('./assets/eu.png');

  const CATEGORIAS = [
    { id: 1, cor: '#FF8C00', icone: require('./assets/celular.png') },
    { id: 2, cor: '#8E7CC3', icone: require('./assets/pata.png') },
    { id: 3, cor: '#1ABC9C', icone: require('./assets/construcao.png') }
  ];

  const ITENS = [
    { id: 1, imagem: require('./assets/compass.png'), progresso: '70%', cor: '#F4C430' },
    { id: 2, imagem: require('./assets/camaro.png'), progresso: '50%', cor: '#3A6EA5' },
    { id: 3, imagem: require('./assets/civic.png'), progresso: '30%', cor: '#FF7F11' }
  ];

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: COR_FUNDO_TELA }}>
      <View style={{ marginTop: 20, alignItems: 'flex-start' }}>
        <Image
          source={AVATAR}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <Text style={{ color: '#fff', fontSize: FONT_TEXTO, marginTop: 10 }}>
          {TEXTO_NOTIFICACAO}
        </Text>
      </View>

      <View style={{ marginTop: 20, borderRadius: 20, padding: 15, backgroundColor: COR_CARD }}>
        <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: FONT_TITULO, color: COR_TEXTO }}>
          {TITULO_CATEGORIAS}
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 10 }}>
          {CATEGORIAS.map((item) => (
            <View
              key={item.id}
              style={{ width: 60, height: 60, borderRadius: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: item.cor }}
            >
              <Image source={item.icone} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
            </View>
          ))}
        </View>

        <Text style={{ fontWeight: 'bold', marginBottom: 10, fontSize: FONT_TITULO, color: COR_TEXTO }}>
          {TITULO_TECNOLOGIA}
        </Text>

        {ITENS.map((item) => (
          <View key={item.id}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 10 }}>
              <Image source={item.imagem} style={{ width: 70, height: 50, borderRadius: 10, resizeMode: 'cover' }} />
              <Text style={{ flex: 1, marginLeft: 10, color: '#555', fontSize: FONT_TEXTO }}>
                {TEXTO_CARD}
              </Text>
            </View>

            <View style={{ height: 8, backgroundColor: '#DDD', borderRadius: 10, marginBottom: 10 }}>
              <View
                style={{
                  width: item.progresso,
                  backgroundColor: item.cor,
                  height: 8,
                  borderRadius: 10
                }}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export default App;