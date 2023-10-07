import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import { Card, Input } from 'react-native-elements';

const Calificaciones = () => {
  const [students, setStudents] = useState([]);
  const [carnet, setCarnet] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [calificacion1, setCalificacion1] = useState('');
  const [calificacion2, setCalificacion2] = useState('');
  const [calificacion3, setCalificacion3] = useState('');

  const handleAddStudent = () => {
    // Validaciones de datos
    if (!carnet || !nombres || !apellidos || !calificacion1 || !calificacion2 || !calificacion3) {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
      return;
    }

    const calif1 = parseFloat(calificacion1);
    const calif2 = parseFloat(calificacion2);
    const calif3 = parseFloat(calificacion3);

    if (isNaN(calif1) || isNaN(calif2) || isNaN(calif3) || calif1 < 0 || calif1 > 10 || calif2 < 0 || calif2 > 10 || calif3 < 0 || calif3 > 10) {
      Alert.alert('Error', 'Las calificaciones deben ser números entre 0 y 10.');
      return;
    }

    const student = {
      carnet,
      nombres,
      apellidos,
      calificacion1: calif1,
      calificacion2: calif2,
      calificacion3: calif3,
    };

    // Calcular promedio y determinar si aprobó o reprobó
    const average = (student.calificacion1 + student.calificacion2 + student.calificacion3) / 3;
    student.promedio = average.toFixed(2);
    student.aprobado = average >= 6;

    setStudents([...students, student]);

    // Limpiar campos después de agregar un estudiante
    setCarnet('');
    setNombres('');
    setApellidos('');
    setCalificacion1('');
    setCalificacion2('');
    setCalificacion3('');
  };

  const handleClearStudents = () => {
    // Eliminar todos los registros de estudiantes
    setStudents([]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card containerStyle={styles.card}>
        <Input
          placeholder="Carnet"
          value={carnet}
          onChangeText={(text) => setCarnet(text)}
        />
        <Input
          placeholder="Nombres"
          value={nombres}
          onChangeText={(text) => setNombres(text)}
        />
        <Input
          placeholder="Apellidos"
          value={apellidos}
          onChangeText={(text) => setApellidos(text)}
        />
        <Input
          placeholder="Calificación 1"
          keyboardType="numeric"
          value={calificacion1}
          onChangeText={(text) => setCalificacion1(text)}
        />
        <Input
          placeholder="Calificación 2"
          keyboardType="numeric"
          value={calificacion2}
          onChangeText={(text) => setCalificacion2(text)}
        />
        <Input
          placeholder="Calificación 3"
          keyboardType="numeric"
          value={calificacion3}
          onChangeText={(text) => setCalificacion3(text)}
        />
        <Button
          title="Agregar Estudiante"
          onPress={handleAddStudent}
          buttonStyle={{ backgroundColor: '#4CAF50' }}
        />
      </Card>

      {students.map((student, index) => (
        <Card key={index} containerStyle={styles.card}>
          <Text style={styles.studentText}>Carnet: {student.carnet}</Text>
          <Text style={styles.studentText}>Nombres: {student.nombres}</Text>
          <Text style={styles.studentText}>Apellidos: {student.apellidos}</Text>
          <Text style={styles.studentText}>Calificación 1: {student.calificacion1}</Text>
          <Text style={styles.studentText}>Calificación 2: {student.calificacion2}</Text>
          <Text style={styles.studentText}>Calificación 3: {student.calificacion3}</Text>
          <Text style={styles.studentText}>Promedio: {student.promedio}</Text>
          <Text style={styles.studentText}>Estado: {student.aprobado ? 'Aprobado' : 'Reprobado'}</Text>
        </Card>
      ))}

      {/* Botón para eliminar todos los estudiantes */}
      {students.length > 0 && (
        <View style={styles.buttonContainer}>
          <Button title="Limpiar Estudiantes" onPress={handleClearStudents} color="#FF5733" />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  card: {
    marginBottom: 20,
  },
  studentText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Calificaciones;
