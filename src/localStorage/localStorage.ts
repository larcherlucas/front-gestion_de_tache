import { MemberStateI } from '../@types/memberStateI';
import { removeTokenJwtToAxiosInstance } from '../axios/axios';

export function addTokenAndPseudoToLocalStorage(token: string) {
  localStorage.setItem('jwt', token);
}

export function addProfileToLocalStorage(profile: MemberStateI) {
  const profileString = JSON.stringify(profile);
  localStorage.setItem('profile', profileString);
}

export function getTokenAndPseudoFromLocalStorage() {
  const jwt = localStorage.getItem('jwt');
  return { jwt };
}

export function getProfileFromLocalStorage() {
  const profile = localStorage.getItem('profile');
  if (profile !== null) {
    const profileObject = JSON.parse(profile);
    return profileObject;
  }
  return null;
}

export function disconnectLocalStorage() {
  localStorage.removeItem('jwt');
  localStorage.removeItem('profile');
  removeTokenJwtToAxiosInstance();
}

export function disconnectProfileLocalStorage() {
  localStorage.removeItem('profile');
}

export function setFirstLogin() {
  localStorage.setItem('isFirstLogin', 'true');
}

export function checkAndRemoveFirstLogin() {
  const isFirstLogin = localStorage.getItem('isFirstLogin');
  if (isFirstLogin) {
    localStorage.removeItem('isFirstLogin');
    return true;
  }
  return false;
}
