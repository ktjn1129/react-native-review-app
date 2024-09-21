import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useContext, useEffect, useState } from "react";
import { Alert, Image, SafeAreaView, StyleSheet, View } from "react-native";
import { Button } from "../components/Button";
import { IconButton } from "../components/IconButton";
import { Loading } from "../components/Loading";
import { StarInput } from "../components/StarInput";
import { TextArea } from "../components/TextArea";
import { UserContext } from "../contexts/UserContext";
import { pickImage } from "../lib/image-picker";
import { RootStackParamList } from "../types/navigation";
import { Review } from "../types/review";
import { getExtention } from "../utils/file";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "CreateReview">;
  route: RouteProp<RootStackParamList, "CreateReview">;
};

export const CreateReviewScreen: React.FC = ({ navigation, route }: Props) => {
  const { shop } = route.params;
  const [text, setText] = useState<string>("");
  const [score, setScore] = useState<number>(3);
  const [imageUri, setImageUri] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <IconButton name="x" onPress={() => navigation.goBack()} />
      ),
    });
  }, [shop]);

  const onSubmit = async () => {
    if (!text || !iamgeUri) {
      Alert.alert("レビューまたは画像がありません");
      return;
    }
    setLoading(true);

    const date = new Date();
    const currentTime = date.getTime();
    const ext = getExtention(imageUri);
    const storagePath = `reviews/${currentTime}.${ext}`;
    const downloadUrl = await uploadImage(imageUri, storagePath);

    const review = {
      user: {
        name: user.name,
        id: user.id,
      },
      shop: {
        name: shop.name,
        id: shop.id,
      },
      text,
      score,
      imageUrl: downloadUrl,
    } as Review;

    await addReview(shop.id, review);

    setLoading(false);
    navigation.goBack();
  };

  const onPickImage = async () => {
    const uri = await pickImage();
    setImageUri(uri);
    console.log(uri);
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
      <View style={styles.photoContainer}>
        <IconButton name="camera" onPress={onPickImage} color="#ccc" />
        {!!imageUri && (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )}
      </View>
      <Button text="レビューを投稿する" onPress={onSubmit} />
      <Loading visible={loading} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  photoContainer: {
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 8,
  },
});

// レビュー更新処理（後ほどAPI呼び出しに置換）
const addReview = (shopId: string, review: Review) => {};

// 画像アップロード処理（後ほどAPI呼び出しに置換）
const uploadImage = (uri: string, path: string) => {
  return "";
};
