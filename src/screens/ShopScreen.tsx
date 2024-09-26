import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { ShopDetail } from "../components/ShopDetail";
import { FloatingActionButton } from "../components/FloatingActionButton";
import { RootStackParamList } from "../types/navigation";
import { useEffect, useState } from "react";
import { ReviewItem } from "../components/ReviewItem";
import { Review } from "../types/review";
import { review } from "../../mock/data";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Shop">;
  route: RouteProp<RootStackParamList, "Shop">;
};

export const ShopScreen: React.FC = ({ navigation, route }: Props) => {
  const { shop } = route.params;
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    navigation.setOptions({ title: shop.name });

    setReviews(review);
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={<ShopDetail shop={shop} />}
        data={reviews.filter((review) => review.shop.id === shop.id)}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(item) => item.id}
      />
      <FloatingActionButton
        iconName="plus"
        onPress={() => navigation.navigate("CreateReview", { shop })}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
