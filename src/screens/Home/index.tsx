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

  function handleProductAdd() {
    const newProduct: Product = {
      name: productName,
      isDone: false,
    };

    setProducts((prevState) => [...prevState, newProduct]);
    setProductName("");
  }

  function handleProductRemove(name: string) {
    setProducts(products.filter((product) => product.name !== name));
  }

  function handleProductDone(name: string) {
    setProducts(
      products.map((product) =>
        product.name === name
          ? { ...product, isDone: !product.isDone }
          : product
      )
    );
  }

  return (
    <Container>
      <Input
        placeholder="Adicione um produto..."
        value={productName}
        onChangeText={setProductName}
      ></Input>
      <Button title="Adicionar" onPress={handleProductAdd}></Button>
      <FlatList
        data={products}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Product
            name={item.name}
            isDone={item.isDone}
            onDone={() => handleProductDone(item.name)}
            onRemove={() => handleProductRemove(item.name)}
          />
        )}
        ListEmptyComponent={<EmptyListComponent />}
      />
    </Container>
  );
}
