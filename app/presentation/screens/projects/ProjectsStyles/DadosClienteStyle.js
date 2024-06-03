import { StyleSheet } from "react-native";
import CORES from "../../../../constants/cores";

const StylesClient = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.branco,
  },
  input: {
    borderRadius: 10,
    backgroundColor: CORES.principal,
    color: CORES.branco,
    height: 40,
    marginTop: 5,
    marginBottom: 12,
    margin: "auto",
    paddingLeft: 10,
    fontSize: 16,
    width: "90%",
  },
  text: {
    fontWeight: "bold",
    color: CORES.cinza,
    marginTop: 5,
    marginLeft: "2%",
  },
});

export default StylesClient;
