

import { View, Text, TouchableOpacity } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';
import {GameController} from 'phosphor-react-native'

export interface DuoCardProps{
        id: string,
        name: string,
        hourEnd: string,
        hourStart: string,
        useVoiceChannel: boolean,
        weekDays: string[],
        yearsPlaying: number
        
}
interface Props {
    data: DuoCardProps;
    onConect: () => void;
}


export function DuoCard({ data, onConect }: Props) {
  return (
    <View style={styles.container}>
        <DuoInfo 
          label='Nome'
          value= {data.name}
        />
        <DuoInfo 
          label='Tempo de Jogo'
          value={`${data.yearsPlaying} anos`}
        />
        <DuoInfo 
          label='Disponibilidade'
          value={` ${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
        />
        <DuoInfo 
          label='Chamada de áudio'
          value={data.useVoiceChannel ? "Sim":"Não"} 
          colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
        />

        <TouchableOpacity
         style={styles.button}
         onPress={onConect}
        >
          <GameController
             color={THEME.COLORS.TEXT}
             size={20}
          />
          <Text style={styles.buttonTitle}>
            Conectar
          </Text>

        </TouchableOpacity>

       
    </View>
  );
}