import { EmptyListComponent } from "../../components/EmptyList";
import { Button, Container, Input } from "./styles";

export function Home() {
  return (
    <Container>
      <Input placeholder="Adicione uma tarefa..."></Input>
      <Button title="Adicionar" onPress={() => {}}></Button>
      <EmptyListComponent />
    </Container>
  );
}
