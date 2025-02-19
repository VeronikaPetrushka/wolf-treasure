// workouts logic
import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, ScrollView, Image, Dimensions, StyleSheet } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import Icons from "./Icons";

const { height } = Dimensions.get("window");

const Workouts = ({ workout }) => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState(null);

    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB");
    const date = formattedDate.replace(/\//g, ".");

    return (
        <View style={styles.container}>

            <View style={{width: '100%', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row', marginBottom: 27}}>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.goBack('')}>
                    <View style={{width: 13, height: 20, marginRight: 10}}>
                        <Icons type={'back'} />
                    </View>
                    <Text style={styles.backBtnText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.title}>{workout.title}</Text>
            </View>

            <View style={{width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginBottom: 16}}>
                <Text style={styles.workoutDesc}>{date}</Text>
                <Text style={styles.workoutDesc}>{workout.duration} min</Text>
            </View>

            <ScrollView style={{width: '100%'}}>
                {
                    workout.exercises.map((item, index) => (
                        <TouchableOpacity 
                            style={styles.workoutCard}
                            key={index}
                            >
                            <View style={{width: 52, height: 52, marginRight: 16}}>
                                <Icons type={'power'} />
                            </View>
                            <View style={{width: '78%'}}>
                                <Text style={styles.workoutTitle}>{item.name}</Text>
                                <Text style={styles.workoutDesc}>{item.description}</Text>
                            </View>
                        </TouchableOpacity>    
                    ))
                }               
                <View style={{height: 100}} />
            </ScrollView>

        </View>
    )
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: "center",
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
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 22,
        color: '#fff',
        alignSelf: 'center'
    },

    label: {
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 20.3,
        color: '#fff',
        marginBottom: 16
    },

    workoutCard: {
        width: '100%',
        padding: 16,
        borderRadius: 24,
        backgroundColor: '#261305',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginBottom: 16
    },

    workoutTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
        lineHeight: 19.1,
        marginBottom: 12
    },

    workoutDesc: {
        fontSize: 14,
        fontWeight: '400',
        color: '#999',
        lineHeight: 16.7,
    }

});

export default Workouts;