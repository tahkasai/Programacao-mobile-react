import React, {useState} from 'react';
import { StyleSheet, Text,H1, Button, View } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
    <Text style={styles.h1}>Usando useState</Text>
      <View>
        <Text>Qtd. produtos {count}</Text>
        <Button color='#CD5C5C' onPress={() => setCount(count+1)} title="Adicionar produto"/>
        <Button color='#CD5C5C' onPress={() => setCount(count-1)} title="Excluir produto"/>
      </View>

      <View>
        <Text>Voce clicou {contador} vezes</Text>
        <Button color='#CD5C5C' onPress={() => setContador(contador+1)} title="Clique aqui!"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFEFD5',
    padding: 8
  },
  h1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#B22222'
  }
});

export default App;