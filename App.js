import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity, Button } from 'react-native';
import { evaluate } from 'mathjs'

export default function App() {

  const [calculate, setCalculate] = useState('')

  const addToCalculate = (value) => {
    setCalculate(calculate + value)
  }

  const handleCalculate = () => {
    setCalculate(evaluate(calculate))
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.displayWrapper}>
        <Text style={styles.title}>Display</Text>
        <View style={styles.display}>
          <Text style={styles.result}>{calculate}</Text>
        </View>
        <View style={styles.itemWrapper}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.item} onPress={() => addToCalculate(1)}>
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => addToCalculate(2)}>
              <Text style={styles.text}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemDark} onPress={() => addToCalculate(3)}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemDark} onPress={() => addToCalculate('+')}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.item} onPress={() => addToCalculate(3)}>
              <Text style={styles.text}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => addToCalculate(4)}>
              <Text style={styles.text}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemDark} onPress={() => addToCalculate('/')}>
              <Text style={styles.text}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemDark} onPress={() => addToCalculate('*')}>
              <Text style={styles.text}>*</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.item} onPress={() => addToCalculate(5)}>
              <Text style={styles.text}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => addToCalculate(6)}>
              <Text style={styles.text}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemDark} onPress={() => addToCalculate('%')}>
              <Text style={styles.text}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemDark} onPress={() => handleCalculate()}>
              <Text style={styles.text}>=</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.item} onPress={() => addToCalculate(7)}>
              <Text style={styles.text}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => addToCalculate(8)}>
              <Text style={styles.text}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => addToCalculate(9)}>
              <Text style={styles.text}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => addToCalculate('0')}>
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.clear} onPress={() => setCalculate('')}>
              <Text style={styles.text}>AC</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA0A0',
    paddingRight:22,
    paddingLeft:22,
    paddingTop:68
  },
  title:{
    fontSize: 16,
    marginBottom: 11,
    paddingLeft: 23,
    color: '#FFFFFF'
  },
  displayWrapper: {
    fontSize:11
  },
  display: {
    height:90,
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 20,
    paddingBottom: 10,
    marginBottom: 41
  },
  result: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  row: {
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom: 11
  },
  item: {
    width: 80,
    height:80,
    backgroundColor: '#FF5757',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemDark: {
    width: 80,
    height:80,
    backgroundColor: '#930707',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clear: {
    flex: 1,
    height: 80,
    backgroundColor: '#FF5757',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: '#FFFFFF'
  }
});
