export interface PostbackRepositoryInterface {
  addPostback: (uuid: string) => Promise<void>
  existPostback: (uuid: string) => Promise<boolean>
}
