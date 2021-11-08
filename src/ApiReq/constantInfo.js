import axios from 'axios'
import {BASIC_URL} from '../constants'

export function getCategories(feat){
    return axios.get(`${BASIC_URL}/categories${feat?'?feat=true':''}`)
    .then(r=>r.data)
    .catch(e => e)
}

export function getTips(){
    return axios.get(`${BASIC_URL}/tips`)
    .then(r=>r.data)
    .catch(e => e)
}

export function getReviews(userId){
    return axios.get(`${BASIC_URL}/reviews${userId ? '?userId='+userId : ''}`)
    .then(r=>r.data)
    .catch(e => e)
}

export function getCountries(){
    return axios.get(`${BASIC_URL}/countries`)
    .then(r=>r.data)
    .catch(e => e)
}