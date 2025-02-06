import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const colorRndm = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const morning = [
  { id: 'todo1', title: 'Wake-up' },
  { id: 'todo2', title: 'Toothbrush' },
  { id: 'todo3', title: 'Cooking Breakfast' },
  { id: 'todo4', title: 'Eating Breakfast' },
  { id: 'todo5', title: 'Make a Coffee' },
  { id: 'todo6', title: 'Watch Cartoons' },
  { id: 'todo7', title: 'Exercise' },
].map(item => ({ ...item, color: colorRndm() }));

const afternoon = [
  { id: 'todo8', title: 'Take a shower' },
  { id: 'todo9', title: 'Preparing my Clothes' },
  { id: 'todo10', title: 'Do my Activities' },
  { id: 'todo11', title: 'Go to my Friends House' },
  { id: 'todo12', title: 'Playing with my Friends' },
  { id: 'todo13', title: 'Playing Basketball' },
  { id: 'todo14', title: 'Watching Movies With Friends' },
  { id: 'todo15', title: 'Gala with Friends' },
  { id: 'todo16', title: 'Go to my Girlfriend House' },
  { id: 'todo17', title: 'Eating snacks with my Girlfriend' },
  { id: 'todo18', title: 'Gala with Girlfriend' },
].map(item => ({ ...item, color: colorRndm() }));

const evening = [
  { id: 'todo19', title: 'Help my Mom cook' },
  { id: 'todo20', title: 'Watching TV' },
  { id: 'todo21', title: 'Social Media' },
  { id: 'todo22', title: 'Eating Dinner' },
  { id: 'todo23', title: 'Halfbath before go to bed' },
  { id: 'todo24', title: 'Pray Before Sleep' },
  { id: 'todo25', title: 'Go to bed' },
].map(item => ({ ...item, color: colorRndm() }));

const Item = ({ title, color, isSelected, onPress }) => (
  <TouchableOpacity 
    style={[styles.item, { backgroundColor: isSelected ? 'blue' : color }]} 
    onPress={onPress}
  >
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const handlePress = (id) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle state
    }));
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.todo}>TO DO LIST</Text>
        <Text style={styles.sectionHeader}>Morning</Text>
        <FlatList
          data={morning}
          renderItem={({ item }) => (
            <Item 
              title={item.title} 
              color={item.color}
              isSelected={selectedItems[item.id]} 
              onPress={() => handlePress(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.sectionHeader}>Afternoon</Text>
        <FlatList
          data={afternoon}
          renderItem={({ item }) => (
            <Item 
              title={item.title} 
              color={item.color}
              isSelected={selectedItems[item.id]} 
              onPress={() => handlePress(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <Text style={styles.sectionHeader}>Evening</Text>
        <FlatList
          data={evening}
          renderItem={({ item }) => (
            <Item 
              title={item.title} 
              color={item.color}
              isSelected={selectedItems[item.id]} 
              onPress={() => handlePress(item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 1,
    marginTop: StatusBar.currentHeight || 2,
  },
  item: {
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 14,
    borderRadius: 5,
  },
  todo: {
    marginTop: 6,
    paddingVertical: 5,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 6,
    color: 'red',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },
  sectionHeader: {
    borderColor: 'black',
    borderWidth: 4,
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default App;
