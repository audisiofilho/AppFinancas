import React, { useState, useContext } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";
import Header from "../../components/Header";
import HistoricoList from "../../components/HistoricoList";

import { Background, Container, Nome, Saldo, Tittle, List } from "./styles";

export default function Home() {
  const { user } = useContext(AuthContext);

  const [historico, setHistorico] = useState([
    { key: "1", tipo: "receita", valor: 1200 },
    { key: "2", tipo: "despesa", valor: 200 },
    { key: "3", tipo: "receita", valor: 100 },
    { key: "4", tipo: "receita", valor: 12.9 },
  ]);

  return (
    <Background>
      <Header />
      <Container>
        <Nome>Audisio</Nome>
        <Saldo>R$123,00</Saldo>
      </Container>

      <Tittle>Ultimas movimentações</Tittle>

      <List
        showVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={(item) => item.key}
        renderItem={ ({ item }) => ( <HistoricoList/> ) }
      />
    </Background>
  );
}
