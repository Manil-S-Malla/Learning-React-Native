import React, {useState} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

interface InputTextProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: string;
}

const InputText: React.FC<InputTextProps> = ({
  placeholder = 'Placeholder',
  onChangeText = value => {
    console.log(value);
  },
  value = '',
}) => {
  const [text, setText] = useState(value);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={input => {
          onChangeText(input);
          setText(input);
        }}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default InputText;
