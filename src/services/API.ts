import AsyncStorage from '@react-native-async-storage/async-storage';

export default class API {
  baseAPI = `https://iws-brazil-labs-iws-recruiting-bands-mobile.iwsbrazil.io/api`

  async doGet(endpoint) {
    const fullPath = `${this.baseAPI}${endpoint}`
    const response = { data: [], error: '' }
    try {
      response.data = await fetch(fullPath).then(res => res.json())
    } catch (error) {
      response.error = error
    }
    return response
  }

  async localStorageGet(key) {
    const response = { data: [], error: ''}
    try {
      const stringData = await AsyncStorage.getItem(key);
      response.data = JSON.parse(stringData)
    } catch (error) {
      response.error = error.message ? error.message : error
    }
    return response
  };

  async localStorageSet(key, data) {
    const response = { error: ''}
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      response.error = error.message ? error.message : error
    }
    return response
  }
}