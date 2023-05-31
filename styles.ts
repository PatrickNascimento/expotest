import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 16,
        paddingVertical: 8,    
      },
      postContainer: {
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.84,
        elevation: 5,
        marginBottom: 26,
      },
      postHeader: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
      },
      profileImage: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 8,
      },
      nameText: {
        fontWeight: "bold",
        fontSize: 16,
      },
      dateText: {
        fontSize: 12,
        color: "#999",
      },
      postImage: {
        width: "100%",
        aspectRatio: 1,
        resizeMode: "cover",
      },
      postContent: {
        padding: 8,
      },
      descriptionText: {
        fontSize: 14,
        marginBottom: 8,
        fontFamily: "Roboto_400Regular",
    
      },
      fileURLText: {
        color: "#0645AD",
        fontSize: 14,
      },
      footerContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingVertical: 16,   
        paddingRight: 15,     
      },
      closeButton: {
        position: "absolute",
        top: 16,
        left: 16,
        padding: 8,
        borderRadius: 5,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      },
      closeIcon: {
        color: "#fff",
        fontSize: 24,
      },    
});
