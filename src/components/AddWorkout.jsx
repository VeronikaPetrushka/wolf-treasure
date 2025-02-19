//logic save & exercises
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput, ScrollView, SectionList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import Icons from "./Icons";

const { height } = Dimensions.get("window");

const titles = [
    'Your settings',
    'Height and weight',
    'Lifestyle',
    'Training',
    'Level',
    'Your goal',
    'Select a program'
];

const AddWorkout = () => {
    const navigation = useNavigation();
    const [when, setWhen] = useState('Schedule');
    const [name, setName] = useState(null);
    const [calories, setCalories] = useState(null);
    const [duration, setDuration] = useState(null);
    const [exercise, setExercise] = useState(null);
    const [repetitions, setRepetitions] = useState(null);
    const [sets, setSets] = useState(null);
    const [exDuration, setExDuration] = useState(null);
    const [rest, setRest] = useState(null);

    const handleSave = async () => {
    };
    
    return (
        <View style={styles.container}>

            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', marginBottom: 27}} onPress={() => navigation.goBack('')}>
                <View style={{width: 13, height: 20, marginRight: 10}}>
                    <Icons type={'back'} />
                </View>
                <Text style={styles.backBtnText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.title}>Add workout</Text>

            <View style={styles.toggleContainer}>
                <TouchableOpacity style={[styles.toggleBtn, when === 'Schedule' && {backgroundColor: '#731de5'}]} onPress={() => setWhen('Schedule')}>
                    <Text style={styles.toggleBtnText}>Schedule</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.toggleBtn, when === 'Past' && {backgroundColor: '#731de5'}]} onPress={() => setWhen('Past')}>
                    <Text style={styles.toggleBtnText}>Past</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{width: '100%'}}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="What will you call it?"
                    placeholderTextColor="#999"
                    value={name}
                    onChangeText={setName}
                />

                <Text style={styles.label}>Calories</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter a number"
                    placeholderTextColor="#999"
                    value={calories}
                    onChangeText={setCalories}
                />

                <Text style={styles.label}>Workout duration</Text>
                <TextInput
                    style={styles.input}
                    placeholder="In minutes"
                    placeholderTextColor="#999"
                    value={duration}
                    onChangeText={setDuration}
                />

                <Text style={styles.label}>Exercises</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Exercise name"
                    placeholderTextColor="#999"
                    value={exercise}
                    onChangeText={setExercise}
                />

                <View style={{width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 12}}>
                    <TextInput
                        style={[styles.input, {width: '48.5%', textAlign: 'center'}]}
                        placeholder="Repetitions"
                        placeholderTextColor="#999"
                        value={repetitions}
                        onChangeText={setRepetitions}
                    />
                    <TextInput
                        style={[styles.input, {width: '48.5%', textAlign: 'center'}]}
                        placeholder="Sets"
                        placeholderTextColor="#999"
                        value={sets}
                        onChangeText={setSets}
                    />
                    <TouchableOpacity style={styles.exBtn}>
                        <Text style={styles.exBtnText}>Duration</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.exBtn}>
                        <Text style={styles.exBtnText}>Rest</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.backBtnText}>+ Add exercise</Text>

                <View style={{height: 100}} />
            </ScrollView>

            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#120b05",
        padding: 16,
        paddingTop: height * 0.07
    },

    backBtnText: {
        color: '#731de5',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
        marginRight: 16
    },

    title: {
        fontSize: 34,
        fontWeight: '700',
        color: '#fff',
        lineHeight: 41,
        marginBottom: 24,
        alignSelf: 'flex-start'
    },

    toggleContainer: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'rgba(120, 120, 120, 0.3)',
        height: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 24,
        padding: 2
    },

    toggleBtn: {
        width: '50%',
        height: '100%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    toggleBtnText: {
        fontSize: 13,
        fontWeight: '600',
        color: '#fff',
        lineHeight: 18,
    },

    label: {
        fontSize: 17,
        fontWeight: '400',
        color: '#fff',
        lineHeight: 20,
        marginBottom: 12
    },

    exBtn: {
        width: '48.5%',
        padding: 18,
        borderRadius: 14,
        backgroundColor: '#261305',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },

    exBtnText: {
        fontSize: 17,
        fontWeight: '400',
        color: '#999',
        lineHeight: 24
    },

    input: {
        width: '100%',
        backgroundColor: '#261305',
        borderRadius: 14,
        paddingVertical: 18,
        paddingHorizontal: 12,
        color: '#fff',
        fontSize: 17,
        fontWeight: '400',
        marginBottom: 15
    },

    saveBtn: {
        width: '100%',
        padding: 18,
        borderRadius: 20,
        backgroundColor: '#fa8009',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 30
    },

    saveBtnText: {
        fontSize: 17,
        fontWeight: '700',
        color: '#fff',
        lineHeight: 20.3
    },
    
});

export default AddWorkout;
