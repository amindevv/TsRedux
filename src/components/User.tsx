import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

const User = () => {
  return (
    <View style={styles.user}>
      <Text></Text>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  user: {
    flex: 1,
    height: 80,
    flexDirection: 'row'
  }
})

export default User

