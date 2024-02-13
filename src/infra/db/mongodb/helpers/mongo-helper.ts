import { MongoClient } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,
  async connect (uri: string): Promise<void> {
    /* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
    /* eslint-disable @typescript-eslint/no-unsafe-argument */
    this.client = await MongoClient.connect(process.env.MONGO_URL as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as any) // Usando any para evitar erros de tipo relacionados a versão
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  }
}
