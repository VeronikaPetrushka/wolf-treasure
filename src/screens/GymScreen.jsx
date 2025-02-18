import { View } from "react-native"
import Gym from "../components/Gym"

const GymScreen = () => {

    return (
        <View style={styles.container}>
            <Gym />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default GymScreen;