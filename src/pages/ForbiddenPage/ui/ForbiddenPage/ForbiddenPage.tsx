// TODO: Delete disable
/* eslint-disable i18next/no-literal-string */
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './ForbiddenPage.module.scss'

import { Page } from '@/widgets/Page'
import { classNames, Mods } from '@/shared/lib/helpers'


export interface ForbiddenPageProps {}

export const ForbiddenPage = (props: ForbiddenPageProps) => {
  const { t } = useTranslation('forbiddenPage')

  const mods: Mods = {}
  return <Page className={classNames(cls.forbiddenPage, mods)}>ForbiddenPage</Page>
}

export default memo(ForbiddenPage)
