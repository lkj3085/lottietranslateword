import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default (props) => {
  const { onPress, isSelected, text } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        isSelected ? styles.selectedButton : styles.notSelectedButton,
      ]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff80",
    borderWidth: 2,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 5,
  },
  selectedButton: {
    borderColor: "white",
  },
  notSelectedButton: {
    borderColor: "transparent",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
