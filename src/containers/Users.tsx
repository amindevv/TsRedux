import React from 'react'

import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'

const Users = () => {

  return (
    <View style={styles.users}>
      <Text>Users</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  users: {
    flex: 1,
    backgroundColor:'black'
  }
})

export default Users