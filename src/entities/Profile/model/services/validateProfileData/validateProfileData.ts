import { Profile, ProfileFormFieldErrorCodes } from '../../types/profileSchema'

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ProfileFormFieldErrorCodes.NO_USER_DATA]
  }
  
  const {
    firstName,
    lastName,
    age,
  } = profile

  const errors: ProfileFormFieldErrorCodes[] = []

  if (!firstName || !lastName) {
    errors.push(ProfileFormFieldErrorCodes.INCORRECT_USER_DATA)
  }

  if (!age) {
    errors.push(ProfileFormFieldErrorCodes.INCORRECT_USER_AGE)
  }

  return errors
}

export const validateProfileDataTest = (profile?: Profile) => {
  if (!profile) {
    return [ProfileFormFieldErrorCodes.NO_USER_DATA]
  }
  
  const {
    firstName,
    lastName,
    age,
  } = profile

  const errors: ProfileFormFieldErrorCodes[] = []

  if (!firstName || !lastName) {
    errors.push(ProfileFormFieldErrorCodes.INCORRECT_USER_DATA)
  }

  if (!age) {
    errors.push(ProfileFormFieldErrorCodes.INCORRECT_USER_AGE)
  }

  return errors
}
