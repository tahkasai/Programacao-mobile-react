import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from "react";

const App = () => {
  const [resultado, setResultado] = useState(null);
  const [operador1, setOperador1] = useState(null);
  const [operador2, setOperador2] = useState(null);

  const somar = () => {
    if (!operador1 || !operador2) {
      setResultado("Preencha os dois valores");
    } else{
      setResultado(parseInt(operador1) + parseInt(operador2));
    }
    
  }
  
  const subtrair = () => {
    if (!operador1 || !operador2) {
      setResultado("Preencha os dois valores");
    } else{
      setResultado(parseInt(operador1) - parseInt(operador2));
    }
  }

  const multiplicar = () => {
    if (!operador1 || !operador2) {
      setResultado("Preencha os dois valores");
    } else{
      setResultado(parseInt(operador1) * parseInt(operador2));
    }
  }

  const dividir = () => {
    if (!operador1 || !operador2) {
      setResultado("Preencha os dois valores");
    } else{
      if(parseInt(operador2) === 0){
        setResultado("Não é possivel dividir zero");
      } else{
        setResultado(parseInt(operador1) / parseInt(operador2));
      }
    } 
  }

  return (
    <View style={Estilos.container}>
    <Text style={Estilos.h1}>Calculadora</Text>
      <Text>Digite o operador 1:</Text>
      <TextInput style={Estilos.textInput}
                 keyboardType = 'numeric'
                 onChangeText={(value) => setOperador1(value)} />
      <Text>Digite o operador 2:</Text>
      <TextInput style={Estilos.textInput}
                 keyboardType = 'numeric'
                 onChangeText={(value) => setOperador2(value)} />
      <View style={Estilos.botaoContainer}>
        <Button color='#CD5C5C' title="Somar valores" onPress={()=>somar()} />
      </View>

      <View style={Estilos.botaoContainer}>
        <Button color='#CD5C5C' title="Subtrair valores" onPress={()=>subtrair()} />
      </View>

      <View style={Estilos.botaoContainer}>
        <Button color='#CD5C5C' title="Multiplicar valores" onPress={()=>multiplicar()} />
      </View>

      <View style={Estilos.botaoContainer}>
        <Button color='#CD5C5C' title="Dividir valores" onPress={()=>dividir()} />
      </View>

      <Text style={Estilos.textResultado}>Resultado: {resultado}</Text>
      
    </View>
  );
}

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#B22222'
  },
  textInput:{
    margin: 5,
    borderWidth: 1,
    borderColor: '#000',
    width: 200
  },
  textResultado: {
    fontSize: 20,
    margin: 5,
    fontWeight: 400,
    color: "#CD5C5C"
  },
  botaoContainer: {
    marginBottom: 5
  }
});

export default App;
