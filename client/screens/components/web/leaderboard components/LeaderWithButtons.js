import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useFonts } from 'expo-font';
import LeaderSelectButton from './LeaderSelectButton';
import { getLeaderboardByGameMode } from '../../../../services/apiService'; // Import the function from apiService.js

export default function LeaderWithButtons() {
  const [leaderboardData, setLeaderboardData] = useState({
    multipleChoice: [],
    trueFalse: [],
    fillBlank: [],
  });
  const [selectedCategory, setSelectedCategory] = useState('multipleChoice');

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        const multipleChoiceData = await getLeaderboardByGameMode('multiplechoice');
        const trueFalseData = await getLeaderboardByGameMode('truefalse');
        const fillBlankData = await getLeaderboardByGameMode('fillblank');

        setLeaderboardData({
          multipleChoice: multipleChoiceData,
          trueFalse: trueFalseData,
          fillBlank: fillBlankData,
        });
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
      }
    };

    fetchLeaderboardData();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  let [fontsLoaded] = useFonts({
    'Orbitron-Bold': require('../../../assets/fonts/Orbitron-Bold.ttf'),
    'Monofett-Regular': require('../../../assets/fonts/Monofett-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.leaderboard}>
      <View style={{ flexDirection: 'row' }}>
        <LeaderSelectButton title='Multiple choice' onPress={() => handleCategorySelect('multipleChoice')} />
        <LeaderSelectButton title='Fill in the blank' onPress={() => handleCategorySelect('fillBlank')} />
        <LeaderSelectButton title='True/False' onPress={() => handleCategorySelect('trueFalse')} />
      </View>

      <View style={styles.leaderboardDesktop}>
        <View>
          <Text style={styles.leaderboardText}>Username</Text>
          {leaderboardData[selectedCategory].map((player, index) => (
            <Text key={index} style={styles.leaderboardUser}>{index + 1}. {player.username}</Text>
          ))}
        </View>
        <View>
          <Text style={styles.leaderboardText}>Points</Text>
          {leaderboardData[selectedCategory].map((player, index) => (
            <Text key={index} style={styles.leaderboardUser}>{player.score} pts</Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  leaderboard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 0,
  },
  leaderboardDesktop: {
    backgroundColor: '#6EBFBB',
    width: 1000,
    height: 600,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginBottom: 30,
  },
  leaderboardText: {
    fontSize: 25,
    marginHorizontal: 20,
    marginTop: 10,
    fontFamily: 'Orbitron-Bold',
  },
  leaderboardUser: {
    fontSize: 30,
    marginHorizontal: 20,
  },
});
