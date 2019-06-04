import React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const AddEntryButton: React.FC = () => <FAB style={styles.fab} small={false} icon="add" />;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    bottom: 0,
    right: 0,
  },
});

export default AddEntryButton;
