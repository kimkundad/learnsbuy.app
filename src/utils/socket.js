import { Platform } from "react-native";
import { io } from "socket.io-client";
export const BaseUrl =
  Platform.OS === "android" ? "http://10.0.2.2:3002/" : "http://localhost:3002";
  console.log('connect')
export const socket = io.connect("http://10.0.2.2:3002/");