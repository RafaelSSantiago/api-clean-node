import { Collection, InsertOneResult, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: MongoClient,
  async connect (uri: string): Promise<void> {
    /* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */
    /* eslint-disable @typescript-eslint/no-unsafe-argument */
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as any) // Usando any para evitar erros de tipo relacionados a versão
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map: (collection: any, insertedId: InsertOneResult<Document>): any => {
    const accountTransform = { ...collection, id: insertedId.insertedId.toString() }
    return accountTransform
  }
}
