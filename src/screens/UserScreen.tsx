import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useContext, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { user } from "../../mock/data";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { UserContext } from "../contexts/userContext";
import { RootStackParamList } from "../types/navigation";
import { Loading } from "../components/Loading";
import { User } from "../types/user";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "User">;
  route: RouteProp<RootStackParamList, "User">;
};

export const UserScreen: React.FC<Props> = ({ navigation, route }) => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState<string>(user.name);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    setLoading(true);
    const updatedUser = await updateUser(user.id, name);
    setUser(updatedUser as User);
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Form
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
        label="名前"
      />
      <Button onPress={onSubmit} text="保存する" />
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
});

// ユーザー更新処理（後にAPI呼び出しに置換）
const updateUser = (userId: string, newName: string) => {
  const targetUser = user.find((u) => u.id === userId);

  if (targetUser) {
    targetUser.name = newName;
  }
  return targetUser;
};
