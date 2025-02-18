import { View } from "react-native"
import Profile from "../components/Profile"

const ProfileScreen = () => {

    return (
        <View style={styles.container}>
            <Profile />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default ProfileScreen;