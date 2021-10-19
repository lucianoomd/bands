import API from './API'
import Band from '../beans/Band'
import { createAsyncThunk } from '@reduxjs/toolkit'

export default class BandService extends API {
  async getBands() {
    const response = { data : [], error: '' }
    const json = require('../../bands.json')
    response.data = json.bands

    return response
  }

  async getBand(id) {
    const endpoint = `/bands/${id}`
    const response = await this.doGet(endpoint)

    return response
  }
  
  /* ======================= Local data ========================= */
  async saveBandsLocally(bands: Band[]) {
    const result = this.localStorageSet('@Bands', bands)
    return await result
  }

  async getBandsLocally() {
    return await this.localStorageGet('@Bands')
  }
}

export const getBand = createAsyncThunk(
  'get/band',
  async (id) => {
    const endpoint = `/bands/${id}`
    const response = await new API().doGet(endpoint)

    return response
  } 
)