import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScheduleScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ScheduleScreen</Text>
    </View>
  )
}

export default ScheduleScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      },
})