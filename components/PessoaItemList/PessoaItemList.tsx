import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './PessoaItemListStyle';

type Pessoa = {
    id: number;
    nome: string;
    idade: number;
};

export function PessoalItemList(props:Pessoa) {
    return (
        <View>
            <Text>{props.id} {props.nome} {props.idade}</Text>
        </View>
    );
}

export default PessoalItemList;