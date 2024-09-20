import { useEffect, useState } from "react";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { TextArea } from "../components/TextArea";
import { IconButton } from "../components/IconButton";
import { StarInput } from "../components/StarInput";
import { Button } from "../components/Button";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "CreateReview">;
  route: RouteProp<RootStackParamList, "CreateReview">;
};

export const CreateReviewScreen: React.FC = ({ navigation, route }) => {
  const { shop } = route.params;
  const [text, setText] = useState<string>("");
  const [score, setScore] = useState<number>(3);

  useEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton name="x" onPress={() => navigation.goBack()} />
      ),
    });
  }, [shop]);

  const onSubmit = () => {
    // レビュー投稿処理
  };

  return (
    <SafeAreaView style={styles.container}>
      <StarInput score={score} onChangeScore={(value) => setScore(value)} />
      <TextArea
        value={text}
        onChangeText={(value) => setText(value)}
        label="レビュー"
        placeholder="レビューを書いてください"
      />
      <Button text="レビューを投稿する" onPress={onSubmit} />
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
