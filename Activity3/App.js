import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const morning = [
  {
    id: 'todo1',
    title: 'Wake-up',
  },

  {
    id: 'todo2',
    title: 'Toothbrush',
  },

  {
    id: 'todo3',
    title: 'Cooking Breakfast',
  },

  {
    id: 'todo4',
    title: 'Eating Break Fast',
  },
  {
    id: 'todo5',
    title: 'Make a Coffee',
  },
  {
        id: 'todo6',
    title: 'Watch Cartoons',
  },
   {
        id: 'todo7',
    title: 'Exercise',
  },
];
const afternoon = [
  {
    id: 'todo8',
    title: 'Take a shower',
  },
  {
    id: 'todo9',
    title: 'Preparing my Clothes',
  },
  {
    id: 'todo10',
    title: 'Do my Activities',
  },
  {
        id: 'todo11',
    title: 'GO to my Friends House',
  },
   {
        id: 'todo12',
    title: 'Playing with my Friends',
  },
  {
        id: 'todo13',
    title: 'Playing Basketball',
  },

  {
        id: 'todo14',
    title: 'Watching Movies With Friends',
  },

  {
        id: 'todo15',
    title: 'Gala with Friends',
  },

  {
        id: 'todo16',
    title: 'Go to my Girlfriend House',
  },

  {
        id: 'todo17',
    title: 'Eating snacks with my Girlfriend',
  },

   {
        id: 'todo18',
    title: 'Gala with Girlfriend',
  },

];

const evening = [
  {
    id: 'todo19',
    title: 'Help my Mom cook',
  },
  {
    id: 'todo20',
    title: 'Watching TV',
  },
  {
    id: 'todo21',
    title: 'Social Media',
  },
  {
        id: 'todo22',
    title: 'Eating Dinner',
  },

  {
        id: 'todo23',
    title: 'Halfbath before go to bed',
  },

  {
        id: 'todo24',
    title: 'Pray Before Sleep',
  },

   {
        id: 'todo25',
    title: 'Go to bed',
  },
];



type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <Text style={styles.todo}>TO DO LIST</Text>
     
    <Text       style={{
          borderColor: 'black',
          borderWidth: 5,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Morning </Text>
      <FlatList
        data={morning}
        renderItem={({item}) =><Item title={item.title}  />}  
        keyExtractor={item => item.id}
        
      />
    <Text
    style={{
          borderColor: 'black',
          borderWidth: 4,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Afternoon </Text>

      <FlatList
        data={afternoon}
        renderItem={({item}) => <Item title={item.title}  />}
        keyExtractor={item => item.id}
      />
      <Text
      style={{
          borderColor: 'black',
          borderWidth: 4,
          textAlign: 'center',
          padding: '10px',
          fontSize: '20px',
        }}> Evening </Text>

      <FlatList
        data={evening}
        renderItem={({item}) =><Item title={item.title}  />} 
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex: 2,
    marginTop: StatusBar.currentHeight || 2,
  },
  item: {
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 5,
    marginHorizontal: 14,
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

  
  title: {
    fontSize: 20,
    backgroundColor: 'lightblue',
  },
 
});

export default App;