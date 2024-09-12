import { useEffect, useState } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import { Shop } from "../../src/types/shop";
import { shops } from "../../mock/data";
import { ShopReviewItem } from "../../src/components/ShopReviewItem";

export const HomeScreen = ({ navigation }) => {
  const [shopList, setShopList] = useState<Shop[]>([]);

  useEffect(() => {
    setShopList(shops);
  }, []);

  const onPressShop = () => {
    navigation.navigate("Shop");
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shopList}
        renderItem={({ item }: { item: Shop }) => (
          <ShopReviewItem shop={item} onPress={onPressShop} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      ></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
