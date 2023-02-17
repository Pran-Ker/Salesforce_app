import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { SFSmartStoreReactBridge } from 'react-native-salesforce-sdk';

const SalesforceEventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch the events from Salesforce
    // and update the state
    const fetchEvents = async () => {
      const querySpec = {
        queryType: 'smart',
        smartSql: `SELECT Id, Subject, StartDateTime, EndDateTime, Description FROM Event`,
      };
      const records = await SFSmartStoreReactBridge.querySoup(
        'Event',
        querySpec,
      );
      setEvents(records);
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
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30 },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  row: { height: 40 },
  text: { margin: 6 },
  tableBorder: { borderWidth: 1, borderColor: '#c8e1ff' },
});

export default SalesforceEventList;
