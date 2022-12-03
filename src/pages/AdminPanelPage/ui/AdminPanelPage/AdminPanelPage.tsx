// TODO: Delete disable
/* eslint-disable i18next/no-literal-string */
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames, Mods } from 'shared/lib/helpers'
import { Page } from 'widgets/Page'

import cls from './AdminPanelPage.module.scss'

export interface AdminPanelPageProps {}

export const AdminPanelPage = (props: AdminPanelPageProps) => {
  const { t } = useTranslation('adminPanelPage')

  const mods: Mods = {}
  return <Page className={classNames(cls.adminPanelPage, mods)}>AdminPanelPage</Page>
}

export default memo(AdminPanelPage)
