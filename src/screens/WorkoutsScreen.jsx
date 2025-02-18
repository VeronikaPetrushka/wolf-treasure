import { View } from "react-native"
import Workouts from "../components/Workouts"

const WorkoutsScreen = () => {

    return (
        <View style={styles.container}>
            <Workouts />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default WorkoutsScreen;