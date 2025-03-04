
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://your-server-ip:5000/signin', { email, password });
            Alert.alert('Success', 'Login successful');
            navigation.navigate('ExplorerScreen'); // Chuyển hướng sau khi đăng nhập
        } catch (error) {
            Alert.alert('Error', error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
                <Text style={styles.signupText}>Not a member? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    input: { width: '80%', height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
    button: { backgroundColor: '#fcb045', padding: 15, width: '80%', alignItems: 'center', borderRadius: 5 },
    buttonText: { color: '#fff', fontSize: 16 },
    signupText: { marginTop: 20, color: 'blue' }
});

export default LoginScreen;
