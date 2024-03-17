import { StatusBar } from 'expo-status-bar';
import { Image, Platform, StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { COLORS } from '@/constants/stylesheet';
import { links } from '@/constants/data';
import { Link, useRouter } from 'expo-router';
import { GlobalContext } from '@/context/context.service';
import { useContext } from 'react';

export default function ModalScreen() {

  const router: any = useRouter()
  const { handleLogout } = useContext(GlobalContext)

  return (
    <View style={styles.container}>
      <>
        {
          links && links.map(link => (
            <TouchableOpacity
              onPress={() => {
                router.push(link.to)
              }}
              style={{
                width: "80%",
                margin: "auto",
                marginVertical: 20,
                paddingVertical: 12,
                justifyContent: "flex-start",
                alignItems: "center",
                borderBottomWidth: 1,
                borderColor: COLORS.black20,
                flexDirection: "row",
                gap: 10
              }} key={link.id}>
              <Image
                source={link.icon}
                style={{
                  width: 20,
                  height: 20
                }}
              />
              <Text style={{
                color: COLORS.black70,
                fontFamily: "popMid"
              }} >{link.title}</Text>
            </TouchableOpacity>
          ))
        }
      </>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          width: "80%",
          margin: "auto",
          marginVertical: 20,
          paddingVertical: 12,
          justifyContent: "flex-start",
          alignItems: "center",
          borderBottomWidth: 1,
          borderColor: COLORS.black20,
          flexDirection: "row",
          gap: 10
        }}>
        <Image
          source={require('../assets/images/logout.png')}
          style={{
            width: 20,
            height: 20
          }}
        />
        <Text style={{
          color: COLORS.red,
          fontFamily: "popMid"
        }} >Logout</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
