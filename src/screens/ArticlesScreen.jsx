import { View } from "react-native"
import Article from "../components/Article"

const ArticleScreen = () => {

    return (
        <View style={styles.container}>
            <Article />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default ArticleScreen;