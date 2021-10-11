import React, { Component } from 'react';
import { Linking } from 'react-native';
//  const makeCall = (number) => {
//     const args = {
//         number: number, // String value with the number to call
//         prompt: true // Optional boolean property. Determines if the user should be prompt prior to the call 
//     }
//    call(args).catch(console.error)
// }


const dialCall = (phone) => {
    let phoneNumber = `tel:${phone}`;
    Linking.openURL(phoneNumber);
  };

export default dialCall;