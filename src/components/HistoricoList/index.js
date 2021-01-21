import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { Container, Tipo, IconView, TipoText, ValorText } from "./style";

export default function HistoricoList({ data }) {
 return (
   <Container>
       <Tipo>
           <IconView tipo={data.tipo}>
               <Feather name={data.tipo === 'despesa' ? 'arrow-down' : 'arrow-up'} color='#fff' size={20} />
               <TipoText>{data.tipo}</TipoText>
           </IconView>
       </Tipo>
       <ValorText>
           R$ {data.valor}
       </ValorText>
   </Container>
  );
}