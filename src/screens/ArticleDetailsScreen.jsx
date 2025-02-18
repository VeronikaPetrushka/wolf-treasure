import { View } from "react-native"
import ArticleDetails from "../components/ArticleDetails"

const ArticleDetailsScreen = () => {

    return (
        <View style={styles.container}>
            <ArticleDetails />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default ArticleDetailsScreen;