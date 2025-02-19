import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, ScrollView, Image, Dimensions, StyleSheet } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from "@react-navigation/native";
import Icons from "./Icons";

const { height } = Dimensions.get("window");

const Gym = () => {
    const navigation = useNavigation();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const storedData = await AsyncStorage.getItem("userData");
                if (storedData) {
                    setUserData(JSON.parse(storedData));
                }
            } catch (error) {
                console.error("Error retrieving user data:", error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <View style={styles.container}>

            <ScrollView style={{width: '100%'}}>
                {
                    userData?.selectedProgram ? (
                        <View style={{width: '100%'}}>
                            <Text style={styles.label}>Workouts</Text>
                            {
                                userData?.selectedProgram.workouts.map((workout, index) => (
                                    <TouchableOpacity 
                                        style={styles.workoutCard}
                                        onPress={() => navigation.navigate('WorkoutsScreen', {workout: workout})}
                                        key={index}
                                        >
                                        <View style={{width: 52, height: 52, marginRight: 16}}>
                                            <Icons type={'power'} />
                                        </View>
                                        <View style={{height: '100%', justifyContent: 'space-between'}}>
                                            <Text style={styles.workoutTitle}>{workout.title}</Text>
                                            <Text style={styles.workoutDesc}>{workout.duration} min / {workout.exercises.length} workouts</Text>
                                        </View>
                                    </TouchableOpacity>    
                                ))
                            }
                        </View>
                    ) : (
                        <View style={{width: '100%', marginVertical: 'auto'}}>
                            <Text style={styles.label}>There are no trainings on this day, you can add one</Text>
                            <Image source={require('../assets/decor/wolf-form2.png')} style={{width: 390, height: 300, resizeMode: 'contain', position: 'absolute', bottom: 20, right: -20}} />
                        </View>
                    )
                }
               <View style={{height: 150}} />
            </ScrollView>

            <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('AddWorkoutScreen')}>
                <Text style={styles.addBtnText}>Add workout</Text>
            </TouchableOpacity>

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

    label: {
        fontSize: 17,
        fontWeight: '500',
        lineHeight: 20.3,
        color: '#fff',
        marginBottom: 16
    },

    workoutCard: {
        width: '100%',
        height: 84,
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
        lineHeight: 16.7
    },

    addBtn: {
        width: '100%',
        padding: 18,
        borderRadius: 20,
        backgroundColor: '#fa8009',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 110
    },

    addBtnText: {
        fontSize: 17,
        fontWeight: '700',
        color: '#fff',
        lineHeight: 20.3
    },


});

export default Gym;