<View
  style={{
    position: "absolute",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "flex-end",
    height: windowHeight / 2,
  }}
>
  <Text
    style={{
      fontWeight: "bold",
      color: "white",
      marginTop: 80,
      fontSize: 39,
    }}
  >
    {user.prenume} {user.nume}{" "}
  </Text>
  {/* Email of the user */}
  <Text
    style={{
      color: "white",
      fontSize: 13,
      marginTop: 5,
      marginBottom: 70,
    }}
  >
    Student la {user.facultate}
  </Text>

  {/* Butoanele pentru signout si about cu view blurat*/}

  <View style={{ marginBottom: 5 }}>
    <View
      style={{
        width: windowWidth,
        height: 50,
        backgroundColor: "transparent",
        marginBottom: 5,
        zIndex: 99,
      }}
    >
      <TouchableOpacity
        style={{ height: 50, justifyContent: "center" }}
        onPress={() => {
          console.log("butonul 2 apasat");
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 30, color: "white" }}>press</Text>
        </View>
      </TouchableOpacity>
    </View>
    <BlurView intensity={30} style={StyleSheet.absoluteFill} />
  </View>

  {/* Butonul 2 */}

  <View>
    <View
      style={{
        width: windowWidth,
        height: 50,
        backgroundColor: "transparent",
        marginBottom: 5,
        zIndex: 99,
      }}
    >
      <TouchableOpacity
        style={{ height: 50, justifyContent: "center" }}
        onPress={() => {
          console.log("butonul 2 apasat");
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 30, color: "white" }}>press</Text>
        </View>
      </TouchableOpacity>
    </View>
    <BlurView intensity={30} style={StyleSheet.absoluteFill} />
  </View>
</View>;
