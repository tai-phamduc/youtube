// MovieCard.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Sử dụng icon ngôi sao

const MovieCard = ({ movie }) => {
  
  function formatNumber(num) {
    if (num >= 1000) {
      const suffixes = ['k', 'M', 'B', 'T']; // You can extend this as needed
      const magnitude = Math.floor(Math.log10(num) / 3);
      const formattedNum = (num / Math.pow(1000, magnitude)).toFixed(1); // One decimal place
      return formattedNum + suffixes[magnitude - 1];
    }
    return num.toString(); // Return as-is if less than 1000
  }

  return (
    <View style={styles.card}>
      {/* Poster */}
      <Image source={{ uri: movie.movie_poster }} style={styles.poster} />

      {/* Thông tin phim */}
      <View style={styles.infoContainer}>
        {/* Rating với ngôi sao màu vàng */}
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={16} color="#FFD700" />
          {/* <Text style={styles.ratingText}>{movie.rating}</Text> */}
          <Text>{movie.rating.avg_rating.$numberDecimal}/10</Text>
          <Text>({formatNumber(movie.rating.number_of_rating)} Ratings)</Text>
        </View>

        {/* Tên phim */}
        <Text style={styles.movieTitle} numberOfLines={1}>
          {movie.movie_name}
        </Text>

        {/* Thể loại */}
        <Text style={styles.genre} numberOfLines={1}>
          {movie.genre}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 160,
    marginRight: 16,
    borderRadius: 8,
    // overflow: "hidden",
    backgroundColor: "#fff",
    // elevation: 3, // Đổ bóng trên Android
    // shadowColor: "#000", // Đổ bóng trên iOS
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
  },
  poster: {
    width: "100%",
    height: 240,
  },
  infoContainer: {
    alignItems: "center", // Căn giữa nội dung
    padding: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
    gap: 4
  },
  ratingText: {
    fontSize: 14,
    color: "#333",
    marginLeft: 4,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
    textAlign: "center", // Căn giữa tên phim
  },
  genre: {
    fontSize: 14,
    color: "#666",
    textAlign: "center", // Căn giữa thể loại
  },
});

export default MovieCard;
