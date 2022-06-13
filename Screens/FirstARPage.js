import { StyleSheet } from 'react-native'
import React from 'react'
import {
  ViroARScene,
  ViroARPlaneSelector,
  Viro3DObject,
  ViroMaterials
} from '@viro-community/react-viro';

const FirstARPage = props => {

  function onInitialized(state, reason) {

    console.log('guncelleme', state, reason);

    ViroMaterials.createMaterials({
      black: {
        diffuseTexture: require('./assets/carTexture.jpg')
      },
      red: {
        diffuseTexture: require('./assets/redColor.jpg')
      },
      yellow: {
        diffuseTexture: require('./assets/download.jpg')
      },
      design: {
        diffuseTexture: require('./assets/Design.jpg')
      }
    })
  }

  return (
    <>
      <ViroARScene onTrackingUpdated={onInitialized}>
        <ViroARPlaneSelector>
          <Viro3DObject
            source={require("./assets/cat.obj")}
            // resources={[
            //   require('./assets/T-Rex/T-Rex Model.mtl'),
            // ]}
            highAccuracyEvents={true}
            position={[0, 0, -100]}
            scale={[1, 1, 1]}
            rotation={[0, 0, 0]}
            type="OBJ"
            transformBehaviors={["billboard"]}
            dragType="FixedDistance" onDrag={() => { }}
            style={{ color: 'black' }}
            materials={["yellow"]}
          />
        </ViroARPlaneSelector>
      </ViroARScene>
    </>
  );
};

export default FirstARPage

const styles = StyleSheet.create({
  FirstARPageStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  }
});