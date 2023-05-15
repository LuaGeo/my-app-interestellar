import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 60,
          width: "100%",
          backgroundColor: "#393939",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("./assets/logo-imdb_tj4n8g.png")}
          style={{
            height: 35,
            width: 75,
            borderColor: "white",
            borderWidth: 1,
            borderRadius: 5,
            marginLeft: 10,
          }}
        />
      </View>
      <View style={{ height: 340, backgroundColor: "#252525", width: "100%" }}>
        <View style={{ padding: 10 }}>
          <Text style={styles.text}>Interstellar</Text>
          <Text style={styles.p}>
            2014 &nbsp;&nbsp;PG-13 &nbsp;&nbsp;2h 49min &nbsp;&nbsp;Adventure,
            Drama, Sci-Fi
          </Text>
          <View styles={{ flex: 1, flexDirection: "row" }}>
            <Image
              source={require("./assets/film.jpg")}
              style={{ height: 130, width: 90 }}
            />
            <View styles={{ flex: 2 }}>
              <Text style={styles.p}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <TouchableOpacity>
                <Text>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
  text: { fontSize: 24, color: "white" },
  p: { fontSize: 14, color: "#a8a4a4", marginTop: 10, marginBottom: 20 },
});
