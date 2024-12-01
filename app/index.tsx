import { View, Text, ScrollView, Image, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Redirect, router } from 'expo-router'

import { images } from '../constants'
import CustomButtom from '@/components/CustomButtom'

const App = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className='w-full justify-center items-center min-h-[85px] px-4'>
          <Image 
            source={images.logo} 
            className='w-[130px] h-[84px]'
            resizeMode='contain'
          />
          <Image 
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />

          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center m-8'>Descubra novas histórias com {' '} <Text className='text-secondary-200'>Aora</Text></Text>

            <Image 
              source={images.path}
              className='w-[136px] h-[15px] absolute bottom-[1.3rem] -right-1'
              resizeMode='contain'
            />
          </View>

          <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>Onde criatividade conhece inovação: Embarque em uma jornada sem limites com Aora</Text>
          <CustomButtom 
            title="Entre com seu e-mail"
            handlePress={() => {router.push('/sign-in')}}
            containerStyles={{
              width: '100%',
              marginTop: 8,  // Alterar o marginTop
            }}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' barStyle='light-content'/>
    </SafeAreaView>
  )
}

export default App