import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import AppNavigation from './src/app/AppNavigation';
import { AppProvider } from './src/app/main/AppContext';
// import kiemTra JsNangCao
import JsNangcao_kt_01 from './src/voaqui/data_JsNangCao/JsNangcao_kt_01';
import The_Function from './src/voaqui/data_JsNangCao/The_Function';
import The_Object_Arr from './src/voaqui/data_JsNangCao/The_Object_Arr';
import Kt01_JsNangCao from './src/voaqui/data_JsNangCao/Kt01_JsNangCao';
import Giai_De2 from './src/voaqui/data_JsNangCao/De_JsNangCao/Giai_De2';
import Thi from './src/voaqui/data_JsNangCao/Thi/Thi';
import C3 from './src/voaqui/data_JsNangCao/Thi/C3';
import C4 from './src/voaqui/data_JsNangCao/Thi/C4';
import C5 from './src/voaqui/data_JsNangCao/Thi/C5';
import C6 from './src/voaqui/data_JsNangCao/Thi/C6';
import C7 from './src/voaqui/data_JsNangCao/Thi/C7';
import C8 from './src/voaqui/data_JsNangCao/Thi/C8';
// react 2
import Login from './src/app/authen/Login';
import Register from './src/app/authen/Register';
import Home from './src/app/main/tabs/Home';
// layDiemCong
import Bai1 from './src/voaqui/layDiemCong/Bai1';
import Bai2 from './src/voaqui/layDiemCong/Bai2';
import HeaderCustuom from './src/voaqui/layDiemCong/HeaderCustuom';
// import Animation from './src/voaqui/layDiemCong/Animation/Animation';
import Animation_6 from './src/voaqui/layDiemCong/Animation/Animation_6';
// lab react2
import Lab_4 from './src/voaqui/layDiemCong/lab_react2/Lab_4';
import Animation from './src/voaqui/layDiemCong/lab_react2/lab3/Animation03';
import Lab4_2 from './src/voaqui/layDiemCong/lab_react2/lab4/Lab4_2';
function App(): React.JSX.Element {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar/>
        {/* <AppNavigation /> */}
        {/* <Login/> */}
        {/* <Bai1/> */}
        {/* <Bai2/> */}
        {/* <HeaderCustuom/> */}
       {/* <Register/> */}
       {/* <Home/> */}
       {/* <Animation_6/> */}
       {/* <Animation/> */}
       {/* <Lab_4/> */}
       {/* <Lab4_2/> */}
      </SafeAreaView>
    </AppProvider>

    // <AppProvider>
    //   <SafeAreaView style={styles.container}>
    //     <StatusBar />
    //     {/* <AppNavigation /> */}
    //     {/* <HomePage/> */}
    //     {/* <Register/> */}
    //     <AuthenStackNavigation />
    //     {/* <Detail/> */}
    //   </SafeAreaView>
    // </AppProvider>

    // assignmaent reactNative 2
    // <AppProvider>
    //   <SafeAreaView style={styles.container}>
    //     <StatusBar />
    //     {/* <AppNavigation /> */}
    //     {/* <HomePage/> */}
    //     {/* <Register/> */}
    //     {/* <AuthenStackNavigation /> */}
    //     {/* <Detail/> */}
    //   </SafeAreaView>
    // </AppProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
