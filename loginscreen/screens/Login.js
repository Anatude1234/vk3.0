import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MainAppbar } from '../components/MainAppbar';
import { TextInput, Button } from 'react-native-paper'; 

const Login = () => {
  const [formData, setFormData] = React.useState({ username: '', password: '' });

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = () => {
  
    console.log('Form submitted:', formData);
  };

  return (
    <View> 
      <MainAppbar title="Login" />
      <View style={styles.container}>
        <TextInput
          label="Username"
          value={formData.username}
          onChangeText={(text) => handleInputChange('username', text)}
          style={styles.input}
        />
        <TextInput
          label="Password"
          value={formData.password}
          onChangeText={(text) => handleInputChange('password', text)}
          secureTextEntry
          style={styles.input}
        />
        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          Submit
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 16,
  },
});

export default Login;