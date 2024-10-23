import React from 'react';
import { ScrollView, View } from 'react-native';
import { styles } from './HomeStyle';
import PessoaItemList from './../components/PessoaItemList/PessoaItemList';

type Pessoa = {
  id: number;
  nome: string;
  idade: number
}

let listaPessoas: Pessoa[] = [
  { id: 1, nome: "Ana Alice", idade: 25},
  { id: 2, nome: "Paula", idade: 43},
  {id: 3, nome: "Patolino", idade: 36},
];

export function Home() {
  return (
    <ScrollView contentContainerStyle ={styles.container}>
      {listaPessoas.map((Pessoa) => (
        <PessoaItemList id={Pessoa.id} nome={Pessoa.nome} idade={Pessoa.idade} />
      ))}
    </ScrollView>
  );
}