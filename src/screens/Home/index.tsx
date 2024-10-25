import { FlatList } from "react-native";
import { EmptyListComponent } from "../../components/EmptyList";
import { Product } from "../../components/Product";
import { Button, Container, Input } from "./styles";
import { useState } from "react";

type Product = {
  name: string;
  isDone: boolean;
};

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productName, setProductName] = useState<string>("");

  return (
    <Container>
      <Input
        placeholder="Adicione uma tarefa..."
        value={productName}
        onChangeText={setProductName}
      ></Input>
      <Button title="Adicionar"></Button>
      <FlatList
        data={products}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Product
            name={item.name}
            isDone={item.isDone}
            onDone={() => {}}
            onRemove={() => {}}
          />
        )}
        ListEmptyComponent={<EmptyListComponent />}
      />
    </Container>
  );
}
