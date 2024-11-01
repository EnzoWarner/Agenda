import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { getAgenda, adicionarAgenda } from '../../repository/AgendaRepository';

export default function AgendaScreen() {
    const [novoNome, setNovoNome] = useState('');
    const [novoTelefone, setNovoTelefone] = useState('');
    const [agenda, setAgenda] = useState([]);

    useEffect(() => {
        getAgenda(setAgenda);
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Agenda</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite Nome"
                    value={novoNome}
                    onChangeText={setNovoNome}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    value={novoTelefone}
                    onChangeText={setNovoTelefone}
                />
                <Button title="Adicionar" onPress={() => {
                    adicionarAgenda(novoNome, novoTelefone, setAgenda); // Corrigido
                    setNovoNome('');
                    setNovoTelefone('');
                }} />
            </View>
            <Text style={styles.titulo}>LISTA:</Text>
            <FlatList
                data={agenda}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.nome}</Text>
                        <Text> --- </Text>
                        <Text>{item.telefone}</Text>
                    </View>
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginRight: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});