import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AgendaScreen = () => {
  // Sample data for the current month and year
  const month = 'Julho';
  const year = 2020;

  // Sample data for the days of the month
  const daysOfMonth = [
    'D', 'S', 'T', 'Q', 'Q', 'S', 'S',
    '28', '29', '30', '1', '2', '3', '4',
    '5', '6', '7', '8', '9', '10', '11',
    // Add the rest of the days of the month here 
  ];

  return (
    <View style={styles.container}>
      {/* Month and Year */}
      <View style={styles.header}>
        <Text style={styles.monthYear}>{month} ({year})</Text>
      </View>

      {/* Weekday initials and Days of the month */}
      <View style={styles.weekdaysContainer}>
        {/* Weekday initials */}
        <Text style={styles.weekday}>D</Text>
        <Text style={styles.weekday}>S</Text>
        <Text style={styles.weekday}>T</Text>
        <Text style={styles.weekday}>Q</Text>
        <Text style={styles.weekday}>Q</Text>
        <Text style={styles.weekday}>S</Text>
        <Text style={styles.weekday}>S</Text>

        {/* Days of the month */}
        {daysOfMonth.map((day, index) => (
          <Text key={index} style={styles.day}>{day}</Text>
        ))}
      </View>

      {/* Month and Year selection */}
      <View style={styles.selectionContainer}>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>Mês ↓</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.selectionButton}>
          <Text style={styles.selectionButtonText}>Ano ↓</Text>
        </TouchableOpacity>
      </View>

      {/* Buttons for actions and configuration */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>+ Ação</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.configButton}>
          <Text style={styles.buttonText}>⚙</Text>
        </TouchableOpacity>
      </View>

      {/* Line separator */}
      <View style={styles.separator} />

      {/* Day marked information */}
      <View style={styles.dayInfoContainer}>
        <Text style={styles.dayInfoTitle}>09 de Julho</Text>
        <View style={styles.eventsContainer}>
          <View style={styles.event}>
            <Text style={styles.eventText}>- Fazer um bolo - 16:30</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>✏</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.event}>
            <Text style={styles.eventText}>- Correr - 18:30</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>✏</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.event}>
            <Text style={styles.eventText}>- Reunião de trabalho - 20:00</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>✏</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  monthYear: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  weekdaysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  weekday: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  day: {
    fontSize: 16,
    width: '14.28%', // 6 letters in a column
    textAlign: 'center',
  },
  selectionContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  selectionButton: {
    backgroundColor: '#3A5340',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  selectionButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  actionButton: {
    backgroundColor: '#728056',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  configButton: {
    backgroundColor: '#728056',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  separator: {
    borderBottomColor: '#3A5340',
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  dayInfoContainer: {
    marginBottom: 20,
  },
  dayInfoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  eventsContainer: {
    marginTop: 10,
  },
  event: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  eventText: {
    fontSize: 16,
  },
  editButton: {
    marginLeft: 'auto',
  },
  editButtonText: {
    fontSize: 20,
  },
});

export default AgendaScreen;
