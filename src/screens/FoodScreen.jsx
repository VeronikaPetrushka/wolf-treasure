import { View } from "react-native"
import Food from "../components/Food"

const FoodScreen = () => {

    return (
        <View style={styles.container}>
            <Food />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default FoodScreen;