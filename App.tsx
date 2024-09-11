import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Shop } from "./src/types/shop";
import { shops } from "./mock/data";

export default function App() {
  const [shopList, setShopList] = useState<Shop[]>([]);

  useEffect(() => {
    setShopList(shops);
  }, []);

  const shopItems = shopList.map((shop, index) => (
    <View style={{ margin: 10 }} key={index.toString()}>
      <Text>{shop.name}</Text>
      <Text>{shop.place}</Text>
    </View>
  ));

  return <View style={styles.container}>{shopItems}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
