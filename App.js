import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

   const [age, setAge] = useState('')
   const [low, setLow] = useState(0)
   const [high, setHigh] = useState(0)


   const HLR = () => {
    const lower =  (220 - age) * 0.65
    const higher =  (220 - age) * 0.85
    setLow(lower)
    setHigh(higher)
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.field}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
      />
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{low.toFixed(0)} - {high.toFixed(0)}</Text>

      <Button title='Calculate' onPress={HLR}></Button>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10
  },
  field: {
    marginBottom: 10
  }
});
