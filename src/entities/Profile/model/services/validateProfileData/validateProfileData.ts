import { ProfileFormFieldErrorCode } from '../../consts/consts'
import { Profile } from '../../types/profileSchema'

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ProfileFormFieldErrorCode.NO_USER_DATA]
  }

  const { firstName, lastName, age } = profile

  const errors: ProfileFormFieldErrorCode[] = []

  if (!firstName || !lastName) {
    errors.push(ProfileFormFieldErrorCode.INCORRECT_USER_DATA)
  }

  if (!age) {
    errors.push(ProfileFormFieldErrorCode.INCORRECT_USER_AGE)
  }

  return errors
}

export const validateProfileDataTest = (profile?: Profile) => {
  if (!profile) {
    return [ProfileFormFieldErrorCode.NO_USER_DATA]
  }

  const { firstName, lastName, age } = profile

  const errors: ProfileFormFieldErrorCode[] = []

  if (!firstName || !lastName) {
    errors.push(ProfileFormFieldErrorCode.INCORRECT_USER_DATA)
  }

  if (!age) {
    errors.push(ProfileFormFieldErrorCode.INCORRECT_USER_AGE)
  }

  return errors
}
