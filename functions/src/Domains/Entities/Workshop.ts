export type WorkshopStatus = 'active' | 'pending' | 'disable'

export interface Workshop {
  groupId: string
  groupName: string
  status: WorkshopStatus
}
