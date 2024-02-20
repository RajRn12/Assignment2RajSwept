/**
 * File   -  page3.js
 * Credit - Stepehen Graham
 * Author - Raj Rai
 */
import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Image, Text, View, Pressable, Button, Alert, TextInput } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import styles from '../styles/page-styles';
export default function Page3() {

    const params = useLocalSearchParams();
    const { p_Name, score, count } = params;

    return (
        <View style={styles.container}>
            <Text>Player Name: {p_Name}</Text>
            <Text>Score: {score}</Text>
            <Text>Time: {count}s</Text>
        </View>
    );

}

