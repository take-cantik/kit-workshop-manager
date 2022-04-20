import { Workshop, WorkshopStatus } from '../Entities/Workshop'

export interface WorkshopRepositoryInterface {
  setWorkshop: (workshop: Workshop) => Promise<void>
  changeStatus: (groupId: string, status: WorkshopStatus) => Promise<void>
  getWorkshopList: (status?: WorkshopStatus) => Promise<Workshop[]>
  getActiveWorkshop: () => Promise<Workshop | null>
  deleteWorkshop: (groupId: string) => Promise<void>
}
