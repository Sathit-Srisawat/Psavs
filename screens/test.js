
<FlatList
  data={this.state.data}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) =>
    <View style={{ marginTop: 10 }}>
      <Text style={{ color: "#000" }}>
        {item.Age}
      </Text>
    </View>
  }
/>