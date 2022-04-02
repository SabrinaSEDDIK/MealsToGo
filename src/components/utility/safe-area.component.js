import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;
/*${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};*/
/*pour compatibilité iOS car SafeAreaView est seulement pour iOS - désactivé à la mise en place d'un menu tab*/
