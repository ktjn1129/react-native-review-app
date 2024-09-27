import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Stars } from "../components/Stars";
import { Review } from "../types/review";

type Props = {
  review: Review;
};

export const ReviewItem: React.FC<Props> = ({ review }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View>
          <Stars score={review.score} starSize={16} textSize={12} />
          <Text style={styles.reviewText}>{review.text}</Text>
        </View>
        <Text style={styles.nameText}>{`${review.user.name}`}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Image style={styles.image} source={{ uri: review.imageUrl }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
  },
  leftContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  rightContainer: {},
  image: {
    width: 100,
    height: 100,
  },
  reviewText: {
    marginTop: 4,
    color: "#000",
  },
  nameText: {
    color: "#888",
    fontSize: 12,
  },
});
