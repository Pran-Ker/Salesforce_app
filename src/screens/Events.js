import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Table, Row } from 'react-native-table-component';

import {
  Dimensions,
  StyleSheet,
  ImageBackground,
} from "react-native";

const { width } = Dimensions.get("screen");


const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch('');
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  const tableHead = ['Subject', 'Start Date', 'End Date', 'Description'];

  const tableData = events.map((event) => [
    event.Subject,
    event.StartDateTime,
    event.EndDateTime,
    event.Description,
  ]);

  return (
    <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
    <View style={styles.container}>
      <Table borderStyle={styles.tableBorder}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <FlatList
          data={tableData}
          renderItem={({ item }) => (
            <Row data={item} style={styles.row} textStyle={styles.text} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </Table>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  row: { height: 40 },
  text: { margin: 6 }
});

export default EventList;