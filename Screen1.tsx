import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { VideoCard } from './components';

const Screen1 = () => {
  return (
    <ScrollView>
      {/* ScrollView horizontal 1 */}
      <ScrollView horizontal>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={styles.container}>
            <VideoCard />            
          </View>
        </View>
      </ScrollView>

      {/* ScrollView horizontal 2 */}
      <ScrollView horizontal>
        <View style={{ flex: 1, flexDirection: 'row' }}>
         <VideoCard />
        </View>
      </ScrollView>

      {/* ScrollView horizontal 3 */}
      <ScrollView horizontal>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {/* Conteúdo do ScrollView horizontal 3 */}
        </View>
      </ScrollView>

      {/* ScrollView horizontal 4 */}
      <ScrollView horizontal>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {/* Conteúdo do ScrollView horizontal 4 */}
        </View>
      </ScrollView>

      {/* ScrollView horizontal 5 */}
      <ScrollView horizontal>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          {/* Conteúdo do ScrollView horizontal 5 */}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default Screen1;
