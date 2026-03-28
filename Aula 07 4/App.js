import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

const App = () => {
  const [nome, setNome] = useState("");

  const validar = () => {
    if (!nome.trim()) {
      alert("Vazio");
    } else {
      alert(`Nome digitado foi ${nome}`)
    }
  }

  return (
    <View style={Estilos.container}>
      <Text>Nome</Text>
      <TextInput style={Estilos.textInput}
                placeholder="Digite seu nome"
                onChangeText={(valor) => setNome(valor)} />
      <Button title="Validar" onPress={()=>validar()} />
    </View>
  );
}

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput:{
    margin: 5,
    borderWidth: 1,
    borderColor: '#000',
    width: 200
  }
});

export default App;
