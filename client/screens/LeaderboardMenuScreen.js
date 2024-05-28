import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import axios from 'axios';

// Components

// Web components
import HeaderLargeScreen from './components/web/HeaderLargeScreen';
import LeaderWithButtons from './components/web/leaderboard components/LeaderWithButtons';
import PlayNavButton from './components/web/PlayNavButton';
import LeaderNavButton from './components/web/LeaderNavButton';

// Mobile components
import LeaderboardMobile from './components/mobile/leaderboard components mobile/LeaderboardMobile';
import PlayNavButtonMobile from './components/mobile/PlayNavButtonMobile';
import LeaderNavButctonMobile from './components/mobile/LeaderNavButtonMobile';

export default function LeaderBoardMenuScreen() {
  const screenWidth = Dimensions.get('window').width;
  const [leaderboardData, setLeaderboardData] = useState({
    multipleChoice: [],
    trueFalse: [],
    fillBlank: [],
  });

  let [fontsLoaded] = useFonts({
    'Monofett-Regular': require('./assets/fonts/Monofett-Regular.ttf'),
    'Orbitron-Bold': require('./assets/fonts/Orbitron-Bold.ttf'),
  });

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const response = await axios.get('http://your-backend-api-url/leaderboard/top10');
        setLeaderboardData(response.data);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboardData();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/background1.png')} style={styles.background}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {screenWidth > 800 && (
            <>
              <HeaderLargeScreen title="Leaderboard" />
              <View style={styles.container2}>
                <View style={styles.buttonsContainer}>
                  <PlayNavButton opacity={0.7} />
                  <LeaderNavButton opacity={1} />
                </View>
                <LeaderWithButtons leaderboardData={leaderboardData} />
              </View>
            </>
          )}
          {screenWidth <= 800 && (
            <View style={styles.container2}>
              <Image source={require('./assets/images/brainBanner.gif')} style={styles.logoBanner} />
              <Text style={styles.title1}>BRAINWAVE</Text>
              <View style={styles.buttonsContainer}>
                <PlayNavButtonMobile opacity={0.7} />
                <LeaderNavButtonMobile opacity={1} />
              </View>
              <LeaderboardMobile leaderboardData={leaderboardData} />
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 0,
  },
  background: {
    height: '100%',
    width: '100%',
  },
  logoBanner: {
    width: 325,
    height: 140,
    resizeMode: 'contain',
    marginTop: 56,
    marginBottom: 32,
  },
  title1: {
    fontSize: 55,
    fontFamily: 'Monofett-Regular',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
});
