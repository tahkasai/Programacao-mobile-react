import React, {useState} from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
    <Text style={styles.h1}>Usando useState</Text>
      <View>
        <Text>Qtd. produtos {count}</Text>
        <View style={styles.botaoContainer}> 
          <Button color='#CD5C5C' onPress={() => setCount(count+1)} title="Adicionar produto"/>
        </View>
        <View style={styles.botaoContainer}>
          <Button color='#CD5C5C' onPress={() => setCount(count-1)} title="Excluir produto"/>
        </View>
      </View>

      <View>
        <Text>Voce clicou {contador} vezes</Text>
        <View style={styles.botaoContainer}>
          <Button color='#CD5C5C' onPress={() => setContador(contador+1)} title="Clique aqui!"/>
        </View>
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
  },
  botaoContainer: {
    marginBottom: 5
  }
});

export default App;