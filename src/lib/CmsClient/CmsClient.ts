import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type {
  ContentTypeNameType,
  CmsClientListRes,
  CmsClientGetRes,
  EntryCollection,
  Entry,
} from './CmsClient.interface';

export class CmsClient {
  private deliveryClient: AxiosInstance;

  private deliveryToken: string;

  private managementClient: AxiosInstance;

  private managementToken: string;

  constructor() {
    const spaceId = process.env.SPACE_ID ?? '';
    const enviroment = process.env.ENVIRONMENT ?? '';
    const deliveryToken = process.env.DELIVERY_TOKEN ?? '';
    const managementToken = process.env.MANAGEMENT_TOKEN ?? '';

    if (!(spaceId ?? enviroment ?? deliveryToken ?? managementToken)) {
      throw new Error(
        `enviroment variable "SPACE_ID", "ENVIRONMENT", "DELIVERY_TOKEN", "MANAGEMENT_TOKEN" is invlid`,
      );
    }

    this.deliveryClient = axios.create({
      baseURL: `https://cdn.contentful.com/spaces/${spaceId}/environments/${enviroment}`,
    });
    this.deliveryToken = deliveryToken;

    this.managementClient = axios.create({
      baseURL: `https://api.contentful.com/spaces/${spaceId}/environments/${enviroment}`,
    });
    this.managementToken = managementToken;
  }

  async list<T>(
    contentType: ContentTypeNameType,
    query: Record<string, string> = {},
  ): Promise<CmsClientListRes<T>> {
    const params = new URLSearchParams({
      ...query,
      access_token: this.deliveryToken,
      content_type: contentType,
    });

    const res = await this.deliveryClient.get<EntryCollection<T>>(
      `/entries?${params.toString()}`,
    );

    return this.normalizeListRes<T>(res.data);
  }

  // eslint-disable-next-line class-methods-use-this
  normalizeListRes<T>({
    total,
    skip,
    limit,
    items,
  }: EntryCollection<T>): CmsClientListRes<T> {
    return {
      meta: {
        total,
        skip,
        limit,
      },
      items: items.map(({ fields }) => fields),
    };
  }

  async get<T>(
    contentType: ContentTypeNameType,
    id: string,
  ): Promise<CmsClientGetRes<T>> {
    const params = new URLSearchParams({
      access_token: this.deliveryToken,
      content_type: contentType,
    });

    const { data } = await this.deliveryClient.get<Entry<T>>(
      `/entries/${id}?${params.toString()}`,
    );

    return this.normalizeGetRes(data);
  }

  // eslint-disable-next-line class-methods-use-this
  normalizeGetRes<T>({ fields }: Entry<T>): CmsClientGetRes<T> {
    return fields;
  }
}

export default new CmsClient();
