import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AllTabs from "./src/components/AllTabs";
import useApplicationData from "./src/hooks/useApplicationData";

export default function App() {
  return <AllTabs />;
}
