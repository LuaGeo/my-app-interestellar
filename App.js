import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";

import Constants from "expo-constants";

import { Entypo } from "@expo/vector-icons";

export default function App() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View
          style={{
            height: 60,
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
        <View
          style={{ height: 340, backgroundColor: "#212121", width: "100%" }}
        >
          <View style={{ padding: 10 }}>
            <Text style={styles.text}>Interstellar</Text>
            <Text style={styles.p}>
              2014 &nbsp;&nbsp;PG-13 &nbsp;&nbsp;2h 49min &nbsp;&nbsp;Adventure,
              Drama, Sci-Fi
            </Text>

            <View style={{ flexDirection: "row", gap: 15 }}>
              <Image
                source={require("./assets/film.jpg")}
                style={{ height: 130, width: 90 }}
              />
              <View style={{ width: 250 }}>
                <Text style={styles.p}>
                  A team of explorers travel through a wormhole in space in an
                  attempt to ensure humanity's survival.
                </Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={{ color: "#fff" }}>+ ADD TO WATCHLIST</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                height: 120,
                marginTop: 30,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Entypo name="star" size={24} color="yellow" />
                <Text style={{ color: "white", marginTop: 5 }}>8.6/10</Text>
                <Text style={{ color: "grey", fontSize: 10 }}>1.1M</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Entypo name="star-outlined" size={24} color="white" />
                <Text style={{ color: "white", marginTop: 5 }}>RATE THIS</Text>
              </View>
              <View style={{ alignItems: "center" }}>
                <Text style={{ color: "white", backgroundColor: "green" }}>
                  74
                </Text>
                <Text style={{ color: "white", marginTop: 5 }}>Metascore</Text>
                <Text style={{ color: "grey", fontSize: 10 }}>
                  46 critic reviews
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.castBlock}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 24 }}>
              Top Billed Cast
            </Text>
            <Pressable>
              <Text style={{ color: "#03A9F5" }}>SEE ALL</Text>
            </Pressable>
          </View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={{ gap: 10, flexDirection: "row" }}>
                <View style={styles.actorContainer}>
                  <Image
                    source={require("./assets/matthew.jpg")}
                    style={styles.actorImg}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ color: "white" }} numberOfLines={1}>
                      Matthew McConaughey
                    </Text>
                    <Text style={{ color: "grey" }}>Cooper</Text>
                  </View>
                </View>
                <View style={styles.actorContainer}>
                  <Image
                    source={require("./assets/anne.jpg")}
                    style={styles.actorImg}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ color: "white" }} numberOfLines={1}>
                      Anne Hathaway
                    </Text>
                    <Text style={{ color: "grey" }}>Brand</Text>
                  </View>
                </View>
                <View style={styles.actorContainer}>
                  <Image
                    source={require("./assets/jessica.jpg")}
                    style={styles.actorImg}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ color: "white" }} numberOfLines={1}>
                      Jessica Chastain
                    </Text>
                    <Text style={{ color: "grey" }}>Murph</Text>
                  </View>
                </View>
                <View style={styles.actorContainer}>
                  <Image
                    source={require("./assets/mackenzie.jpg")}
                    style={styles.actorImg}
                  />
                  <View style={{ padding: 10 }}>
                    <Text style={{ color: "white" }} numberOfLines={1}>
                      Mackenzie Foy
                    </Text>
                    <Text style={{ color: "grey" }}>Murph</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "white", fontSize: 20 }}>Director</Text>
            <Text style={{ color: "grey" }}>Christopher Nolan</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: "white", fontSize: 20 }}>Writers</Text>
            <Text style={{ color: "grey" }}>
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
          </View>
        </View>

        {/* -------------- */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    marginTop: Constants.statusBarHeight,
  },
  text: { fontSize: 24, color: "white" },
  p: {
    fontSize: 14,
    color: "#a8a4a4",
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 230,
    backgroundColor: "#0177BD",
    marginRight: 10,
    borderRadius: 3,
    height: 30,
  },
  castBlock: {
    backgroundColor: "#212121",
    height: "100%",
    marginTop: 20,
    padding: 10,
  },
  actorContainer: {
    backgroundColor: "#2A2A2A",
    height: 300,
    width: 150,
    gap: 10,
    marginTop: 20,
  },
  actorImg: { width: 150, height: 230 },
});
