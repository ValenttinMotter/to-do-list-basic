import { TouchableOpacity } from "react-native";
import { Container, TextProduct } from "./styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  name: string;
  isDone: boolean;
  onDone: () => void;
  onRemove: () => void;
};

export function Product({ name, isDone, onDone, onRemove }: Props) {
  return (
    <Container isDoneStyles={isDone} onPress={onDone}>
      <TextProduct isDoneStyles={isDone}>{name}</TextProduct>
      <TouchableOpacity onPress={onRemove}>
        <FontAwesome name="trash-o" size={24} color="black" />
      </TouchableOpacity>
    </Container>
  );
}
