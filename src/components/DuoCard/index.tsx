

import { View, Text } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

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
    data: DuoCardProps
}


export function DuoCard({ data }: Props) {
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
    </View>
  );
}