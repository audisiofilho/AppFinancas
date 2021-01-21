import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from "@expo/vector-icons";
import { Container, Tipo, IconView, TipoText, ValorText } from "./style";

export default function HistoricoList() {
 return (
   <Container>
       <Tipo>
           <IconView>
               <Feather name='arrow-up' color='#fff' size={20}/>
               <TipoText>Receita</TipoText>
           </IconView>
       </Tipo>
       <ValorText>
           R$ 900
       </ValorText>
   </Container>
  );
}