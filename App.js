import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Text, Image, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



const element = [
  {
    id: '1',
    title: 'Exercise',
    subTitle: '12 Tasks',
    image: require('./assets/woman.png'),
  },
  {
    id: '2',
    title: 'Study',
    subTitle: '12 Tasks',
    image: require('./assets/Study.png'),
  },
  {
    id: '3',
    title: 'Work',
    subTitle: '10 Tasks',
    image: require('./assets/Work.png'),
  },
  {
    id: '4',
    title: 'Code',
    subTitle: '6 Tasks',
    image: require('./assets/Code.png'),
  },
  {
    id: '5',
    title: 'Eat',
    subTitle: '8 Tasks',
    image: require('./assets/Eat.png'),
  },
  {
    id: '6',
    title: 'Personal Development',
    subTitle: '7 Tasks',
    image: require('./assets/personal.png'),
  },
  {
    id: '7',
    title: 'Networking',
    subTitle: '9 Tasks',
    image: require('./assets/Networking.png'),
  },
  {
    id: '8',
    title: 'Fitness',
    subTitle: '9 Tasks',
    image: require('./assets/Fitness.png'),
  },
];

const tasks = [
  { id: '1', title: 'Mobile App Development' },
  { id: '2', title: 'Web Development' },
  { id: '3', title: 'Push Ups' },
  { id: '4', title: 'Reading' },
  { id: '5', title: 'Meditation' },
  { id: '6', title: 'Yoga' },
  { id: '7', title: 'Workout' },
  { id: '8', title: 'Learning React Native' },
  { id: '9', title: 'Client Meeting' },
  { id: '10', title: 'Bug Fixing' },
  { id: '11', title: 'Writing Blog Post' },
  { id: '12', title: 'Practicing Coding' },
  { id: '13', title: 'Shopping' },
  { id: '14', title: 'Cooking' },
  { id: '15', title: 'Cleaning' },
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Hello, Devs</Text>
          <Text style={styles.subTitle}>14 tasks today</Text>
        </View>
        <Image source={require('./assets/profile-image.png')} style={styles.profileIcon} />
      </View>

      {/* SEARCH BAR */}
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={24} color="black" style={styles.searchIcon} />
        <TextInput 
        placeholder="Search" 
        placeholderTextColor="black" 
        style={styles.input} 
        />
        
        <Image source={require('./assets/filter-new.png')} style={styles.filter} />
      </View>

      {/* CATEGORY TITLE */}
      <Text style={styles.categories}>Categories</Text>

      {/* CATEGORY LIST */}
      <FlatList
        data={element}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={true}
        style={{ height: 300 }}
        renderItem={({ item }) => (
          <View style={styles.one}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
            <Text style={styles.taskCount}>{item.subTitle}</Text>
          </View>
        )}
      />

    
      <Text style={styles.heading}>Ongoing Task</Text>
      <FlatList
        data={tasks}
        key={tasks.length} 
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>{item.title}</Text>
          </View>
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 52,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '500',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    paddingLeft: 10,
  },
  filter: {
    width: 40,
    height: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
  categories: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 10,
  },
  one: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: 186,
    height: 192,
  },
  categoryImage: {
    width: 151,
    height: 132,
    resizeMode: 'contain',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginTop: 10,
  },
  taskCount: {
    fontSize: 12,
    color: 'gray',
    backgroundColor: 'white', 
  padding: 5,
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 10,
  },
  taskCard: {
    backgroundColor: 'white',
    padding: 15,
    margin: 5, 
    borderRadius: 10,
    marginBottom: 10,
    flex: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});
