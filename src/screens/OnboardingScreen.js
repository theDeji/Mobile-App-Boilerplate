import { Image, StyleSheet, View, ImageBackground } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

import colors from '../config/colors'
import Dots from '../components/utils/Dots'

function OnboardingScreen({props, navigation}) {
  return (
    <View style={styles.view}>
      <ImageBackground
          source={require('../assets/bg.png')} 
          style={styles.bgImage}
      >
        <Onboarding
        onDone={() => navigation.navigate('Welcome')}
        onSkip={() => navigation.navigate('Welcome')}
        showPagination={true}
        bottomBarHighlight={false}
        DotComponent={Dots}
        backgroundColor="transparent"
        titleStyles={{ color: colors.white, position:'relative', top: 80}} 
        subTitleStyles={{ color: colors.white, position:'relative', top: 80}}
        pages={[
          {
            backgroundColor: 'transparent',
            image: <Image style={styles.image} source={require('../assets/welcme.png')} />,
            title: 'Welcome',
            subtitle: 'Trade stuff with others',
          },
          {
            backgroundColor: 'transparent',
            image: <Image style={styles.image}  source={require('../assets/buy.png')} />,
            title: 'But Stuff',
            subtitle: 'This is the subtitle that sumplements the title.',
          },
          {
            backgroundColor: 'transparent',
            image: <Image style={styles.image} source={require('../assets/sell.png')} />,
            title: 'Sell Stuff',
            subtitle: "Beautiful, isn't it?",
          },
        ]} 
        >
        </Onboarding>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    backgroundColor: 'transparent',
    resizeMode:'center',
    width: "70%",
    height: 250,
    position: 'absolute',
    bottom: 10
  },
  screen:{
    flex: 1,
  },
  view:{
      flex: 1,
  },
  bgImage: {
    flex:1,
    resizeMode: "cover",
    justifyContent: "center"
  },
})

export default OnboardingScreen;

